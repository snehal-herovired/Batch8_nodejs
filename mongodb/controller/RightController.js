const RightModel =require("../models/RightsModel")
const rights = async (req, res) => {
    // check if email you are getting from postman is there in db or not;
    // if there,than just send response saying user exits;
    // if not there , than store all the credentials in the databse
    const { userid,role } = req.body
    console.log(userid,role);
    let userobj = {
        user_id: userid,
        role:role
    }
    try {
        let data = await RightModel(userobj).save();
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
//api : it will be take id of role , based on that it will populate us 
// the data of user related to the role
const userbyrole =async (req, res) => {
    const { id } = req.body
    const roledata = await RightModel.find({ _id: id }).populate('user_id')
    res.send(roledata)
}

module.exports = {
    rights,
    userbyrole
}

