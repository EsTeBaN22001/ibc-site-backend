import { Router } from 'express'
import { eventsController } from '../Controllers/events.controller.js'

const router = Router()

router.get('/events', eventsController)

export default router
