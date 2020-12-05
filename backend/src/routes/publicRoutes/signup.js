import {Router} from "express"
import signupValidation from "../../validations/signup"
import tokenizeData from "../../middlewares/signup"
import sendMail from "../../middlewares/signupmail"
import isUser from "../../middlewares/userExists"

const router = Router()

router.post('/',signupValidation,isUser,tokenizeData,sendMail)

export default router