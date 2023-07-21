const AWS = require('aws-sdk');
const { createServer } = require('dynamodb-admin');

const dynamodb = new AWS.DynamoDB({
  region: "local",
  endpoint: "http://localhost:8000",
  credentials:{
    accessKeyId: "fake",
    secretAccessKey: "fake"
  }
});

const dynClient = new AWS.DynamoDB.DocumentClient({ service: dynamodb });

const app = createServer(dynamodb, dynClient);

const PORT = 8001;

const server = app.listen(PORT);

server.on('listening', () => {
  const address = server.address();

  console.log(`Listening on http://0.0.0.0:${address.port}`);
});


