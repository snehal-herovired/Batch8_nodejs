const UserModel = require("../models/DB.schema");
const express = require("express");

const registerController = (req, res) => {
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
};

const postFindController = (req, res) => {
  const { email } = req.body;
  UserModel.find({ email })
    .then((data) => {
      res.send(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { registerController, postFindController };
