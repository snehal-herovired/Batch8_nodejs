// module fs(filesystem)

// const { log } = require("console")

const fs = require("fs") // blocking code
console.log("start") // blocking

fs.readFile("./nodeJs.txt", "utf-8", (err,data) => {
    console.log("we are inside callback function\n", data)
}) // non blocking as async in behavior(callback fun)

// as blocking code
let data = fs.readFileSync("./nodeJs.txt","utf-8")
console.log(data)

// panel execution : random execution of async blocks of codes

fs.readFile("./nodeJs.txt", "utf-8", (err,data) => {
    console.log("abc\n", data)
})

fs.readFile("./nodeJs.txt", "utf-8", (err,data) => {
    console.log("def\n", data)
})

fs.readFile("./nodeJs.txt", "utf-8", (err,data) => {
    console.log("ghi\n", data)
}) 
// ouput will not be abc-def-ghi
// all three blocks will be executed in random order


// serial execution : resolve random execution of panel execution

fs.readFile("./nodeJs.txt", "utf-8", (err,data) => {
    console.log("abc\n", data)
    
    fs.readFile("./nodeJs.txt", "utf-8", (err,data) => {
        console.log("def\n", data)

        fs.readFile("./nodeJs.txt", "utf-8", (err,data) => {
            console.log("ghi\n", data)
        })
    })
})

console.log("end") // blocking