const readTask = require("./readTask");
const writeData = require("./writeData");

const splitDataByLine = (data) => {
  let newData = data.split("\n");
  return newData;
};

const splitDataBySpace = (data) => {
  let newData = data.split(" ");
  return newData;
};

const convertToNumber = (priorityString) => {
  return parseInt(priorityString);
};

const sortTaskByPriority = () => {
  let tasks = readTask("./commands/task.txt");
  let data = splitDataByLine(tasks);
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    let dataSplit = splitDataBySpace(data[i]);
    let priority = convertToNumber(dataSplit[0]);
    newData.push({
      priority: priority,
      task: dataSplit[1],
    });
  }
  newData.sort((a, b) => {
    return a.priority - b.priority;
  });

  writeData(newData, "./commands/task.txt");
  return newData;
};

sortTaskByPriority();

// module.exports = sortTaskByPriority;
