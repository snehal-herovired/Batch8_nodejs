const fs = require("fs");

console.log("start");
fs.readFile("./num1.txt", "utf8", (err, data)=>{
    console.log("we are insitde callback function", data);

    console.log("start");
fs.readFile("./num2.txt", "utf8", (err, data)=>{
    console.log("we are insitde callback function", data);

    console.log("start");
fs.readFile("./num3.txt", "utf8", (err, data)=>{
    console.log("we are insitde callback function", data);


})
        // here to print the files in sequense we put them ito a callback function (callback hell structure [a call back in a call back ])


})



})

console.log("end");