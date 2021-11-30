// Shows the report of tasks

const readData = require("../utils/readTask");
const { splitData, splitCompletedTask } = require("../utils/splitData.js");
const { listData, completedTaskReport } = require("./listTask.js");
const fs = require("fs");

// Report of pending task from task.txt
const pendingTask = () => {
  // Checks if file exists or if it is empty
  if (!fs.existsSync("./task.txt") || fs.statSync("./task.txt").size === 0) {
    console.log("Pending: 0");
    return;
  } else {
    // Reads and splits the data
    const pendingData = readData("./task.txt");
    const pendingTasks = splitData(pendingData);

    // Shows the report of pending tasks
    const pendingTasksLength = pendingTasks.length;
    console.log(`Pending : ${pendingTasksLength}`);
    listData("./task.txt");
  }
};

// Shows report of completed tasks from completed.txt
const completedTask = () => {
  // Checks file exists or if it is empty
  if (
    !fs.existsSync("./completed.txt") ||
    fs.statSync("./completed.txt").size === 0
  ) {
    console.log("Completed : 0");
    return;
  } else {
    // Reads and splits the data
    const doneData = readData("./completed.txt");
    const doneTasks = splitCompletedTask(doneData);

    // Shows report of completed tasks
    const doneTasksLength = doneTasks.length;
    console.log(`Completed : ${doneTasksLength}`);
    completedTaskReport("./completed.txt");
  }
};

const reportTask = () => {
  pendingTask();
  console.log();
  completedTask();
};

module.exports = reportTask;
