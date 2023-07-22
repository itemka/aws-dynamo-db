const { dynamodb } = require("../../db/dynamodb");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  Key: {
    customerId: {
      N: '1'
    },
    customerName: {
      S: 'Richard Roe',
    }
  },
  ProjectionExpression: 'customerId'
};

dynamodb.getItem(dynamodbParams, checkRunningQueryCallback);