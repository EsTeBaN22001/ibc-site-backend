import { Router } from 'express'
import { getEventsController } from '../Controllers/events.controller.js'
import { verifyToken } from '../Middlewares/jwt.js'

const router = Router()

router.get('/events', verifyToken, getEventsController)

export default router
