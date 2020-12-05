import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export const verifyToken = (req,res,next) =>{
    try{
        const user = jwt.verify(req.params.token,process.env.SIGNUP_KEY)
        req.user = user
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export const hashPassword = async (req,res,next) => {
    try{
        const hashedPassword = await bcrypt.hash(req.user.password,8)
        req.user.password = hashedPassword
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}