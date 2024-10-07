import { MeetingSchedule } from '../../models/init-models.js'

export const getMeetingScheduleController = async (req, res) => {
  // const meetingSchedule = await MeetingSchedule.getMeetingSchedule()
  const meetingSchedule = await MeetingSchedule.findOne({ where: { id: 1 } })

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

  const actualMeetingSchedule = await MeetingSchedule.findOne({ where: { id: 1 } })

  // const updateMeetingSchedule = await MeetingSchedule.updateMeetingSchedule(actualMeetingSchedule.id, morning, afternoon)

  const updateMeetingSchedule = await MeetingSchedule.update({ morning, afternoon }, { where: { id: actualMeetingSchedule.id } })

  if (!updateMeetingSchedule) {
    res.status(400).send({
      success: false,
      message: 'Error al actualizar el horario de las reuniones'
    })
  }

  res.status(200).send({ id: actualMeetingSchedule.id, morning, afternoon })
}
