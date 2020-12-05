import User from "../models/user"


const createUser = async (req,res) => {
    try{
        const newUser = new User({
            ...req.user
        })
        const savedUser = await newUser.save()
        res.json({success:true,message:"Account verified and user registered successfully"})
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export default createUser