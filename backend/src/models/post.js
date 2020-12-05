import mongoose from "mongoose"

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    author: {
        type:String,
        ref: 'USER'
    },
    createdAt:{
        type:String,
        required:true
    },
    likes:{
        type:Number,
        required: true
    },
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'COMMENT'
    }]
})

const Post = mongoose.model('POST',PostSchema)

export default Post
