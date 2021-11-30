const readData = require("./readData.js");
const splitData = require("./utils/splitData");

const reportTask = () => {
  const pendingData = readData("./commands/task.txt");
  const pendingTasks = splitData(pendingData);
  const doneData = readData("./commands/done.txt");
  const doneTasks = splitData(doneData);
};

module.exports = reportTask;
