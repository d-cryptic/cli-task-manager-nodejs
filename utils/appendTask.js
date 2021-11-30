// Appending data to file

const fs = require( "fs" );

// For appending pending task to task.txt
const appendTask = (priority, task, filename) => {
  const message = `${priority} ${task}`;

  if (!fs.existsSync(filename)) {
    fs.appendFileSync(filename, message);
  } else {
    fs.appendFileSync(filename, "\n" + message);
  }
};

// For appending completed task to completed.txt
const appendDoneTask = (data, filename) => {

  if (data === undefined) {
    console.log("Error: no incomplete item with index #0 exists.");
    return;
  }

  const message = `${data.task}`;
  if (!fs.existsSync(filename)) {
    fs.appendFileSync(filename, message);
  } else {
    fs.appendFileSync(filename, "\n" + message);
  }
};

module.exports = { appendTask, appendDoneTask };