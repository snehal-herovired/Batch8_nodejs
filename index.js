const fs = require("fs");

console.log("start");
fs.readFile("./nodejs.txt", "utf8", (err, data)=>{
    console.log("we are insitde callback function", data);


})

console.log("end");