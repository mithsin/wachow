import {
    AdminGetUserCommand,
    CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { createHmac } from "crypto";

export const handler = async (event) => {
    const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
    const CLIENT_SECRET = "1b9ugcedsfng5fbmsgsi723f2ogli8ahs80iv0mb39a65h7geqjk";
    const CLIENT_ID = "6o184j9jtqoppp23ga6vpm6ghg";
    const USER_POOL_ID = "us-east-1_6bHYnsMX0";
    const hasher = createHmac("sha256", CLIENT_SECRET).update(`${event.email}${"6o184j9jtqoppp23ga6vpm6ghg"}`);
    const secretHash = hasher.digest("base64");
    
    const command = new AdminGetUserCommand({
        UserPoolId: USER_POOL_ID,
        ClientId: CLIENT_ID,
        Username: event.email,
        SecretHash: secretHash
    });

    const user = await client.send(command);
    console.log('user--->: ', user)
    console.log('user.UserStatus--->: ', user.UserStatus)
    if(user && user.UserStatus === "CONFIRMED"){
        return user
    } else {
        return {
            STATUS_CODES: 200,
            user_status: "email had not been verified"
        }
    }
};

// {
//     "$metadata": {
//     "httpStatusCode": 200,
//     "requestId": "d6529987-0240-4e13-9fff-6406be66af25",
//     "attempts": 1,
//     "totalRetryDelay": 0
// },
// "Enabled": true,
// "UserAttributes": [
//     {
//     "Name": "email",
//     "Value": "hsinbluemoon@gmail.com"
//     },
//     {
//     "Name": "email_verified",
//     "Value": "true"
//     },
//     {
//     "Name": "sub",
//     "Value": "94d8f478-60d1-70ff-d24d-c6d5a3b14e2f"
//     }
// ],
// "UserCreateDate": "2024-08-10T09:21:53.034Z",
// "UserLastModifiedDate": "2024-08-13T21:05:09.484Z",
// "UserStatus": "CONFIRMED",
// "Username": "94d8f478-60d1-70ff-d24d-c6d5a3b14e2f"
// }

// {
// "$metadata": {
//     "httpStatusCode": 200,
//     "requestId": "46eb6c4a-deaa-4a61-8ab5-ac06065981e9",
//     "attempts": 1,
//     "totalRetryDelay": 0
// },
// "Enabled": true,
// "UserAttributes": [
//     {
//     "Name": "email",
//     "Value": "paf1100@gmail.com"
//     },
//     {
//     "Name": "email_verified",
//     "Value": "false"
//     },
//     {
//     "Name": "sub",
//     "Value": "94884438-d011-7051-d6b8-95ab91ce636f"
//     }
// ],
// "UserCreateDate": "2024-08-16T00:00:48.009Z",
// "UserLastModifiedDate": "2024-08-16T00:00:48.009Z",
// "UserStatus": "UNCONFIRMED",
// "Username": "94884438-d011-7051-d6b8-95ab91ce636f"
// }
