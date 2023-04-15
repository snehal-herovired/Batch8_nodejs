const express = require("express");

const app = express();

// get method
// get metohd passes the info using url;
app.get("/test", (req,res) => {
    res.send("Get method working and also my serever")
})





app.listen(5000, () => {
    console.log("my server is running")
})