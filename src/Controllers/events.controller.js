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
