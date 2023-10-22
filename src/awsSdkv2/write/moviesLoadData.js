const fs = require('fs');
const path = require('path');
const { docClient } = require("../../db/docClient");
const { checkRunningQueryCallback } = require("../../helpers/checkRunningQueryCallback");

const { DYNAMODB_TABLE_MOVIES } = process.env;

console.log("Importing movies into DynamoDB. Please wait...");

const moviedataJSON = fs.readFileSync(path.join(__dirname, "../../data/moviedata.json"), 'utf8');
const allMovies = JSON.parse(moviedataJSON);

allMovies.forEach(function(movie) {
  const dynamodbParams = {
    TableName: DYNAMODB_TABLE_MOVIES,
    Item: {
      "year": movie.year,
      "title": movie.title,
      "info": movie.info
    }
  };

  docClient.put(dynamodbParams, checkRunningQueryCallback);
})

                