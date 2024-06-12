import { EventsModel } from '../Models/Events.model.js'

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
  const event = req.body
  event.id = req.params.id

  const result = await EventsModel.updateEvent(event)

  if (!result || result.affectedRows <= 0) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error updating event'
    })
  }

  res.send(event)
}

export const deleteEventController = async (req, res) => {
  const eventId = req.params.id

  const result = await EventsModel.deleteEvent(eventId)

  if (!result || result.affectedRows <= 0) {
    res.status(400)
    return res.send({
      success: false,
      message: 'Error deleting event'
    })
  }

  res.send({ success: true, message: 'Event deleted successfully' })
}
