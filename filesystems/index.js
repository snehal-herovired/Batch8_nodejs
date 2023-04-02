// filesystems :fs module;
// how to take input in nodejs;
// client -server architecture;
// module creation and importing module;
// function as an argument to another fun : callback;
// function returning a function :closure;

const fs = require("fs");

// //reading the file
// // fs.readFile();

// // writing in file
// fs.writeFile("test.txt", "Herovired1", (err) => {
//     console.log()
// });
// fs.writeFileSync("sample.txt", "herovired");

// //appending the file
// fs.appendFile("test.txt", "herovired", (err) => {
//     console.log(err);
// })

// __dirname will print the path of the directory
// __filename will print the path of the filename

// reading folder
// let folderPath = __dirname;
// fs.readdir(folderPath, "utf-8", (err, data) => {
//     console.log(data);
//     // output of reading folder

//     let arrayoffiles = data;
//     let readingdata = fs.readFileSync(arrayoffiles[2], "utf-8");
//     console.log(readingdata, "reading the data of file");
//     for (let index = 0; index < arrayoffiles.length; index++) {
//         let isfile = fs.lstatSync(arrayoffiles[index]).isFile();
//         if(isfile) {
//             let data = fs.readFileSync(arrayoffiles[index], "utf-8");
//             console.log(data, "------------------file reading----------------");
//         }
//     }
// })

let folderExists = __dirname;
let isDir = fs.lstatSync(folderExists).isDirectory();
if (isDir) {
    console.log("---------------Found the directory----------------");
    console.log(`Directory is ${folderExists}`);
}

// let ans = fs.lstatSync(folderpath).isFile();
// console.log(ans);