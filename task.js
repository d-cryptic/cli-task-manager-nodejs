const fs = require("fs");
const help = require("./commands/help.js");
const add = require("./commands/add.js");

argv = process.argv.slice(2);

// Help command

if (process.argv.slice(2) == false || argv[0] === "help") {
  help();
}

if (argv[0] === "add") {
  add();
}
// // console.log(process.argv.slice(2))

// let listFile = {};

// fs.readFile("task.txt", "utf-8", (err, data) => {
//   if (err) {
//     throw err;
//   }

//   data1 = data.split("\n");
//   console.log(data1);
// });

// // Reading, appending and sorting file

// const readFile = () => {
//   fs.readFile("task.txt", "utf-8", (err, data) => {
//     if (err) {
//       throw err;
//     }

//     data1 = data.split("\n");
// 	  let data2 = {};
//     let length = data1.length;
//     for (i = 0; i < length; i++) {
//       data2 = data1[i].split(" ");
// 		listFile[ i ] = { data2[ 0 ]: data2[ 1 ] };
//     }
//   });
// };

// const appendFile = (data) => {
//   fs.appendFile("task.txt", data, function (err) {
//     if (err) {
//       throw err;
//     } else {
//       console.log("Saved!");
//     }
//   });
// };

// const sortData = (data) => {};
