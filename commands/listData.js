const splitData = require("./splitData");
const readTask = require("./readTask");

const listData = () => {
  data = readTask("./commands/task.txt");
  let newData = splitData(data);
  for (let i = 0; i < newData.length; i++) {
    console.log(`${i} ${newData[i][task]} [${newData[i][priority]}]`);
  }
};

module.exports = listData;
