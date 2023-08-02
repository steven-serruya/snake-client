const { connect } = require("./play");

// Call the connect function to establish the connection and get the connection object
const connection = connect();

// Set the encoding for incoming data
connection.setEncoding("utf8");

// Add an event listener for the "connect" event
connection.on("connect", () => {
  console.log("Connected to the server!");
});
