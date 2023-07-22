const { docClient } = require("../../db/docClient");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  Key: {
    customerId: 2,
    customerName: 'Richard Roe 2',
  },
  UpdateExpression: 'set age = :age',
  ExpressionAttributeValues: {
    ':age': '27',
  },
};

docClient.update(dynamodbParams, checkRunningQueryCallback);