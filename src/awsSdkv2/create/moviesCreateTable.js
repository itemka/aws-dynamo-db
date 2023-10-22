const { dynamodb } = require("../../db/dynamodb");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE_MOVIES } = process.env;

const dynamodbParams = {
    TableName: DYNAMODB_TABLE_MOVIES,
    AttributeDefinitions: [
        {
          AttributeName: 'year',
          AttributeType: 'N'
        },
        {
            AttributeName: 'title',
            AttributeType: 'S'
        },
    ],
    KeySchema: [
        {   // Partition key
            AttributeName: 'year',
            KeyType: 'HASH'
        },
        {   // Sort key
            AttributeName: 'title',
            KeyType: 'RANGE'
        },
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 10,
        WriteCapacityUnits: 10
    },
};

dynamodb.createTable(dynamodbParams, checkRunningQueryCallback);