const readTask = require("./readTask.js");
const splitData = require("../utils/splitData.js");
const writeData = require("./writeData.js");

const deleteTask = (number) => {
  let tasks = readTask("./commands/task.txt");
  let newData = splitData(tasks);
  delete newData[number - 1];
  writeData(newData);
  console.log(`Deleted task #${number}`);
};

module.exports = deleteTask;
