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



//in order to view this db , we have specify what kind of database it is , and what is the type of data it is going to store
//Schema of the db model;

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


    app.post("/register", async(req, res) => {
        const { username, email, password } = req.body;
        console.log(username, email, password);
        
        try {
            const existingUser = await UserModel.findOne({ email });
            if (existingUser) {
                return res.json({
                    message: "email already exists"
                });
            }
    
            const newUser = new UserModel({
                username,
                email,
                password
            });
    
            const savedUser = await newUser.save();
            if (savedUser) {
                return res.json({
                    message: "User created successfully"
                });
            }
        } catch (error) {
            return res.json({
                message: "Error creating user"
            });
        }
    });
    
    
    // method to store the data in mongodb;
        
    // error: multiple responses :req header can not be set after it has been sent to the client;
    


app.post("/user", async(req, res) => {
    const { email } = req.body;
    // to find data based on email address provided';

   try {
       const data = await UserModel.find({ email });
       if (data) {
           return res.json({
               message:"data exists"
           })
       }
       return res.json({
           message:"data does not exists"
       })
   } catch (error) {
       return res.json({
        message:"error in finding the data"
    })
   }
})

app.listen(5000, () => {
    console.log("server running");
})