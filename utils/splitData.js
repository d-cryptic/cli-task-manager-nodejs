// Splits data from txt file to javascript  object array

const splitDataByLine = require("../utils/splitDataByLine");
const splitDataBySpace = require("../utils/splitDataBySpace");
const convertToNumber = require("../utils/convertToNumber");

// For pending tasks from task.txt
const splitData = (data) => {
  // Split data by line, then split data by first space and converts the priority to number

  let newData = [];
  let updatedData = splitDataByLine(data);
  for (let i = 0; i < updatedData.length; i++) {
    let dataSplit = splitDataBySpace(updatedData[i]);
    let priority = convertToNumber(dataSplit[0]);

    // Push the task and priority to newData  object
    newData.push({
      priority: priority,
      task: dataSplit[1],
    });
  }

  return newData;
};

// For completed tasks from completed.txt
const splitCompletedTask = (data) => {
  // As no priority, only split by line
  let newData = splitDataByLine(data);
  return newData;
};

module.exports = { splitData, splitCompletedTask };
