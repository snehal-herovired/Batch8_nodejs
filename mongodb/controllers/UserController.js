const UserModel = require("../models/db.schema");

// method to store the data in mongodb;
// error: multiple responses :req header can not be set after it has been sent to the client;
const registerController = async(req, res) => {
    const { username, email, password } = req.body
    console.log(username, email, password);
    let userobj = {
        username: username,
        password: password,
        email: email
    }
    try {
        let data = await UserModel(userobj).save();
    if (data) {
        return res.json({
            message:"data inserted succesfully"
        })
    }
    return res.json({
        message:"data not inserted"
    })
    } catch (error) {
        return res.json({
            message:"some error"
        })
    }
}

const userController = async(req, res) => {
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
}

module.exports = {
    registerController,
    userController
}