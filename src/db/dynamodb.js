require('dotenv').config();
const AWS = require('aws-sdk');

const { dynamodbOptions } = require("../config/dynamodbOptions");

const dynamodb = new AWS.DynamoDB(dynamodbOptions);

module.exports = {
  dynamodb,
}