const readTask = require("./readTask");
const writeData = require("./writeData");
const splitData = require("../utils/splitData");
const sortData = require("../utils/sortData");

const sortTaskByPriority = () => {
  let tasks = readTask("./commands/task.txt");
  let data = splitDataByLine(tasks);
  let newData = [];
  newData = splitData(data);
  sortData(newData);

  writeData(newData, "./commands/task.txt");
  return newData;
};

module.exports = sortTaskByPriority;
