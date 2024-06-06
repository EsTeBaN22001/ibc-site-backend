import { Router } from 'express'
import {
  createEventController,
  deleteEventController,
  getEventController,
  getEventsController,
  updateEventController
} from '../Controllers/events.controller.js'
import { verifyToken } from '../Middlewares/jwt.js'
import { sanitizeCreateEvent, sanitizeUpdateEvent } from '../Middlewares/sanitizeInputs.js'
import { validateInputs } from '../Middlewares/validateInput.js'

const router = Router()

router.get('/', verifyToken, getEventsController)
router.get('/:id', verifyToken, getEventController)
router.post('/create', verifyToken, sanitizeCreateEvent, validateInputs, createEventController)
router.post('/update/:id', verifyToken, sanitizeUpdateEvent, validateInputs, updateEventController)
router.delete('/delete/:id', verifyToken, deleteEventController)

export default router
