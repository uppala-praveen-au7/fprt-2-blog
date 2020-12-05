import joi from "joi"

const resetPasswordSchema = joi.object({
    password: joi.string().min(8).max(20).required(),
    repeat_password: joi.ref('password'),

})

const resetPasswordValidation = (req,res,next) => {
    const validation = resetPasswordSchema.validate(req.body)
    if(validation.error) return res.json({success:false,error:validation.error.message})
    next()
}

export default resetPasswordValidation