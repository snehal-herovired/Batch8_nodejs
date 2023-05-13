const express = require("express");
const app = express();

const mongoose = require("mongoose");
app.use(express.json())
app.get('/test', (req, res) => {
    res.json({
        message: "get request working!!"
    })
})


// this line suiggest only connecting to db;
mongoose.connect('mongodb://127.0.0.1:27017/batch8Db')
    .then(() => console.log('Connected to batch8db!'));


const UserRouter = require("./routes/UserRouter");
app.use('/auth',UserRouter)


//in order to view this db , we have specify what kind of database it is , and what is the type of data it is going to store
//Schema of the db model;

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

// const UserModel = mongoose.model('UserDatabase', UserSchema);
// this model will be used to intercat with our db using our apis.

// app.post("/register", async (req, res) => {
//     // check if email you are getting from postman is there in db or not;
//     // if there,than just send response saying user exits;
//     // if not there , than store all the credentials in the databse
//     const { username, email, password } = req.body
//     console.log(username, email, password);
//     let userobj = {
//         username: username,
//         password: password,
//         email: email
//     }
//     try {
//         let data = await UserModel({email}).save();
//     if (data) {
//         return res.json({
//             message:"data inserted succesfuylly"
//         })
//     }
//     return res.json({
//         message:"data not inserted"
//     })
//     } catch (error) {
//         return res.json({
//             message:"some error"
//         })
//     }
//     // method to store the data in mongodb;
        
//         // error: multiple responses :req header can not be set after it has been sent to the client;
    
    

// })

// app.post("/user", async(req, res) => {
//     const { email } = req.body;
//     // to find data based on email address provided';

//    try {
//        const data = await UserModel.find({ email });
//        if (data) {
//            return res.json({
//                message:"data exists"
//            })
//        }
//        return res.json({
//            message:"data does not exists"
//        })
//    } catch (error) {
//        return res.json({
//         message:"error in finding the data"
//     })
//    }
// })

app.listen(5000, () => {
    console.log("server running");
})


// user autherntication
// user schema :username,email and passsword
// /register and /login
// register : take the new data and store it in mongodb :
            //  :check if email is already there, send response as user already there
            
// login : if email is matching or not , password is matching .

// product : storing products

// /getproduct :giving us list of product stored in db;  protect route or private  route.
//    this routes are authorized.
