// Marks the task as done and appends it to the completed.txt file.

const readTask = require( "../utils/readTask.js" );
const { splitData } = require("../utils/splitData.js");
const { appendDoneTask } = require("../utils/appendTask.js");
const writeData = require("../utils/writeData.js");

const doneTask = ( number ) => {
  // Checks if number of task is valid or not 
  if (number === undefined) {
    console.log(`Error: Missing NUMBER for marking tasks as done.`);
    return;
  }

  // If number is valid, reads the data, split it, append the done task in completed.txt file and updates the task.txt file

  let tasks = readTask("./task.txt");
  let newData = splitData(tasks);
  let completedTasks = newData[ number - 1 ];
  
  appendDoneTask(completedTasks, "./completed.txt");
  newData.splice(number - 1, 1);
  writeData(newData, "./task.txt");
  console.log("Marked item as done.");
};

module.exports = doneTask;
