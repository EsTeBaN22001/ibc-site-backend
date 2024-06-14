import { EventsModel } from '../Models/Events.model.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getEventsController = async (req, res) => {
  const events = await EventsModel.getEvents()

  if (!events) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error getting events'
    })
  }

  res.send(events)
}

export const getEventController = async (req, res) => {
  const eventId = req.params.id

  if (!eventId) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error getting event'
    })
  }

  const event = await EventsModel.getEvent(eventId)

  if (!event || event.length === 0) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error getting event'
    })
  }

  res.send(event)
}

export const createEventController = async (req, res) => {
  const event = req.body

  const result = await EventsModel.createEvent(event)

  if (!result) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error creating event'
    })
  }

  event.id = result.insertId

  res.send(event)
}

export const updateEventController = async (req, res) => {
  const idEvent = req.params.id
  const updateEvent = req.body
  updateEvent.id = idEvent

  // Obtener el evento antes de editar
  const actualEvent = await EventsModel.getEvent(idEvent)

  if (!actualEvent) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error updating event'
    })
  }

  const actualEventImgName = actualEvent.image_url ? actualEvent.image_url.split('/')[2] : ''
  const updateEventImgName = updateEvent.image_url ? updateEvent.image_url.split('/')[2] : ''

  // Si hay una nueva imagen borrar la anterior
  if (actualEventImgName != updateEventImgName && actualEventImgName !== '') {
    const oldImagePath = path.join(__dirname, '..', '..', 'uploads', path.basename(actualEvent.image_url))

    // Borrar imagen anterior
    fs.unlink(oldImagePath, err => {
      if (err) {
        res.status(400).send('error al borrar la imagen')
      }
    })
  }

  const result = await EventsModel.updateEvent(updateEvent)

  if (!result || result.affectedRows <= 0) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error updating event'
    })
  }

  res.status(200).send(result)
}

export const deleteEventController = async (req, res) => {
  const eventId = req.params.id
  const event = await EventsModel.getEvent(eventId)

  const result = await EventsModel.deleteEvent(eventId)

  if (!result || result.affectedRows <= 0) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error deleting event'
    })
  }

  // Borrar imagen del evento de la carpeta de uploads
  if (event.image_url) {
    const oldImagePath = path.join(__dirname, '..', '..', 'uploads', path.basename(event.image_url))

    fs.unlink(oldImagePath, err => {
      if (err) {
        res.status(400).send('error al borrar la imagen')
      }
    })
  }

  res.send({ success: true, message: 'Event deleted successfully' })
}
