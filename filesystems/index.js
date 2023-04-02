// filesystems :fs module;
// how to take input in nodejs;
// client -server architecture;
// module creation and importing module;
// function as an argument to another fun : callback;
// function returning a function :closure;

const fs = require("fs");

//reading the file
// fs.readFile();

// writing in file
fs.writeFile("test.txt", "Herovired1", (err) => {
    console.log()
});
fs.writeFileSync("sample.txt", "herovired");

//appending the file
fs.appendFile("test.txt", "herovired", (err) => {
    console.log(err);
})