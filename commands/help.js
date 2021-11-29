// load fs
const fs = require("fs");

// read the file
const content = `Usage :-
$ ./task add 2 hello world     # Add a new item with priority 2 and text "hello world" to the list
$ ./task ls                    # Show incomplete priority list items sorted by priority in ascending order
$ ./task del NUMBER   # Delete the incomplete item with the given priority number
$ ./task done NUMBER  # Mark the incomplete item with the given PRIORITY_NUMBER as complete
$ ./task help                  # Show usage
$ ./task report                # Statistics`;

argv = process.argv.slice(2);

// Create help command

const helpCommand = () => {
  // When running only "./task"
  if (process.argv.slice(2) == false || argv[0] === "help") {
    console.log(content.toString());
  }
};

module.exports = helpCommand;
