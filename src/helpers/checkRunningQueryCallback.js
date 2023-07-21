function checkRunningQueryCallback(error, data) {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Success", data);
  }
}

module.exports = {
  checkRunningQueryCallback,
}