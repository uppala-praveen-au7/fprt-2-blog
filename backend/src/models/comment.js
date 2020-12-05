import mongoose from "mongoose"

const CommentSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        required:true
    }
})

const Comment = mongoose.model('COMMENT',CommentSchema)

export default Comment