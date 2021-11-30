const { appendTask } = require("./appendTask");
const sortTask = require("./sortTask");

const add = (priority, task) => {
  if (!priority || !task) {
    console.log("Error: Missing tasks string. Nothing added!");
  } else {
    console.log(`Added task: "${task}" with priority ${priority}`);
    appendTask(priority, task, "./task.txt");
    sortTask("./task.txt");
  }
};

module.exports = add;
