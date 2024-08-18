const PUT = {
  "httpMethod": "PUT",
  "body": {
      "TableName": "User-vglg3q6ls5fq3omirw6tqrkpqu-main",
      "Item": {
          "subId": "549804b8-4061-704a-a307-dce1b2816c2d",
          "email": "abc@defg.com"
      }
  }
}

const GET = {
  "httpMethod": "GET",
  "body": {
      "TableName": "User-vglg3q6ls5fq3omirw6tqrkpqu-main",
      "Key": {
          "id": "549804b8-4061-704a-a307-dce1b2816c2d"
      }
  }
}

const POST = {
  "httpMethod": "POST",
  "body": {
      "TableName": "User-vglg3q6ls5fq3omirw6tqrkpqu-main",
      "Item": {
          "id": "549804b8-4061-704a-a307-dce1b2816sdsdsdc2d",
          "owner": "549804b8-4061-704a-a307-dce1b2816sdsdsdc2d",
          "email": "abc@defg.com",
          "createdAt": "2023-07-12T14:59:56.253Z"
      }
  }
}

const SCAN = {
  "httpMethod": "SCAN",
  "body": {
      "TableName": "User-vglg3q6ls5fq3omirw6tqrkpqu-main",
  }
}