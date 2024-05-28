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

export const createEventController = async (req, res) => {
  const { title, date_start, date_end, time_start, time_end, ubication, price, aditional_info } = req.body

  const result = await EventsModel.createEvent({
    title,
    date_start,
    date_end,
    time_start,
    time_end,
    ubication,
    price,
    aditional_info
  })

  if (!result) {
    res.status(400)
    res.send('Error creating event')
  }

  res.send({
    id: result.insertId,
    title,
    date_start,
    date_end,
    time_start,
    time_end,
    ubication,
    price,
    aditional_info
  })
}
