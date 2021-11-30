const fs = require("fs");
const help = require("./commands/help.js");
const add = require("./commands/add.js");
const list = require("./commands/list.js");
const done = require("./commands/doneTask.js");
const deleteTask = require("./commands/deleteTask.js");
const reportTask = require("./commands/reportTask.js");
const { report } = require("process");

argv = process.argv.slice(2);

if (argv(2) == false || argv[0] === "help") {
  help();
}

if (argv[0] === "add") {
  add(argv[1], argv[2]);
}

if (argv[0] === "ls") {
  list();
}

if (argv[0] === "done") {
  done(argv[1]);
}

if (argv[0] === "del") {
  deleteTask(argv[1]);
}

if (argv[0] === "report") {
  report();
}
