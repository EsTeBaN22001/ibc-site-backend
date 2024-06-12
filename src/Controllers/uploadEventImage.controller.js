export const uploadEventImageController = (req, res) => {
  if (!req.file) {
    res.status(400).send({ success: false, message: 'Please upload an image' })
  }

  res.status(200).send({ imageUrl: `/uploads/${req.file.filename}` })
}
