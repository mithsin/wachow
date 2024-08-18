import { createHmac } from 'crypto';
import {
    SignUpCommand,
    CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

export const handler = async (event) => {
    const dynamo = DynamoDBDocument.from(new DynamoDB());
    const CLIENT_SECRET = "1b9ugcedsfng5fbmsgsi723f2ogli8ahs80iv0mb39a65h7geqjk";
    const CLIENT_ID = "6o184j9jtqoppp23ga6vpm6ghg";
    const USER_POOL_ID = "us-east-1_6bHYnsMX0";
    const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
    const hasher = createHmac('sha256', CLIENT_SECRET).update(`${event.email}${CLIENT_ID}`);
    const secretHash = hasher.digest('base64');
    const command = new SignUpCommand({
        UserPoolId: USER_POOL_ID,
        ClientId: CLIENT_ID,
        Password: event.password,
        Username: event.email,
        SecretHash: secretHash,
        UserAttributes: [{ Name: "email", Value: event.email }]
    });



    const response = await client.send(command);
    if(response['$metadata'].httpStatusCode === 200){
        const tableName = "waChow-user-db";
        const item = {
            "id": response.UserSub,
            "owner": response.UserSub,
            "email": event.email,
        }
        await dynamo.put(
            {
                "TableName": tableName,
                "Item": item
            }
        )
    }
    return response
}


// response-UserSub--->:  34f81498-90d1-70fa-b08b-303415238567
// response-$metadata--->:  {
//   httpStatusCode: 200,
//   requestId: '6c7b0e05-d3d1-4769-9f42-cd3bca6a5c53',
//   extendedRequestId: undefined,
//   cfId: undefined,
//   attempts: 1,
//   totalRetryDelay: 0
// }

// {
//     "$metadata": {
//       "httpStatusCode": 200,
//       "requestId": "aff3144b-dbf4-4ecb-8133-0f7fed43dddc",
//       "attempts": 1,
//       "totalRetryDelay": 0
//     },
//     "CodeDeliveryDetails": {
//       "AttributeName": "email",
//       "DeliveryMedium": "EMAIL",
//       "Destination": "p***@g***"
//     },
//     "UserConfirmed": false,
//     "UserSub": "949814f8-b031-704d-44c3-af0a380190a9"
//   }
