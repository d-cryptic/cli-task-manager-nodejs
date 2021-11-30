// importing all command functions
const help = require("./commands/help.js");
const addTask = require("./commands/add.js");
const { listData } = require("./commands/listTask.js");
const doneTask = require("./commands/doneTask.js");
const deleteTask = require("./commands/deleteTask.js");
const reportTask = require("./commands/reportTask.js");

argv = process.argv.slice(2);


// special case - when running only the file - shows help menu
if (!argv[0]) {
  help();
}

// calling the function with command line arguments as parameter
switch (argv[0]) {
  case "help":
    help();
    break;

  case "add":
    addTask(parseInt(argv[1]), argv[2]);
    break;

  case "ls":
    listData("./task.txt");
    break;

  case "done":
    doneTask(argv[1]);
    break;

  case "del":
    deleteTask(argv[1]);
    break;

  case "report":
    reportTask();
    break;
}
