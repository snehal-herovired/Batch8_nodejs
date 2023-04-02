// // module fs
// // filesystem


// const fs = require("fs");


// //parallel execution
// // 123456789
// //serial execution
// console.log("start");
// fs.readFile("./num1.txt", "utf-8", (err, data) => {
//     console.log("we are inside callback function", data);
//     fs.readFile("./num2.txt", "utf-8", (err, data) => {
//         console.log("we are inside callback function", data);
//         fs.readFile("./num3.txt", "utf-8", (err, data) => {
//             console.log("we are inside callback function", data);
            
//             // some activity based on the data of read file
//         })
//         // some activity based on the data of read file
//     })
//     // some activity based on the data of read file
// })


// // let data = fs.readFileSync("./test.txt", "utf-8");
// // console.log(data);

// console.log("end");

//start
// output of filereading
// end

// start
// end
//

const add = require("./filesystems/sample");
console.log(add(2,3));