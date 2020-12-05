import joi from "joi"

const loginSchema = joi.object({
    username: joi.string().min(3).max(15).required(),
    password: joi.string().min(8).max(20).required()
})

const loginValidation = (req,res,next) => {
    try{
        const validation = loginSchema.validate(req.body)
        if(validation.error) return res.json({success:false,error:validation.error.message})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export default loginValidation