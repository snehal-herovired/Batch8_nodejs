const express = require("express");
const app = express();


app.get("/test", (req, res)=>{
    res.send("Get method working and also my server")
})



app.listen(5000, ()=> {
    console.log("my server is running")
})