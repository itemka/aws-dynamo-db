const { dynamodb } = require("./db/dynamodb");
const { checkRunningQueryCallback } = require("./helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  Item: {
    customerId: {
      N: '1',
    },
    customerName: {
      S: 'Richard Roe',
    }
  }
};

dynamodb.putItem(dynamodbParams, checkRunningQueryCallback);