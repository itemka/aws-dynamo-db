const AWS = require('aws-sdk');
const { dynamodbOptions } = require("./config/dynamodbOptions");

const dynamodb = new AWS.DynamoDB(dynamodbOptions);

const dynamodbParams = {
  AttributeDefinitions: [
    {
      AttributeName: 'customerId',
      AttributeType: 'N'
    },
    {
      AttributeName: 'customerName',
      AttributeType: 'S'
    }
  ],
  KeySchema: [
    {
      AttributeName: 'customerId',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'customerName',
      KeyType: 'RANGE'
    }
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  TableName: 'customer-list',
  StreamSpecification: {
    StreamEnabled: false
  }
};

dynamodb.createTable(dynamodbParams, (error, data) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Table Created", data);
  }
});

