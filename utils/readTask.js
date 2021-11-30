// Reads tasks from txt files

const fs = require( "fs" );

const readTask = (filename) => {
  let data = fs.readFileSync(filename, "utf-8", "string");
  return data;
};

module.exports = readTask;