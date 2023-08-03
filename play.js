const { connect } = require("./client");

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function() {
  process.stdin.on("data", (data) => {
    const input = data.toString().trim();
    // Check for the "ctrl + c" input (SIGINT signal)
    if (input === "\u0003") {
      console.log("Exiting the game...");
      // Terminate the game or perform any other cleanup tasks here
      process.exit();
    }
  });
};

handleUserInput();
