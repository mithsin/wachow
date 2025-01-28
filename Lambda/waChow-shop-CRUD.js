import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  PutCommand,
  GetCommand,
  BatchGetCommand,
  DeleteCommand,
} from "@aws-sdk/lib-dynamodb";
const client = new DynamoDBClient({});

const dynamo = DynamoDBDocumentClient.from(client);

const userTableName = "waChow-user-db";
const shopTableName ="waChow-shop-db";
const itemTableName = "waChow-item-db";

const groupByKey = (array, key) => {
  const result = {};
  const arrayOfKey = []

  array.forEach(item => {
    const keyValue = item[key];

    if (!result[keyValue]) {
      result[keyValue] = [];
      arrayOfKey.push(keyValue)
    }

    result[keyValue].push(item);
  });

  return {
    categories: Object.values(result),
    categoryList: arrayOfKey
  };
  // const newValue = Object.entries(result).map(([key, value]) => [{'category': key, items: value}]);
  // return newValue;
}

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
              id: event.shopId,
            },
          })
        );
        body = `Deleted item ${event.shopId}`;
        break;
      case "GET":
        body = await dynamo.send(
          new GetCommand({
            TableName: shopTableName,
            Key: {
              id: event.shopId,
            },
          })
        ); 
        break;
      case "PUT":
            const getBody = await dynamo.send(
                new GetCommand({
                  TableName: shopTableName,
                  Key: {
                    id: event.shopId,
                  },
                })
              );
            body = await dynamo.send(
            new PutCommand({
                TableName: shopTableName,
                Item: {
                    ...event.updateJson,
                    ...getBody.Item,
                    id: event.shopId
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
              id: event.shopId,
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
        const shopResponse = await dynamo.send(
          new GetCommand({
            TableName: shopTableName,
            Key: {
              id: event.shopId,
            },
          })
        );

        const shopData = shopResponse.Item.items;
        const params = {
          RequestItems: {
              [itemTableName]: {
                  Keys: shopData,
              },
          },
      };

      try {
        const data = await dynamo.send(new BatchGetCommand(params));
        const convertResponseName = {
          "$metadata": data.$metadata,
          "Responses": {
            "shop": shopResponse.Item,
            ...groupByKey(data.Responses[itemTableName], "categoryName")
          }
        }
        body = convertResponseName;
      } catch (error) {
        console.error("Error fetching items:", error);
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