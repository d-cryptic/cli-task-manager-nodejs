const { splitData, splitCompletedTask } = require("../utils/splitData");
const readTask = require("../utils/readTask");
const fs = require("fs");

const listData = (filename) => {
  if (!fs.existsSync(filename) || fs.statSync("./task.txt").size === 0) {
    console.log("There are no pending tasks!");
    return;
  }

  let data = readTask(filename);

  let newData = splitData(data);
  for (let i = 0; i < newData.length; i++) {
    console.log(`${i + 1}. ${newData[i].task} [${newData[i].priority}]`);
  }
};

const completedTaskReport = (filename) => {
  let data = readTask(filename);

  if (data.length === 0) {
    console.log("There are no pending tasks!");
  }

  let newData = splitCompletedTask(data);
  for (let i = 0; i < newData.length; i++) {
    console.log(`${i + 1}. ${newData[i]}`);
  }
};

module.exports = { listData, completedTaskReport };
