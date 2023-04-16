const express = require("express");
const app = express();
app.use(express.json());

const mongoose = require("mongoose");

app.get("/test", (req, res) => {
  res.send({ message: "send is working fine" });
});

//this line only connects to db, to view this db we need to specify the type of data it is going to store and kind of database through schema
mongoose
  .connect("mongodb://127.0.0.1:27017/mongoFirstDB")
  .then(() => console.log("Connected! to my first mongo db"));

//schema of db model
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//model, this is used to interact with db with apis
const UserModel = mongoose.model("UserDB", UserSchema);

//post request
app.post("/register", (req, res) => {
  const { userName, email, password } = req.body;
  console.log(userName, email, password);
  const userObj = {
    userName: userName,
    password: password,
    email: email,
  };
  //checks if email already present, if no then it saves all the data if yes it wont save and send response only
  UserModel.find({ email }).then((data) => {
    if (data.length === 0) {
      //method to store data in Mongo DB
      UserModel(userObj)
        .save()
        .then((data) =>
          res.send({ message: "following data insereted successfully", data })
        )
        .catch((err) =>
          res.send({ message: "data is not insereted due to", err })
        );
    } else {
      res.json({ message: `${email} user already exist` });
    }
  });
});

//finding users based on email
app.post("/find", (req, res) => {
  const { email } = req.body;
  UserModel.find({ email })
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(5000, () => {
  console.log("server runnig");
});
