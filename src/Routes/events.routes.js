// import { Router } from 'express'
// import {
//   createEventController,
//   deleteEventController,
//   getEventController,
//   getEventsController,
//   updateEventController
// } from '../Controllers/events.controller.js'
// import { deleteImageController, uploadEventImageController } from '../Controllers/image.controller.js'
// import { verifyToken } from '../Middlewares/jwt.js'
// import { sanitizeDeleteImage, sanitizeEvent } from '../Middlewares/sanitizeInputs.js'
// import { validateInputs } from '../Middlewares/validateInput.js'
// import multer from 'multer'
// import path from 'path'

// // Configuración multer
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads/')
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname))
//   }
// })

// const upload = multer({ storage })

// const router = Router()

// // Ruta para subir imágenes de eventos
// router.post('/upload', upload.single('image'), uploadEventImageController)
// router.post('/delete-image', verifyToken, sanitizeDeleteImage, validateInputs, deleteImageController)

// router.get('/', getEventsController)
// router.get('/:id', verifyToken, getEventController)
// router.post('/create', verifyToken, sanitizeEvent, validateInputs, createEventController)
// router.post('/update/:id', verifyToken, sanitizeEvent, validateInputs, updateEventController)
// router.delete('/delete/:id', verifyToken, deleteEventController)

// export default router
