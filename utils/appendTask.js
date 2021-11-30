const fs = require("fs");

const appendTask = (priority, task, filename) => {
  const message = `${priority} ${task}`;

  if (!fs.existsSync(filename)) {
    fs.appendFileSync(filename, message);
  } else {
    fs.appendFileSync(filename, "\n" + message);
  }
};

const appendDoneTask = (data, filename) => {
  // write to a new file named data.txt

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
