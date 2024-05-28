import { Router } from 'express'
import { createEventController, getEventsController } from '../Controllers/events.controller.js'
import { verifyToken } from '../Middlewares/jwt.js'
import { sanitizeCreateEvent } from '../Middlewares/sanitizeInputs.js'
import { validateInputs } from '../Middlewares/validateInput.js'

const router = Router()

router.get('/', verifyToken, getEventsController)
router.post('/create', verifyToken, sanitizeCreateEvent, validateInputs, createEventController)

export default router
