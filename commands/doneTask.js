const readTask = require("../utils/readTask.js");
const { splitData } = require("../utils/splitData.js");
const { appendDoneTask } = require("../utils/appendTask.js");
const writeData = require("../utils/writeData.js");

const doneTask = (number) => {
  if (number === undefined) {
    console.log(`Error: Missing NUMBER for marking tasks as done.`);
    return;
  }

  let tasks = readTask("./task.txt");
  let newData = splitData(tasks);
  let completedTasks = newData[number - 1];
  appendDoneTask(completedTasks, "./completed.txt");
  // delete newData[ number - 1 ];
  newData.splice(number - 1, 1);
  writeData(newData, "./task.txt");
  console.log("Marked item as done.");
};

module.exports = doneTask;
