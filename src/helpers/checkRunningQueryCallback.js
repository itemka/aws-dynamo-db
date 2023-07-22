function checkRunningQueryCallback(error, data) {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Success", JSON.stringify(data, null, 2));
  }
}

module.exports = {
  checkRunningQueryCallback,
}