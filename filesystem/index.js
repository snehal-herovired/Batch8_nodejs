// // writing the file

const { log } = require("console");
const fs = require("fs");

// fs.writeFile("test.txt" , "Herovired", (err) =>{
//     console.log(err);
// })

// fs.writeFileSync("Sample.txt", "heorvired1");

// // appending the file

// fs.appendFile("test.txt", "  herovired", (err) =>{
//     console.log(err);
// })


// /* // appending the file sync

// fs.appendFileSync("test.txt", " Sanpreet", (err) =>{
//     console.log(err);
// })*/

// console.log(__dirname);

// reading folder

// let folderPath = __dirname;
// fs.readdir(folderPath, "utf-8",(err, data) =>{
//     console.log(data);
//     let arrayoffiles = data;

//     let readingdata  = fs.readFileSync(arrayoffiles[2], "utf-8")
//     console.log(readingdata, "reading the data of the file");

// })

// outpur of reading folder


//=======================================================
// reading folder


// let folderPath = __dirname;
// fs.readdir(folderPath, "utf-8",(err, data) =>{
//     console.log(data);

//     let arrayoffiles = data;

//    for (let i = 0; i < arrayoffiles.length; i++){
//     console.log(arrayoffiles[i]);
//     let isfile = fs.lstatSync(arrayoffiles[i]).isFile();
//     if(isfile){
//         let data = fs.readFileSync(arrayoffiles[i], "utf-8");
//         console.log(data, "---------------file reading------------")
//     }
//    }

// })


// import add function

const add = require("./expmodul.js");
// console.log(add);

console.log(add(2,3));

