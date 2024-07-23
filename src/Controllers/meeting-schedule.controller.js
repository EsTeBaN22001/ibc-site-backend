import { MeetingSchedule } from '../Models/MeetingSchedule.model.js'

export const getMeetingScheduleController = async (req, res) => {
  const meetingSchedule = await MeetingSchedule.getMeetingSchedule()

  if (!meetingSchedule) {
    res.status(400).send({
      success: false,
      message: 'Error al obtener los horarios de las reuniones'
    })
  }

  res.send(meetingSchedule)
}

export const updateMeetingScheduleController = async (req, res) => {
  const { morning, afternoon } = req.body

  const actualMeetingSchedule = await MeetingSchedule.getMeetingSchedule()

  const updateMeetingSchedule = await MeetingSchedule.updateMeetingSchedule(actualMeetingSchedule.id, morning, afternoon)

  if (!updateMeetingSchedule) {
    res.status(400).send({
      success: false,
      message: 'Error al actualizar el horario de las reuniones'
    })
  }

  res.status(200).send({ id: actualMeetingSchedule.id, morning, afternoon })
}
