const splitDataBySpace = require("../utils/splitDataBySpace");
const splitDataByLine = require("../utils/splitDataByLine");
const convertToNumber = require("../utils/convertToNumber");

const splitData = (data) => {
  for (let i = 0; i < data.length; i++) {
    let dataSplit = splitDataBySpace(data[i]);
    let priority = convertToNumber(dataSplit[0]);
    newData.push({
      priority: priority,
      task: dataSplit[1],
    });
  }

  return newData;
};

module.exports = splitData;
