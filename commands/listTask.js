const splitData = require("../utils/splitData");
const readTask = require("./readTask");

const listData = () => {
  let data = readTask("./task.txt");

  if (data.length === 0) {
    console.log("There are no pending tasks!");
  }

  let newData = splitData(data);
  for (let i = 0; i < newData.length; i++) {
    console.log(`${i + 1}. ${newData[i].task} [${newData[i].priority}]`);
  }
};

module.exports = listData;
