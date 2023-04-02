const fs = require("fs");
const path = require("path");

//appending a file
// fs.appendFile("writeMyFirstAsync.txt", "Appending R", (err) => {
//   console.log(err);
// });
//writing a file
// fs.writeFile("writeMyFirstAsync.txt", "Anuj Agrawal", (err) => {
//   console.log(err);
//   fs.writeFile("writeMyFirstAsyncTest", "Anuj Agrawal", (err) => {
//     console.log(err);
//   });
// });

// fs.writeFileSync("writeMyFirstFileSync.txt", "Anuj is Tetsing", (err) => {
//   console.log(err);
// });

//appending a file
// fs.appendFile("writeMyFirstAsync.txt", "Appending R", (err) => {
//   console.log(err);
// });

// fs.readdir(__dirname, "utf-8", (err, data) => {
//   console.log(data);
//   data.forEach((ele, index) => {
//     if (ele.includes(".txt")) {
//       fs.readFile(ele, "utf-8", (err, dataIn) => {
//         console.log(dataIn);
//       });
//     }
//   });
// });

// fs.readdir(__dirname, "utf-8", (err, data) => {
//   console.log(data);
//   let directoryData = [];
//   data.forEach((ele, index) => {
//     let isDirectory = fs.lstatSync(ele).isDirectory();
//     let isFile = fs.lstatSync(ele).isFile();
//     if (isFile && ele.includes(".txt")) {
//       fs.readFile(ele, "utf-8", (err, dataIn) => {
//         console.log(dataIn);
//       });
//     }
//     if (isDirectory) {
//       directoryData.push(ele);
//     }
//   });
//   console.log("Directories - ", directoryData);
// });

// console.log(path.extname());

let name = process.argv[2];
console.log(`Hi I am ${name}`);

const add = (...args) => {
  let sum = 0;
  console.log(args);
  args.forEach((ele) => {
    sum += ele;
  });
  return sum;
  //   return a + b;
};

module.exports = add;
