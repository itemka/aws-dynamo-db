const { dynamodb } = require("../../db/dynamodb");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  Key: {
    customerId: {
      N: '2'
    },
    customerName: {
      S: 'Richard Roe 2',
    }
  },
  UpdateExpression: 'SET #age = :age',
  ExpressionAttributeNames: {
    '#age': 'age',
  },
  ExpressionAttributeValues: {
    ':age': {
      'S': '20'
    }
  },
};

dynamodb.updateItem(dynamodbParams, checkRunningQueryCallback);