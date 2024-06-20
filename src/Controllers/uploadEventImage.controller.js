export const uploadEventImageController = (req, res) => {
  if (!req.file) {
    return res.status(400).send({ success: false, message: 'Please upload an image' })
  }

  try {
    const imageUrl = `/uploads/${req.file.filename}`
    res.status(200).send({ imageUrl })
  } catch (err) {
    console.error('Error uploading image:', err)
    res.status(500).send({ success: false, message: 'Internal Server Error' })
  }
}
