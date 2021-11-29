// load fs
const fs = require("fs");
// read the file
const content = fs.readFileSync("./helpMessage.txt");
// print it
// console.log(content.toString());

argv = process.argv.slice(2);

// Create help command
if (process.argv.slice(2) == false) {
  console.log(content.toString());
}

if (argv[0] === "help") {
  console.log(content.toString());
}

if (argv[0] === "add") {
  if (argv[1] === undefined || argv[2] === undefined) {
    console.log("Error: Missing tasks string. Nothing added!");
  } else {
    console.log(`Added task: "${argv[2]}" with priority ${argv[1]}`);
  }

  // write to a new file named 2pac.txt
  fs.writeFile("./task.txt", `${argv[1]} ${argv[2]}`, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log("Lyric saved!");
  });
}

const fs = require("fs");

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

// console.log(process.argv.slice(2));
