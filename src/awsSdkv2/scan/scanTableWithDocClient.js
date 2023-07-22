const { docClient } = require("../../db/docClient");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  FilterExpression: 'begins_with(#secondName, :startText)',
  ExpressionAttributeNames: {
    '#secondName': 'secondName',
  },
  ExpressionAttributeValues: {
    ":startText": "s",
  },
  ProjectionExpression: "customerName, age",
};

docClient.scan(dynamodbParams, checkRunningQueryCallback);