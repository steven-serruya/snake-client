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
    case '1':
      connection.write("Say: Hi, I am Steven!"); // Player can press '1' to send this message
      break;
    case '2':
      connection.write("Say: Watch out, here I come!"); // Player can press '2' to send this message
      break;
    case '3':
      connection.write("I'm about to win this game!"); // Player can press '2' to send this message
      break;
    default:
      break;
  }
};

module.exports = { setupInput };


