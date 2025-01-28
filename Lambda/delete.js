import { DynamoDBClient, BatchGetItemCommand } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const userTableName = "waChow-user-db";
const shopTableName ="waChow-shop-db"

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
            TableName: shopTableName,
            Key: {
              id: event.id,
            },
          })
        );
        body = `Deleted item ${event.id}`;
        break;
      case "GET":
        response = await dynamo.send(
          new GetCommand({
            TableName: shopTableName,
            Key: {
              id: event.id,
            },
          })
        );
        body = response.body;
        break;
      case "PUT":
            const getBody = await dynamo.send(
                new GetCommand({
                  TableName: shopTableName,
                  Key: {
                    id: event.id,
                  },
                })
              );
            body = await dynamo.send(
            new PutCommand({
                TableName: shopTableName,
                Item: {
                    ...event.updateJson,
                    ...getBody.Item,
                    id: event.id
                },
            }));
            body = body.Item;
        break;
      case "POST":
        const randomId = context.awsRequestId;
        body = await dynamo.send(
        new PutCommand({
            TableName: shopTableName,
            Item: {
              ...event.updateJson,
              id: randomId
            },
        }));

        const getUserBody = await dynamo.send(
          new GetCommand({
            TableName: userTableName,
            Key: {
              id: event.id,
            },
          })
        );

        await dynamo.send(
          new PutCommand({
              TableName: userTableName,
              Item: {
                  ...getUserBody.Item,
                  shops: [
                    ...getUserBody.Item.shops,
                    randomId
                  ]
              }
          })
        );
        body = body.Item;
      break;
      case "GET_SHOP_AND_ALL_ITEMS":
        response = await dynamo.send(
          new GetCommand({
            TableName: shopTableName,
            Key: {
              id: event.id,
            },
          })
        );
        shopData = response.items;

        const params = {
            RequestItems: {
              'waChow-item-db': {
                Keys: shopData.map(id => ({ id })),
              },
            },
          };
          try {
            const data = await client.send(new BatchGetItemCommand(params));
            return data.Responses?.['waChow-item-db'] || [];
          } catch (error) {
            console.error('Error fetching items:', error);
            throw error;
          }
        break;
      case "GETITEMS":
        body = await dynamo.send(new ScanCommand({ TableName: shopTableName }));
        body = body.Items;
        break;
      case "PUTITEMS":
        let requestJSON = JSON.parse(event.body);
        await dynamo.send(
          new PutCommand({
            TableName: shopTableName,
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
    body = JSON.stringify(body);
  }

  return {
    statusCode,
    body,
    headers,
  };
};


//GET
// {
//     "statusCode": 200,
//     "body": "{\"owner\":\"94a85458-20c1-7084-23a9-6f5ca6be8ef0\",\"id\":\"405bccfe-9d11-4db3-b4c1-4b287897e9b7\",\"phone\":\"6782003845\",\"items\":[{\"id\":\"3aee8fcb-2070-4269-bd4c-325e0424dbda\"},{\"id\":\"2856d469-d38b-40c4-95e9-73124e71aac7\"},{\"id\":\"ca0dae3e-9684-47ba-bc0f-04e633c62d49\"},{\"id\":\"26745c0f-72b5-4f7c-83e3-fd61779d37b5\"},{\"id\":\"476a4ee6-fbf6-4515-98c8-67bd850ca692\"},{\"id\":\"94917234-7609-4410-b9a3-b0d632b10e86\"},{\"id\":\"c01fcb83-982f-4091-83a3-828b91e4defb\"}],\"shopName\":\"True shop 01\",\"typename\":\"shop\"}",
//     "headers": {
//       "Content-Type": "application/json"
//     }
//   }


{
  '$metadata': {
    httpStatusCode: 200,
    requestId: '77H30CVR2EH95GIE4N6LDD04M7VV4KQNSO5AEMVJF66Q9ASUAAJG',
    extendedRequestId: undefined,
    cfId: undefined,
    attempts: 1,
    totalRetryDelay: 0
  },
  Item: {
    owner: '94a85458-20c1-7084-23a9-6f5ca6be8ef0',
    id: '405bccfe-9d11-4db3-b4c1-4b287897e9b7',
    phone: '6782003845',
    items: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    shopName: 'True shop 01',
    typename: 'shop'
  }
}