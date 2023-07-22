const { docClient } = require("../../db/docClient");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  KeyConditionExpression: '#customerId = :customerId',
  FilterExpression: 'begins_with(#secondName, :startText)',
  ExpressionAttributeNames: {
    '#customerId': 'customerId',
    '#secondName': 'secondName',
  },
  ExpressionAttributeValues: {
    ':customerId': 2,
    ':startText': 's'
  },
};

docClient.query(dynamodbParams, checkRunningQueryCallback);