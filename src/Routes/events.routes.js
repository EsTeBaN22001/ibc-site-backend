import { Router } from 'express'
import {
  createEventController,
  deleteEventController,
  getEventController,
  getEventsController,
  updateEventController
} from '../Controllers/events.controller.js'
import { uploadEventImageController } from '../Controllers/uploadEventImage.controller.js'
import { verifyToken } from '../Middlewares/jwt.js'
import { sanitizeEvent } from '../Middlewares/sanitizeInputs.js'
import { validateInputs } from '../Middlewares/validateInput.js'
import multer from 'multer'
import path from 'path'

// Configuración multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage })

const router = Router()

// Ruta para subir imágenes de eventos
router.post('/upload', upload.single('image'), uploadEventImageController)

router.get('/', verifyToken, getEventsController)
router.get('/:id', verifyToken, getEventController)
router.post('/create', verifyToken, sanitizeEvent, validateInputs, createEventController)
router.post('/update/:id', verifyToken, sanitizeEvent, validateInputs, updateEventController)
router.delete('/delete/:id', verifyToken, deleteEventController)

export default router
