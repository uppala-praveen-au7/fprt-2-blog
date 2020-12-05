import joi from "joi"

const signupSchema = joi.object({
    username: joi.string().min(3).max(15).required(),
    email: joi.string().email({minDomainSegments: 2, tlds: { allow: ['com', 'net','in'] } }).required(),
    password: joi.string().min(8).max(20).required()
})

const signupValidation = (req,res,next) => {
    const validation = signupSchema.validate(req.body)
    if(validation.error) return res.json({success:false,error:validation.error.message})
    next()
}

export default signupValidation