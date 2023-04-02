const fs = require ("fs")

// fs.writeFile("test.txt", "HeroVired", (err)=>{
//     console.log(err)
// })

// fs.writeFileSync("sample.txt", "heroviredsync")

// fs.appendFile("test.txt", "I m learning FSD", (err)=>{
//     console.log(err)
// })


// reading folder

let folderPath = __dirname;
fs.readdir(folderPath, "utf-8", (err, data)=>{
    console.log(data);
    //output of reading folder
    let arrayoffiles = data;
    let readingdata = fs.readFileSync(arrayoffiles[2], "utf-8", )
    console.log(readingdata, "reading the data of file");
})
