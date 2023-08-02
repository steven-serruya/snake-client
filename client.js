const { connect } = require("./play");
const { setEncoding, on } = connect();
setEncoding("utf8");
on("connect", () => {
  console.log("Connected to the server!");
});





