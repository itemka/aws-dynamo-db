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
      S: 'Richard Roe 4',
    }
  },
};

dynamodb.deleteItem(dynamodbParams, checkRunningQueryCallback);