import jwt from "jsonwebtoken"

const tokenizeData = (req,res,next) => {
    try{
        if (req.isUser) return res.json({success:false,error:"User already registered"})
        const token = jwt.sign(req.body,process.env.SIGNUP_TOKEN,{expiresIn:"1h"})
        req.token = token
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export default tokenizeData