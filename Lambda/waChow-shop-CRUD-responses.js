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
            "items": data.Responses[itemTableName]
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


//GET
// {
//     "statusCode": 200,
//     "body": "{\"owner\":\"94a85458-20c1-7084-23a9-6f5ca6be8ef0\",\"id\":\"405bccfe-9d11-4db3-b4c1-4b287897e9b7\",\"phone\":\"6782003845\",\"items\":[{\"id\":\"3aee8fcb-2070-4269-bd4c-325e0424dbda\"},{\"id\":\"2856d469-d38b-40c4-95e9-73124e71aac7\"},{\"id\":\"ca0dae3e-9684-47ba-bc0f-04e633c62d49\"},{\"id\":\"26745c0f-72b5-4f7c-83e3-fd61779d37b5\"},{\"id\":\"476a4ee6-fbf6-4515-98c8-67bd850ca692\"},{\"id\":\"94917234-7609-4410-b9a3-b0d632b10e86\"},{\"id\":\"c01fcb83-982f-4091-83a3-828b91e4defb\"}],\"shopName\":\"True shop 01\",\"typename\":\"shop\"}",
//     "headers": {
//       "Content-Type": "application/json"
//     }
//   }


// GET_SHOP_AND_ALL_ITEMS
{
  "$metadata": {
      "httpStatusCode": 200,
      "requestId": "9LCRLCPRKNUG42U0PUBPIN2O8FVV4KQNSO5AEMVJF66Q9ASUAAJG",
      "attempts": 1,
      "totalRetryDelay": 0
  },
  "Responses": {
      "shop": {
          "owner": "94a85458-20c1-7084-23a9-6f5ca6be8ef0",
          "id": "405bccfe-9d11-4db3-b4c1-4b287897e9b7",
          "phone": "6782003845",
          "items": [
              {
                  "id": "3aee8fcb-2070-4269-bd4c-325e0424dbda"
              },
              {
                  "id": "2856d469-d38b-40c4-95e9-73124e71aac7"
              },
              {
                  "id": "ca0dae3e-9684-47ba-bc0f-04e633c62d49"
              },
              {
                  "id": "26745c0f-72b5-4f7c-83e3-fd61779d37b5"
              },
              {
                  "id": "476a4ee6-fbf6-4515-98c8-67bd850ca692"
              },
              {
                  "id": "94917234-7609-4410-b9a3-b0d632b10e86"
              },
              {
                  "id": "c01fcb83-982f-4091-83a3-828b91e4defb"
              }
          ],
          "shopName": "True shop 01",
          "typename": "shop"
      },
      "items": [
          {
              "shopId": "405bccfe-9d11-4db3-b4c1-4b287897e9b7",
              "typename": "Item",
              "updatedAt": "",
              "createdAt": "",
              "images": [
                  {
                      "name": "logo192.png",
                      "itemId": "1349af27-62a6-40bf-a2c7-sdfadfadg3hwd",
                      "id": "febba186-4a58-4479-8159-17e01fb50a1c",
                      "src": "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_267,q_80,fl_lossy,dpr_2.0,c_fill,f_auto,h_132/s1rpyrpvzgnww1jmxus1"
                  }
              ],
              "owner": "94a85458-20c1-7084-23a9-6f5ca6be8ef0",
              "sizes": [
                  {
                      "name": "Regular",
                      "price": "12.55",
                      "id": "e0e0305b-cd12-47e3-a21d-35c3c19b9c67"
                  }
              ],
              "id": "3aee8fcb-2070-4269-bd4c-325e0424dbda",
              "ingrediances": "a slice of dragon fire",
              "name": "dragon fire",
              "shopName": "True shop 01"
          },
          {
              "shopId": "405bccfe-9d11-4db3-b4c1-4b287897e9b7",
              "typename": "Item",
              "updatedAt": "",
              "createdAt": "",
              "images": [
                  {
                      "name": "logo192.png",
                      "itemId": "1349af27-62a6-40bf-a2c7-sdfadfadg3hwd",
                      "id": "febba186-4a58-4479-8159-17e01fb50a1c",
                      "src": "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_267,q_80,fl_lossy,dpr_2.0,c_fill,f_auto,h_132/s1rpyrpvzgnww1jmxus1"
                  }
              ],
              "owner": "94a85458-20c1-7084-23a9-6f5ca6be8ef0",
              "sizes": [
                  {
                      "name": "Regular",
                      "price": "12.55",
                      "id": "e0e0305b-cd12-47e3-a21d-35c3c19b9c67"
                  }
              ],
              "id": "ca0dae3e-9684-47ba-bc0f-04e633c62d49",
              "ingrediances": "very good fried rice",
              "name": "chicken rice",
              "shopName": "True shop 01"
          },
          {
              "shopId": "405bccfe-9d11-4db3-b4c1-4b287897e9b7",
              "typename": "Item",
              "updatedAt": "",
              "createdAt": "",
              "images": [
                  {
                      "name": "logo192.png",
                      "itemId": "1349af27-62a6-40bf-a2c7-sdfadfadg3hwd",
                      "id": "febba186-4a58-4479-8159-17e01fb50a1c",
                      "src": "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_267,q_80,fl_lossy,dpr_2.0,c_fill,f_auto,h_132/s1rpyrpvzgnww1jmxus1"
                  }
              ],
              "owner": "94a85458-20c1-7084-23a9-6f5ca6be8ef0",
              "sizes": [
                  {
                      "name": "Regular",
                      "price": "12.55",
                      "id": "e0e0305b-cd12-47e3-a21d-35c3c19b9c67"
                  }
              ],
              "id": "2856d469-d38b-40c4-95e9-73124e71aac7",
              "ingrediances": "hand make noodle with soy sauce",
              "name": "dry noodle",
              "shopName": "True shop 01"
          },
          {
              "shopId": "405bccfe-9d11-4db3-b4c1-4b287897e9b7",
              "typename": "Item",
              "updatedAt": "2025-01-16T20:34:11.042Z",
              "images": [
                  {
                      "name": "logo192.png",
                      "itemId": "1349af27-62a6-40bf-a2c7-sdfadfadg3hwd",
                      "id": "febba186-4a58-4479-8159-17e01fb50a1c",
                      "src": "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_267,q_80,fl_lossy,dpr_2.0,c_fill,f_auto,h_132/s1rpyrpvzgnww1jmxus1"
                  }
              ],
              "owner": "94a85458-20c1-7084-23a9-6f5ca6be8ef0",
              "sizes": [
                  {
                      "name": "Regular",
                      "price": "12.55",
                      "id": "e0e0305b-cd12-47e3-a21d-35c3c19b9c67"
                  }
              ],
              "id": "c01fcb83-982f-4091-83a3-828b91e4defb",
              "ingrediances": "a slice of Big Dragon fire",
              "name": "Big Dragon ball",
              "shopName": "True shop 01"
          },
          {
              "shopId": "405bccfe-9d11-4db3-b4c1-4b287897e9b7",
              "typename": "Item",
              "updatedAt": "",
              "createdAt": "",
              "images": [
                  {
                      "name": "logo192.png",
                      "itemId": "1349af27-62a6-40bf-a2c7-sdfadfadg3hwd",
                      "id": "febba186-4a58-4479-8159-17e01fb50a1c",
                      "src": "https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_267,q_80,fl_lossy,dpr_2.0,c_fill,f_auto,h_132/s1rpyrpvzgnww1jmxus1"
                  }
              ],
              "owner": "94a85458-20c1-7084-23a9-6f5ca6be8ef0",
              "sizes": [
                  {
                      "name": "Regular",
                      "price": "12.55",
                      "id": "e0e0305b-cd12-47e3-a21d-35c3c19b9c67"
                  }
              ],
              "id": "26745c0f-72b5-4f7c-83e3-fd61779d37b5",
              "ingrediances": "General Tso's Chicken is that perfect combination of sweet, savoury, spicy and tangy with crispy Chinese chicken bites.",
              "name": "General Tao Chicken",
              "shopName": "True shop 01"
          }
      ]
  }
}
