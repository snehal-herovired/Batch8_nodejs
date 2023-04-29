const UserModel =require("../models/UserModel")

const register = async (req, res) => {
    // check if email you are getting from postman is there in db or not;
    // if there,than just send response saying user exits;
    // if not there , than store all the credentials in the databse
    const { username, email, password } = req.body
    console.log(username, email, password);
    let userobj = {
        name: username,
        password: password,
        email: email
    }
    try {
        let data = await UserModel(userobj).save();
    if (data) {
        return res.json({
            message:"data inserted succesfuylly"
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
    // method to store the data in mongodb;
        
        // error: multiple responses :req header can not be set after it has been sent to the client;
    
    

}

const finduser=async(req, res) => {
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
    register,
    finduser
}