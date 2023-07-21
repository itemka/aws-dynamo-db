require('dotenv').config();
const AWS = require('aws-sdk');

const { dynamodbOptions } = require("../config/dynamodbOptions");

const docClient = new AWS.DynamoDB.DocumentClient(dynamodbOptions);

module.exports = {
  docClient,
}