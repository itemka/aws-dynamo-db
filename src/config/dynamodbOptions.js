const dynamodbOptions = {
  region: "local",
  endpoint: "http://localhost:8000",
  credentials: {
    accessKeyId: "fake",
    secretAccessKey: "fake"
  }
}

module.exports = {
  dynamodbOptions,
}