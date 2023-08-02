const { connect } = require("./play");

const connection = connect();

connection.setEncoding("utf8");

connection.on("connect", () => {
  console.log("Connected to the server!");
});

connection.on("connect", () => {
  console.log("Name: ___");
});
