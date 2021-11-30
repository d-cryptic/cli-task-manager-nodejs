const help = require("./commands/help.js");
const addTask = require("./commands/add.js");
const { listData } = require("./commands/listTask.js");
const doneTask = require("./commands/doneTask.js");
const deleteTask = require("./commands/deleteTask.js");
const reportTask = require("./commands/reportTask.js");

argv = process.argv.slice(2);

if (!argv[0] || argv[0] === "help") {
  help();
}

if (argv[0] === "add") {
  addTask(parseInt(argv[1]), argv[2]);
}

if (argv[0] === "ls") {
  listData("./task.txt");
}

if (argv[0] === "done") {
  doneTask(argv[1]);
}

if (argv[0] === "del") {
  deleteTask(argv[1]);
}

if (argv[0] === "report") {
  reportTask();
}
