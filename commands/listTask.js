// List the tasks

const { splitData, splitCompletedTask } = require("../utils/splitData");
const readTask = require("../utils/readTask");
const fs = require("fs");

// For listing pending data from task.txt file
const listData = (filename) => {
  // Checks if file exists or if it is empty
  if (!fs.existsSync(filename) || fs.statSync("./task.txt").size === 0) {
    console.log("There are no pending tasks!");
    return;
  }

  // If file is not empty, then read the file, split the data and print the data
  let data = readTask(filename);

  let newData = splitData(data);
  for (let i = 0; i < newData.length; i++) {
    console.log(`${i + 1}. ${newData[i].task} [${newData[i].priority}]`);
  }
};

// For listing completed tasks from completed.txt file
const completedTaskReport = (filename) => {
  let data = readTask(filename);

  // Checks if file is empty
  if (data.length === 0) {
    console.log("There are no pending tasks!");
  }

  // read, splits  and prints the data
  let newData = splitCompletedTask(data);
  for (let i = 0; i < newData.length; i++) {
    console.log(`${i + 1}. ${newData[i]}`);
  }
};

module.exports = { listData, completedTaskReport };
