const { dynamodb } = require("../../db/dynamodb");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  KeyConditionExpression: 'customerId = :customerId',
  ExpressionAttributeValues: {
    ':customerId': {
      'N': '2'
    },
  },
  ProjectionExpression: 'age',
};

dynamodb.query(dynamodbParams, checkRunningQueryCallback);