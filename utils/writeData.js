const fs = require("fs");

const writeData = (data, filename) => {
  let stringData = "";
  for (let i = 0; i < data.length; i++) {
    if (i === data.length - 1) {
      stringData += data[i].priority + " " + data[i].task;
      break;
    }

    stringData += data[i].priority + " " + data[i].task + "\n";
  }

  fs.writeFileSync(filename, stringData);
};

module.exports = writeData;
