// Does task sorting in task.txt with respect to priority

const readTask = require( "./readTask" );
const writeData = require("./writeData");
const { splitData } = require("./splitData");
const sortData = require("./sortData");

// Read, split, sort by priority, write back to task.txt
const sortTaskByPriority = (filename) => {
  let tasks = readTask(filename);
  let newData = [];
  newData = splitData(tasks);
  sortedData = sortData(newData);
  writeData(sortedData, "./task.txt");
  return newData;
};

module.exports = sortTaskByPriority;