// Add task to the task.txt file in the sorted order

const { appendTask } = require( "../utils/appendTask" );
const sortTask = require("../utils/sortTask");

const add = ( priority, task ) => {
  
  // checks for NaN, undefined, null, empty string
  if (!priority || !task) {
    console.log("Error: Missing tasks string. Nothing added!");
  } else {
    console.log(`Added task: "${task}" with priority ${priority}`);
    appendTask(priority, task, "./task.txt");
    sortTask("./task.txt");
  }
};

module.exports = add;