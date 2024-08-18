import { DynamoDB } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb';

const dynamo = DynamoDBDocument.from(new DynamoDB());

export const handler = async (event) => {

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        switch (event.httpMethod) {
            case 'DELETE':
                body = await dynamo.delete(event.body);
                break;
            case 'SCAN':
                body = await dynamo.scan(event.body);
                break;
            case 'GET':
                body = await dynamo.get(event.body);
                break;
            case 'POST':
                body = await dynamo.put(event.body);
                break;
            case 'PUT':
                body = await dynamo.update(event.body);
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
         
    } catch (err) {
        statusCode = '400';
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