import User from "../models/user"

const isUser = async (req,res,next) => {
    try{
        const specificUser = await User.findOne({username:req.body.username})
        if(specificUser){
            req.existingUser = specificUser
            req.isUser = true
        }else{
            req.isUser = false
        }
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export default isUser