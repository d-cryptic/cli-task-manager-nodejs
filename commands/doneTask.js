const readTask = require("./readTask.js");
const splitData = require("../utils/splitData.js");
const { appendDoneTask } = require("./appendTask.js");
const writeData = require("./writeData.js");

const doneTask = (number) => {
  let tasks = readTask("./task.txt");
  let newData = splitData(tasks);
  let completedTasks = newData[number - 1];
  appendDoneTask(completedTasks, "./done.txt");
  // delete newData[ number - 1 ];
  newData.splice(number - 1, 1);
  writeData(newData, "./task.txt");
  console.log("Marked item as done.");
};

module.exports = doneTask;
