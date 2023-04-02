// filesystems : fs module

const fs = require("fs")

// reading a file

// fs.readFile("./nodeJs.txt", "utf-8", (err,data) => {
//     console.log("we are inside callback function\n", data)
// })

// writing a file
fs.writeFile("test.txt","Herovired", (err) => {
    // console.log(err)
})// using writefile again for same file will override the text so we use appendfile


fs.writeFileSync("sample.txt","hero vired")

// appending in file

fs.appendFile("test.txt", "chandramani", err => {
    // console.log(err)
})
fs.appendFileSync("test.txt", "pyasi")

// get directory path
console.log(__dirname)
// get filename
console.log(__filename)

// read directory(folder)
let folderPath = __dirname
fs.readdir(folderPath,"utf-8",(err,data) => {
    // console.log(data)
    let arrayOfFiles = data
    let readingData = fs.readFileSync(arrayOfFiles[2],"utf-8")
    // console.log(readingData, "reading the data of file")
}) // output as files in that folder in a array


// Task

// fs.readdir(__dirname, "utf-8", (err,data) => {
//     // console.log(data)
//     let read = ""
//     for(i=0;i<data.length;i++){
//         if(data[i].split(".")[1] == "txt"){
//             read += fs.readFileSync(data[i],"utf-8")
//         }
//     }
//     console.log(read)
// })

// or

// fs.readdir(__dirname, "utf-8", (err,data) => {
//     // console.log(data)
    
//     for(i=0;i<data.length-3;i++){
//         let isFile = fs.lstatSync(data[i]).isFile()
//         if(isFile){
//             let read = fs.readFileSync(data[i],"utf-8")
//             console.log(read)
//         }
//     }
// })

// check if directory or file

let ans = fs.lstatSync(folderPath).isDirectory()
// console.log(ans)
ans = fs.lstatSync(folderPath).isFile()
// console.log(ans)

// Task 2 : check if it is directory and check if it is empty
let path = require("path")
let path1 = __dirname
if(fs.lstatSync(path1).isDirectory()){
    fs.readdir(path1, "utf-8", (err,data) => {
        if(data.length > 0){
            console.log(`Directory has ${data.length} files`)
        }
        else{
            console.log("Directory is empty")
        }
    })
}

// path module

let a = path.extname(__filename) // get extension of file
let b = path.dirname(__filename) // get directory path of file
// console.log(a)
// console.log(b)

// using path module
fs.readdir(path1, "utf-8", (err,data) => {
    for(let i=0; i<data.length; i++){
        console.log(path.dirname(data[i]))
        console.log(path.extname(data[i]))
    }
})


