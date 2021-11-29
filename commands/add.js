const appendTask = require("./appendTask");
const sortTask = require("./sortTask");

argv = process.argv.slice(2);

const add = () => {
  if (argv[1] === undefined || argv[2] === undefined) {
    console.log("Error: Missing tasks string. Nothing added!");
  } else {
    console.log(`Added task: "${argv[2]}" with priority ${argv[1]}`);
  }

  appendTask(argv[1], argv[2]);
//   sortTask();
};

module.exports = add;
