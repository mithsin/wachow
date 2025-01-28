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
                body = await dynamo.delete(JSON.parse(event.body));
                break;
            case 'GET':
                body = await dynamo.scan({ TableName: event.body.TableName });
                break;
            case 'POST':
                body = await dynamo.put(JSON.parse(event.body));
                break;
            case 'PUT':
                body = await dynamo.update(JSON.parse(event.body));
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



{
    "httpMethod": "POST",
    "body": {
            "userName": "johnnysmith",
        "request": {
        "userAttributes": {
            "subId": "subid-test-1-laskdjfoijwqokfjsldkjfowife",
            "email": "abc@defg.com"
        }
    }}
}