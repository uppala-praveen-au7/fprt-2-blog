import nodemailer from "nodemailer"
import mg from "nodemailer-mailgun-transport"


const auth = {
    api_key:process.env.MAILGUN_API_KEY,
    domain:process.env.MAILGUN_DOMAIN
}

const transporter = nodemailer.createTransport(mg(auth))



const sendMail = (req,res) => {
    try{
        transporter.sendMail({
            from: "noreply@honeyblogs.com",
            to: `${req.body.email}`,
            subject: "Account Verification",
            html: `<a href= 'http://localhost:3000/createAccount/${req.token}' >please click the link</a>`
        },(err,data)=>{
            if(err){
                return res.json({success:false,error:err.message})
            }else{
                return res.json({success:true,message:"please verify your email and activate the account by clicking the link",data:data})
            }
        })
    }catch(err){
        res.json({success:false,error:err.message})
    }
}

export default sendMail