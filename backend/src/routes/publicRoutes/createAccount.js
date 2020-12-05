import {Router} from "express"
import {verifyToken,hashPassword} from "../../middlewares/createAccount"
import createUser from "../../controllers/createAccount"

const router = Router()

router.post('/:token',verifyToken,hashPassword,createUser)

export default router