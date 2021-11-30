// Delete the task and update the task.txt file 

const readTask = require( "../utils/readTask.js" );
const { splitData } = require("../utils/splitData.js");
const writeData = require("../utils/writeData");

const deleteTask = ( number ) => {
  
  // checks if the task number is valid or not
  if (number === undefined) {
    console.log("Error: Missing NUMBER for deleting tasks.");
    return;
  }

  // if number is valid, reads the data, splits the data, deletes the task and writes the data back nto the file

  let tasks = readTask("./task.txt");
  let newData = splitData(tasks);

  // If number is not in the array length range 
  if (number <= 0 || number > newData.length) {
    console.log(
      `Error: task with index #${number} does not exist. Nothing deleted.`
    );
    return;
  }

  newData.splice(number - 1, 1);
  writeData(newData, "./task.txt");
  console.log(`Deleted task #${number}`);
};

module.exports = deleteTask;
