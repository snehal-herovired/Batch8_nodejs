const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const UserRouter = require("./routes/Userrouter");

app.use("/auth", UserRouter);

const mongoose = require("mongoose");

const port = process.env.PORT;

//this line only connects to db, to view this db we need to specify the type of data it is going to store and kind of database through schema
mongoose
  .connect(process.env.MONGOURl)
  .then(() => console.log("Connected! to my first mongo db"));

// port = process.env.PORT;
app.listen(port, () => {
  console.log("server running");
});