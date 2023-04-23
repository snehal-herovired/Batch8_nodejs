require('dotenv').config
const express = require("express");
const app = express();

const mongoose = require("mongoose")
app.use(express.json())

const port = process.env.PORT

app.get("/test", (req, res) => {
    res.json({
        message: "get request working!"
    })
})
// connecting to db only
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Connected to batch8db'));

//to view db pls  specify kind of database it is and type of db it is

// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });
// used to interact with database using our apis
// const UserModel = mongoose.model('UserDatabase', UserSchema);

app.post("/register", (req,res)=>{
    const {username, email, password } = req.body
    console.log(username,email,password);
    res.json({
        message: "data recieved"
    })
})


const UserRouter = require("./routes/Userrouter");
app.use("/auth", UserRouter)

const UserController = require("./Controller/UserController");
app.use("/auth", UserController)


app.listen(port, () => {
    console.log("Server started running")
})