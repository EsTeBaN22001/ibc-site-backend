// import { EventsModel } from '../Models/Events.model.js'
import { Event } from '../../models/init-models.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const getEventsController = async (req, res) => {
  const events = await Event.findAll()

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

  const event = await Event.findOne({
    where: {
      id: eventId
    }
  })

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

  let result

  try {
    result = await Event.create(event)
    if (!result) {
      throw new Error()
    }
  } catch (err) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error creating event',
      err
    })
  }

  event.id = result.insertId

  res.send(event)
}

export const updateEventController = async (req, res) => {
  const idEvent = req.params.id
  const updateEvent = req.body // Obtenemos los datos del evento desde el cuerpo de la solicitud

  // Obtener el evento antes de editar
  let actualEvent

  try {
    actualEvent = await Event.findByPk(idEvent)
    if (!actualEvent) {
      return res.status(404).send({
        success: false,
        message: 'Evento no encontrado'
      })
    }
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: 'Error buscando el evento'
    })
  }

  const actualEventImgName = actualEvent.image_url ? actualEvent.image_url.split('/')[2] : ''
  const updateEventImgName = updateEvent.image_url ? updateEvent.image_url.split('/')[2] : ''

  // Si hay una nueva imagen, borrar la anterior
  if (actualEventImgName !== updateEventImgName && actualEventImgName !== '' && updateEventImgName !== '') {
    const oldImagePath = path.join(__dirname, '..', '..', 'uploads', path.basename(actualEvent.image_url))
    const imgExists = fs.existsSync(oldImagePath)

    if (imgExists) {
      // Borrar imagen anterior
      fs.unlink(oldImagePath, err => {
        if (err) {
          console.error('Error al borrar la imagen:', err)
        }
      })
    }
  }

  let result

  try {
    // Actualizar el evento en la base de datos
    result = await Event.update(updateEvent, {
      where: { id: idEvent },
      returning: true // Para obtener el evento actualizado
    })

    if (result[0] === 0) {
      return res.status(404).send({
        success: false,
        message: 'No se pudo actualizar el evento, evento no encontrado'
      })
    }

    const updatedEvent = result[1][0] // Obtener el evento actualizado del resultado

    // Enviar la respuesta con el evento actualizado
    return res.status(200).send({
      success: true,
      event: updatedEvent // Incluye el evento actualizado aquí
    })
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: 'Error al actualizar el evento',
      err
    })
  }
}

export const deleteEventController = async (req, res) => {
  const eventId = req.params.id

  let event

  try {
    event = await Event.findByPk(eventId)

    if (!event) {
      throw new Error()
    }
  } catch (err) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Undefined event'
    })
  }

  let result

  try {
    result = await Event.destroy({
      where: { id: eventId }
    })

    if (!result || result.affectedRow <= 0) {
      throw new Error()
    }
  } catch (err) {
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
