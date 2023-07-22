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
  UpdateExpression: 'SET #secondName = :secondName',
  ExpressionAttributeNames: {
    '#secondName': 'secondName',
  },
  ExpressionAttributeValues: {
    ':secondName': {
      'S': 'test second name'
    }
  },
};

dynamodb.updateItem(dynamodbParams, checkRunningQueryCallback);