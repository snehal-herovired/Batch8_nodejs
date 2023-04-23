const express = require("express");
const UserRouter = express.Router();
const {registerController, userController} = require("../controllers/UserController")

UserRouter.post("/register", registerController);
UserRouter.post("/user", userController);

module.exports = UserRouter;