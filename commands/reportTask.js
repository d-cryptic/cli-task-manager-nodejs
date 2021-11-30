const readData = require("../utils/readTask");
const { splitData, splitCompletedTask } = require("../utils/splitData.js");
const { listData, completedTaskReport } = require("./listTask.js");
const fs = require("fs");

const pendingTask = () => {
  if (!fs.existsSync("./task.txt") || fs.statSync("./task.txt").size === 0) {
    console.log("Pending: 0");
    return;
  } else {
    const pendingData = readData("./task.txt");
    const pendingTasks = splitData(pendingData);
    const pendingTasksLength = pendingTasks.length;
    console.log(`Pending : ${pendingTasksLength}`);
    listData("./task.txt");
  }
};

const completedTask = () => {
  if (
    !fs.existsSync("./completed.txt") ||
    fs.statSync("./completed.txt").size === 0
  ) {
    console.log("Completed : 0");
    return;
  } else {
    const doneData = readData("./completed.txt");
    const doneTasks = splitCompletedTask(doneData);
    const doneTasksLength = doneTasks.length;
    console.log(`Completed : ${doneTasksLength}`);
    completedTaskReport("./completed.txt");
    console.log();
  }
};
const reportTask = () => {
  pendingTask();
  console.log();
  completedTask();
};

module.exports = reportTask;
