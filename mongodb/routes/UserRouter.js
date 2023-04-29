const express = require("express");
const UserRouter = express.Router();

const {register} =require("../controller/UserController")
UserRouter.post("/register", register);






module.exports = UserRouter;