const mongoose =require('mongoose');
const Schema =mongoose.Schema;
const tokenShcema =new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    token:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("token",tokenShcema);
