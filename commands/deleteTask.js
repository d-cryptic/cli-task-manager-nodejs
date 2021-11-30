const readTask = require("./readTask.js");
const splitData = require("../utils/splitData.js");
const writeData = require("./writeData.js");

const deleteTask = (number) => {
  let tasks = readTask("./task.txt");
  let newData = splitData(tasks);
  // delete newData[ number - 1 ];
  newData.splice(number - 1, 1);
  writeData(newData, "./task.txt");
  console.log(`Deleted task #${number}`);
};

module.exports = deleteTask;
