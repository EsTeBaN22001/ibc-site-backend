import { Router } from 'express'
import { loginController, registerController } from '../Controllers/auth.controller.js'
import { sanitizeRegisterUser } from '../Middlewares/sanitizeInputs.js'
import { validateInputs } from '../Middlewares/validateInput.js'

const router = Router()

router.post('/login', sanitizeRegisterUser, validateInputs, loginController)

export default router
