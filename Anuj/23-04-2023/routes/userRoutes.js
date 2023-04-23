const express = require("express");
const UserRouter = express.Router();
const app = express();
app.use(express.json());

const {
  registerController,
  postFindController,
} = require("../controller/userController");

UserRouter.get("/test", (req, res) => {
  res.send({ message: "send is working fine" });
});

//post request
UserRouter.post("/register", registerController);

//finding users based on email
UserRouter.post("/find", postFindController);

module.exports = UserRouter;
