// import fs from 'fs'
// import path from 'path'
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// export const uploadEventImageController = (req, res) => {
//   if (!req.file) {
//     return res.status(400).send({ success: false, message: 'Please upload an image' })
//   }

//   try {
//     const imageUrl = `/uploads/${req.file.filename}`
//     res.status(200).send({ imageUrl })
//   } catch (err) {
//     console.error('Error uploading image:', err)
//     res.status(500).send({ success: false, message: 'Internal Server Error' })
//   }
// }

// export const deleteImageController = (req, res) => {
//   const { img } = req.body

//   if (!img) {
//     res.status(400).send({ success: false, message: 'Error al borrar la imagen' })
//   }

//   const imagePath = path.join(__dirname, '..', '..', 'uploads', path.basename(img))

//   fs.unlink(imagePath, err => {
//     if (err) {
//       res.status(400).send({ success: false, message: 'Error al borrar la imagen' })
//     }
//     return res.status(200).send({
//       success: true,
//       message: 'La imagen se borró correctamente'
//     })
//   })
// }
