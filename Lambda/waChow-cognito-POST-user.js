import {
	SignUpCommand,
    ResendConfirmationCodeCommand,
	ConfirmSignUpCommand,
	InitiateAuthCommand,
    CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { createHmac } from 'crypto';
import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

export const handler = async (event) => {
	const CLIENT_SECRET = "1b9ugcedsfng5fbmsgsi723f2ogli8ahs80iv0mb39a65h7geqjk";
    const CLIENT_ID = "6o184j9jtqoppp23ga6vpm6ghg";
    const USER_POOL_ID = "us-east-1_6bHYnsMX0";
    const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
    const hasher = createHmac("sha256", CLIENT_SECRET).update(`${event.email}${"6o184j9jtqoppp23ga6vpm6ghg"}`);
	const secretHash = hasher.digest("base64");

	let command;

	if(event.triggerSource == 'SignIn'){
        const command = new InitiateAuthCommand({
			AuthFlow: "USER_PASSWORD_AUTH",
			AuthParameters: {
				USERNAME: event.email,
				PASSWORD: event.password,
				SECRET_HASH: secretHash,
			},
			ClientId: CLIENT_ID,
		});
	
		const user = client.send(command);
		console.log('user-->: ', user)
		return user;
	}

	if(event.triggerSource == 'SignUp'){
		command = new SignUpCommand({
			UserPoolId: USER_POOL_ID,
			ClientId: CLIENT_ID,
			Password: event.password,
			Username: event.email,
			SecretHash: secretHash,
			UserAttributes: [{ Name: "email", Value: event.email }]
		});

		const response = await client.send(command);
			if(response['$metadata'].httpStatusCode === 200){
				const dynamo = DynamoDBDocument.from(new DynamoDB());
				const tableName = "waChow-user-db";
				const item = {
					"id": response.UserSub,
					"owner": response.UserSub,
					"email": event.email,
				};
				await dynamo.put(
					{
						"TableName": tableName,
						"Item": item
					}
				);
			}
		return response;
	}
	
	if(event.triggerSource == 'ConfirmSignUp'){
        command = new ConfirmSignUpCommand({
			ClientId: CLIENT_ID,
			Username: event.email,
			ConfirmationCode: event.confirmationCode,
			SecretHash: secretHash,
		});
		return client.send(command);
	}

	if(event.triggerSource == 'ResendCode'){
        command = new ResendConfirmationCodeCommand({
			ClientId: CLIENT_ID,
			Username: event.email,
			SecretHash: secretHash,
		});
		return client.send(command);
	}

};