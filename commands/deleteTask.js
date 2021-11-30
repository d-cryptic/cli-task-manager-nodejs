const readTask = require("../utils/readTask.js");
const { splitData } = require("../utils/splitData.js");
const writeData = require("../utils/writeData");

const deleteTask = (number) => {
  if (number === undefined) {
    console.log("Error: Missing NUMBER for deleting tasks.");
    return;
  }

  let tasks = readTask("./task.txt");
  let newData = splitData(tasks);

  if (number <= 0 || number > newData.length) {
    console.log(
      `Error: task with index #${number} does not exist. Nothing deleted.`
    );
    return;
  }
  // delete newData[ number - 1 ];
  newData.splice(number - 1, 1);
  writeData(newData, "./task.txt");
  console.log(`Deleted task #${number}`);
};

module.exports = deleteTask;
