const fs = require("fs");

const appendTask = (priority, task, filename) => {
  const message = `${priority} ${task}`;

  if (!fs.existsSync(filename)) {
    fs.appendFileSync(filename, message);
  } else {
    fs.appendFileSync(filename, "\n" + message);
  }
};

// const appendDoneTask = (task, filename) => {
//   // write to a new file named data.txt
//   fs.appendFile(filename, `${task}`, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//   });
// };

module.exports = appendTask;
