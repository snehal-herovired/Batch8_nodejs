const mongoose = require("mongoose");

//schema of db model
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

//model, this is used to interact with db with apis
const UserModel = mongoose.model("UserDB", UserSchema);

module.exports = UserModel;
