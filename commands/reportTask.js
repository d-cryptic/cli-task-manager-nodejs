const readData = require("./readData.js");
const splitData = require("./utils/splitData");
const listData = require("./listData.js");

const reportTask = () => {
  const pendingData = readData("./commands/task.txt");
  const pendingTasks = splitData(pendingData);
  const doneData = readData("./commands/done.txt");
  const doneTasks = splitData(doneData);

  const pendingTasksLength = pendingTasks.length;
  const doneTasksLength = doneTasks.length;

  console.log(`
	Pending: ${pendingTasksLength}
	${listData(pendingTasks)}

	Completed: ${doneTasksLength}
	${listData(doneTasks)}
	`);
};

module.exports = reportTask;
