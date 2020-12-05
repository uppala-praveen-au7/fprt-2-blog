import joi from "joi"

const forgotPasswordSchema = joi.object({
    email: joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net','in'] } }).required(),
})

const forgotPasswordValidation = (req,res,next) => {
    try{
        const validation = forgotPasswordSchema.validate(req.body)
        if(validation.error) return res.json({success:false,error:validation.error.message})
        next()
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export default forgotPasswordValidation