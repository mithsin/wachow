import {
  ConfirmSignUpCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { createHmac } from "crypto";

export const handler = async (event) => {
  const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
  const CLIENT_SECRET = "1b9ugcedsfng5fbmsgsi723f2ogli8ahs80iv0mb39a65h7geqjk";
  const CLIENT_ID = "6o184j9jtqoppp23ga6vpm6ghg";
  const hasher = createHmac("sha256", CLIENT_SECRET).update(`${event.email}${"6o184j9jtqoppp23ga6vpm6ghg"}`);
  const secretHash = hasher.digest("base64");

  const command = new ConfirmSignUpCommand({
    ClientId: CLIENT_ID,
    Username: event.email,
    ConfirmationCode: event.confirmationCode,
    SecretHash: secretHash,
  });

  return client.send(command);
};