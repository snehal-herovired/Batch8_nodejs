const express = require("express");
const UserRouter = express.Router();

const { register ,finduser} = require("../controller/UserController")
// const {rights,userbyrole} =require("../controller/RightController")
UserRouter.post("/register", register);
UserRouter.post("/login", finduser);

// UserRouter.post("/right", rights)
// UserRouter.post("/getuserbyrole",userbyrole)





module.exports = UserRouter;