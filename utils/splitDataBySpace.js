// Splits data by first space using regex

const splitDataBySpace = (data) => {
  let newData = data.split(/ (.*)/);
  return newData;
};

module.exports = splitDataBySpace;
