const { docClient } = require("../../db/docClient");

const { DYNAMODB_TABLE_MOVIES } = process.env;

const dynamodbParams = {
    TableName: DYNAMODB_TABLE_MOVIES,
    KeyConditionExpression: "#yr = :yyyy",
    ExpressionAttributeNames:{
        "#yr": "year"
    },
    ExpressionAttributeValues: {
        ":yyyy": 1985
    }
};

docClient.query(dynamodbParams, function(err, data) {
    if (err) {
        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
    } else {
        console.log("Query succeeded.");

        data.Items.forEach(function(item) {
            console.log(`- ${item.year}: ${item.title}`);
        });
    }
});