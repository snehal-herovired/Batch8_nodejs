const express = require("express");
const UserRouter = express.Router();

const { register } = require("../controller/UserController")
const {rights,userbyrole} =require("../controller/RightController")
UserRouter.post("/register", register);

UserRouter.post("/right", rights)
UserRouter.post("/getuserbyrole",userbyrole)





module.exports = UserRouter;