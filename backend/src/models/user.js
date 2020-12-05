import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:'POST'}],
    comments:[{type: mongoose.Schema.Types.ObjectId, ref:'COMMENT'}]
}) 

const User = mongoose.model('USER',UserSchema)

export default User