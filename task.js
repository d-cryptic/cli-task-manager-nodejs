const yargs = require("yargs");

// Customize yargs version
yargs.version("1.1.0");

// load fs
const fs = require("fs");
// read the file
const content = fs.readFileSync("./helpMessage.txt");
// print it
// console.log(content.toString());

// Create help command
if (process.argv.slice(2) == false) {
  console.log(content.toString());
}

yargs.help(false).command({
  command: "help",
  describe: "Show all commands",
  handler() {
    // console.log(content.toString());
  },
});

yargs.parse();

// console.log(process.argv.slice(2) == false);
