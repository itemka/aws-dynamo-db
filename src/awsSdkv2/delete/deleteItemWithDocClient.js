const { docClient } = require("../../db/docClient");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  Key: {
    customerId: 2,
    customerName: 'Richard Roe 4',
  },
};

docClient.delete(dynamodbParams, checkRunningQueryCallback);