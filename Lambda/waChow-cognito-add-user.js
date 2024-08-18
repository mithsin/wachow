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

// import { createHmac } from 'crypto';
// import {
//     SignUpCommand,
//     CognitoIdentityProviderClient,
// } from "@aws-sdk/client-cognito-identity-provider";
// export const handler = async (event) => {
//     const CLIENT_SECRET = "1b9ugcedsfng5fbmsgsi723f2ogli8ahs80iv0mb39a65h7geqjk";
//     const CLIENT_ID = "6o184j9jtqoppp23ga6vpm6ghg";
//     const USER_POOL_ID = "us-east-1_6bHYnsMX0";
//     const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
//     const hasher = createHmac('sha256', CLIENT_SECRET).update(`${event.email}${CLIENT_ID}`);
//     const secretHash = hasher.digest('base64');
//     const command = new SignUpCommand({
//         UserPoolId: USER_POOL_ID,
//         ClientId: CLIENT_ID,
//         Password: event.password,
//         Username: event.email,
//         SecretHash: secretHash,
//         UserAttributes: [{ Name: "email", Value: event.email }]
//     });

//     const response = await client.send(command);
//     return response
// }


// {
//     "id": "id-lasdjfoi29fj9ws-asdfjasdjf92jflsjdf9d2jf0af-asdfsaf",
//     "password": "$fiso2lfj0EEzos1100jfsd",
//     "email": "hsinbluemoon@gmail.com"
//   }