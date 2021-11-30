const readTask = require("./readTask");
const writeData = require("./writeData");
const splitData = require("../utils/splitData");
const sortData = require("../utils/sortData");

const sortTaskByPriority = (filename) => {
  let tasks = readTask(filename);
  let newData = [];
  newData = splitData(tasks);
  sortedData = sortData(newData);
  writeData(sortedData, "./task.txt");
  return newData;
};

module.exports = sortTaskByPriority;
