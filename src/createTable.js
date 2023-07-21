const { dynamodb } = require("./db/dynamodb");
const { checkRunningQueryCallback } = require("./helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

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
  TableName: DYNAMODB_TABLE,
  StreamSpecification: {
    StreamEnabled: false
  }
};

dynamodb.createTable(dynamodbParams, checkRunningQueryCallback);