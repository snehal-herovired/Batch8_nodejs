const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const RightSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    role: {
        type: String,
        required:true
    }
 
   
}, {
    timestamps:true
}
);

const RightModel = mongoose.model('Right', RightSchema);

module.exports=RightModel