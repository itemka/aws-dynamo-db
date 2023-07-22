const { dynamodb } = require("../../db/dynamodb");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE } = process.env;

const dynamodbParams = {
  TableName: DYNAMODB_TABLE,
  FilterExpression: 'begins_with(#secondName, :startText)',
  ExpressionAttributeNames: {
    '#secondName': 'secondName',
  },
  ExpressionAttributeValues: {
    ":startText": {
      S: "s",
    },
  },
  ProjectionExpression: "customerName, age",
};

dynamodb.scan(dynamodbParams, checkRunningQueryCallback);