const Usermodel = require("../models/Db.schema")
const express = require("express");


const registerController = async(req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);
  const userObj = {
    username: username,
    password: password,
    email: email,
  };
// Checks if email already present if no then it saves all the data if yes
   Usermodel.find({email}).then((data)=>{
    if(data.length === 0){
        //method stores data in Mongo DB
        UserModel(userObj)
        .save()
        .then((data)=>
          res.send({message: "data inserted sucessfully"})
        )
        .catch((err)=>
         res.send({message: "data not inserted due to", err})
        );
    }else {
        res.json({message: `${email} user already exists`});
    }
   });

};

const userController = (req, res) => {
    const {email} = req.body;
    UserModel.find({email})
    .then((data) => {
        res.send(data);
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });
};






module.exports = {
    registerController,
    userController
}