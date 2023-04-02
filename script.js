// function as an argument to another function : callback
// returning a function: clouser

const { isUtf8 } = require("buffer");
const fs = require("fs");
// reading a file

// write file
fs.writeFile("test.txt","hello hero",(err)=>{
    console.log(err)
})
fs.writeFileSync("sample.txt","herovired")

// appending the file
fs.appendFile("test.txt","herovired",(err)=>{
    console.log(err)
})
fs.appendFile("test2.txt","this is the test 2",(err)=>{
console.log(err)})

// __dirname
// __filename

let folderPath =__dirname;
fs.readdir(folderPath,"utf-8",(err,data)=>{
    console.log(data)

    // output of reading folder
//     let arrayoffiles= data;
//     let readingdata= fs.readFileSync(arrayoffiles[4],"utf-8")

//     console.log(readingdata,"reading the data of file")
// })

// output of reading folder

let arrayoffiles=data
for (let index=0; index<arrayoffiles.length;index++){
    let isfile=fs.lstatSync(arrayoffiles[index]).isFile();
    if(isfile){
        let data = fs.readFileSync(arrayoffiles[index],"utf-8")
        console.log(data,"-----------file reading----------")
    }
}})

// let arrayoffiles= data;
// for(let index=0;index<arrayoffiles.length,index++){
//     let isfolder= fs.lstatSync(arrayoffiles[index].isDirectory())
//     if(isfolder){

//     }
// }