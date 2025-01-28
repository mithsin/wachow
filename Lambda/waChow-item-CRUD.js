import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const shopTableName ="waChow-shop-db";
const itemTableName = "waChow-item-db";

export const handler = async (event, context) => {
  let body;
  let statusCode = 200;
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    switch (event.triggerSource) {
      case "DELETE":
        await dynamo.send(
          new DeleteCommand({
            TableName: itemTableName,
            Key: {
              id: event.id,
            },
          })
        );
        body = `Deleted item ${event.id}`;
        break;
      case "GET":
        body = await dynamo.send(
          new GetCommand({
            TableName: itemTableName,
            Key: {
              id: event.id,
            },
          })
        );
        body = body.Item;
        break;
      case "PUT":
            const timestamp = new Date().toISOString();
            const getBody = await dynamo.send(
                new GetCommand({
                  TableName: itemTableName,
                  Key: {
                    id: event.id,
                  },
                })
              );
            body = await dynamo.send(
            new PutCommand({
                TableName: itemTableName,
                Item: {

                    ...getBody.Item,
                    ...event.updateJson,
                    updatedAt: timestamp,
                    id: event.id
                },
            }));
            body = body.Item;
        break;
      case "POST":
        if(event.updateJson){

          const randomId = context.awsRequestId;
          const timestamp = new Date().toISOString();
          body = await dynamo.send(
          new PutCommand({
              TableName: itemTableName,
              Item: {
                ...event.updateJson,
                createdAt: timestamp,
                id: randomId
              },
          }));
  
          const getShopBody = await dynamo.send(
            new GetCommand({
              TableName: shopTableName,
              Key: {
                id: event.id,
              },
            })
          );
  
          await dynamo.send(
            new PutCommand({
                TableName: shopTableName,
                Item: {
                    ...getShopBody.Item,
                    items: [
                      ...getShopBody.Item?.items,
                      {id: randomId}
                    ]
                }
            })
          );
          statusCode = 200;
          body = body.Item;
        } else {
          statusCode = 204;
          body = {};
        }
      break;
      case "GETTHREEITEMS":
        body = await dynamo.send(new ScanCommand({ TableName: itemTableName, Limit: 3 }));
        body = body.Items;
      break;
      case "GETITEMS":
        body = await dynamo.send(new ScanCommand({ TableName: itemTableName }));
        body = body.Items;
        break;
      case "PUTITEMS":
        let requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: itemTableName,
            Item: {
                ...event.updateJson,
                ...requestJSON,
                id: requestJSON.id
            },
          })
        );
        body = `Put`;
        break;
      default:
        throw new Error(`Unsupported format`);
    }
  } catch (err) {
    statusCode = 400;
    body = err.message;
  } finally {
    body = body;
  }

  return {
    statusCode,
    body,
    headers,
  };
};
