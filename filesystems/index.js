// filesystems :fs module
// how to take input in nodejs
// client -server architecture
// module creation and importing module;
//function as an argument to another fun : callback;
// function returning a funtion :closure;

// const { log } = require("console");
// const fs = require("fs");
// const path =require("path")

// // reading the file
// // fs.readFile()

// // wrting in file
// fs.writeFile("test.txt", "Herovired1", (err) => {
//     console.log(err);
// })
// fs.writeFileSync("sample.txt", "herovired");

// //appending the file
// fs.appendFile("test.txt", " herovired", (err) => {
//     console.log(err);
// })
// __dirname
// __filename
// console.log(__dirname)
// console.log(__filename);

// reading folder
// let folderPath = __dirname;
// fs.readdir(folderPath, "utf-8", (err, data) => {
//     console.log(data);
//     // output of readin folder?
//     let arrayoffiles = data;
//     for (let index = 0; index < arrayoffiles.length; index++) {
        // let isfile = fs.lstatSync(arrayoffiles[index]).isFile();
        // if (isfile) {
        //     let data = fs.readFileSync(arrayoffiles[index], "utf-8");
        //     console.log(data,"------------file reading----------");
        // }
    //     let isfolder = fs.lstatSync(arrayoffiles[index]).isDirectory();
    //     if (isfolder) {
    //         //
    //         let direcotrypath_of_this_file = path.dirname(isfolder);
    //         console.log(direcotrypath_of_this_file);
    //     }
        
//     }
//     let filename = data[2];
//     let direcotrypath_of_this_file = path.extname(filename);
//     console.log(direcotrypath_of_this_file);

// })

//whether it is directorty ;
// if it is direcotry then go inside the directory and check if files are there or not;
//

// let filepath = __filename
// console.log(filepath);
// let diroffile = path.dirname(filepath);
// console.log(diroffile);

// readfile,appendfile,writefile,__dirname,__filename
//lstatsync : isdir or isfile
// path module : extname, path.dirname

// let name = process.argv[2];
// let name2 = process.argv[3];
// console.log(name);
// console.log(name2);

// client-server acrhitecture;
// http ,
// what is req and respoonse
// Port number
//client and server


// import the add fun
const add = require("./test1/sample1");
console.log(add(2,3));