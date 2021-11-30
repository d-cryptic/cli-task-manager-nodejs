const appendTask = require("./appendTask");
const sortTask = require("./sortTask");

const add = (priority, task) => {
  if (argv[1] === undefined || argv[2] === undefined) {
    console.log("Error: Missing tasks string. Nothing added!");
  } else {
    console.log(`Added task: "${task}" with priority ${priority}`);
  }

  appendTask(priority, task);
  //   sortTask();
};

module.exports = add;
