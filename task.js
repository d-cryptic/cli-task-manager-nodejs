const fs = require("fs");

argv = process.argv.slice(2);

// Help command
const help = require("./commands/help.js");
help();

// if (argv[0] === "add") {
//   if (argv[1] === undefined || argv[2] === undefined) {
//     console.log("Error: Missing tasks string. Nothing added!");
//   } else {
//     console.log(`Added task: "${argv[2]}" with priority ${argv[1]}`);
//   }

//   // write to a new file named 2pac.txt
//   fs.writeFile("./task.txt", `${argv[1]} ${argv[2]}`, (err) => {
//     // throws an error, you could also catch it here
//     if (err) throw err;

//     // success case, the file was saved
//     console.log("saved!");
//   });
// }

// // console.log(process.argv.slice(2));

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
