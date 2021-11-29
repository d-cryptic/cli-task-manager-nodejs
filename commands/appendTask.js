const fs = require("fs");

const appendTask = (priority, task) => {
  // write to a new file named data.txt
  fs.appendFile("./commands/task.txt", `${priority} ${task}`, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
  });
};

module.exports = appendTask;
