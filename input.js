let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
};

const handleUserInput = function(data) {
  const input = data.toString().trim();
  // Check for the "ctrl + c" input (SIGINT signal)
  if (input === "\u0003") {
    console.log("Exiting the game...");
    process.exit();
  }

  switch (input) {
    case 'w':
      connection.write("Move: up");
      break;
    case 'a':
      connection.write("Move: left");
      break;
    case 's':
      connection.write("Move: down");
      break;
    case 'd':
      connection.write("Move: right");
      break;
    default:
      break;
  }
};

module.exports = { setupInput };
