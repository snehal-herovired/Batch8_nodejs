const fs = require("fs");
// fs.writeFile("test.txt","HeroVired", (err)=>{
//     console.log(err);
// })
// fs.writeFileSync("sample.txt", "herovired", (err)=>{
//     console.log(err)
// });
// fs.appendFile("test.txt", "heroVired", (err)=>{
// console.log(err)
// })

// // console.log(__dirname);
// // console.log(__filename);
// let fd = __dirname;
// fs.readdir(fd,"utf-8",(err,data)=>{
//     let op = [];
//          const textFiles = data.filter(fileName => {
//         if(fileName.endsWith(".txt")===true){
//             op.push(fileName)

//         };
//       });

//     console.log(data)
//     console.log(op)
//     console.log(op.length)
// })
// for(let i=0; i<=10;i++){
//     fs.writeFileSync(`test${i}.txt`,"HeroVired")
// }


// let folderPath = __dirname;
// fs.readdir(folderPath, "utf-8",(err, data)=>{
//     console.log(data);
//     let isfolder = fs.lstatSync(arrayoffiles[index]).isDirectory();
//     if(isfolder){
//         let directorypath = path.dirname(fileName)
//     }
//     let fileName = data[2];
    
// })

let name=process.argv[4]
console.log(name)

