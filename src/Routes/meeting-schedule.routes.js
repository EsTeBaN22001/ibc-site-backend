import { Router } from 'express'
import { updateMeetingScheduleController, getMeetingScheduleController } from '../Controllers/meeting-schedule.controller.js'
import { validateInputs } from '../Middlewares/validateInput.js'
import { sanitizeMeetingSchedule } from '../Middlewares/sanitizeInputs.js'

const router = new Router()

router.get('/', getMeetingScheduleController)
router.post('/', sanitizeMeetingSchedule, validateInputs, updateMeetingScheduleController)

export default router
