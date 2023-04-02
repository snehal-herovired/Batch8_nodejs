const fs = require ("fs")

fs.writeFile("test.txt", "HeroVired", (err)=>{
    console.log(err)
})

fs.writeFileSync("sample.txt", "heroviredsync")

fs.appendFile("test.txt", "I m learning FSD", (err)=>{
    console.log(err)
})