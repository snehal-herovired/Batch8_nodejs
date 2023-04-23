//in order to view this db , we have specify what kind of database it is , and what is the type of data it is going to store
//Schema of the db model;
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model('UserDatabase', UserSchema);
// this model will be used to intercat with our db using our apis.

module.exports=UserModel;