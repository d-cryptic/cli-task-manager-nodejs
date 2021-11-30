const fs = require("fs");

const appendTask = (priority, task, filename) => {
  const message = `${priority} ${task}`;

  if (!fs.existsSync(filename)) {
    fs.appendFileSync(filename, message);
  } else {
    fs.appendFileSync(filename, "\n" + message);
  }
};

const appendDoneTask = (task, filename) => {
  // write to a new file named data.txt
  const message = `${task}`;
  if (!fs.existsSync(filename)) {
    fs.appendFileSync(filename, message);
  } else {
    fs.appendFileSync(filename, "\n" + message);
  }
};

module.exports = { appendTask, appendDoneTask };
