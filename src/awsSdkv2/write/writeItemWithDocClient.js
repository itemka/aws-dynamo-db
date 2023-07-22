const { docClient } = require("../../db/docClient");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  Item: {
    customerId: 2,
    customerName: 'Richard Roe 2',
  }
};

docClient.put(dynamodbParams, checkRunningQueryCallback);