const splitDataByLine = require("../utils/splitDataByLine");
const splitDataBySpace = require("../utils/splitDataBySpace");
const convertToNumber = require("../utils/convertToNumber");

const splitData = (data) => {
  let newData = [];
  let updatedData = splitDataByLine(data);
  for (let i = 0; i < updatedData.length; i++) {
    let dataSplit = splitDataBySpace(updatedData[i]);
    let priority = convertToNumber(dataSplit[0]);
    newData.push({
      priority: priority,
      task: dataSplit[1],
    });
  }

  return newData;
};

module.exports = splitData;
