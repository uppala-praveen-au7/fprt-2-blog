import {Router} from "express"

const router = Router()

import loginRoute from "./publicRoutes/login"
import signupRoute from "./publicRoutes/signup"
import resetPasswordRoute from "./publicRoutes/resetPassword"
import forgotPasswordRoute from "./publicRoutes/forgotPassword"
import createAccountRoute from "./publicRoutes/createAccount"

router.use('/signup',signupRoute)
router.use('/login',loginRoute)
router.use('/resetPassword',resetPasswordRoute)
router.use('/forgotPassword',forgotPasswordRoute)
router.use('/createAccount',createAccountRoute)

export default router