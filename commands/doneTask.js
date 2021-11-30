const readTask = require("./readTask.js");
const splitData = require("../utils/splitData.js");
const { appendDoneTask } = require("./appendTask.js");
const writeData = require("./writeData.js");

const doneTask = (number) => {
  let tasks = readTask("./commands/task.txt");
  let newData = splitData(tasks);
  let completedTasks = newData[number - 1];
  appendDoneTask(completedTasks);
  delete newData[number - 1];
  writeData(newData);
  console.log("Marked item as done.");
};

module.exports = doneTask;
