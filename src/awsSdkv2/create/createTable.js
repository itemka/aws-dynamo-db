const { dynamodb } = require("../../db/dynamodb");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  AttributeDefinitions: [
    {
      AttributeName: 'customerId',
      AttributeType: 'N'
    },
    {
      AttributeName: 'customerName',
      AttributeType: 'S'
    },
    {
      AttributeName: 'age',
      AttributeType: 'S'
    },
  ],
  KeySchema: [
    {
      AttributeName: 'customerId',
      KeyType: 'HASH'
    },
    {
      AttributeName: 'customerName',
      KeyType: 'RANGE'
    },
    {
      AttributeName: 'age',
    },
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  },
  StreamSpecification: {
    StreamEnabled: false
  }
};

dynamodb.createTable(dynamodbParams, checkRunningQueryCallback);