import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { User, Event, MeetingSchedule } from '../models/init-models.js'

import authRouter from './Routes/auth.routes.js'
// import eventsRouter from './Routes/events.routes.js'
// import meetingSchedule from './Routes/meeting-schedule.routes.js'

export const app = express()

const corsOptions = {
  origin: [
    'http://localhost:4200',
    'https://ibcsl.netlify.app',
    'https://ibc-site-frontend-production.up.railway.app',
    'https://ibc-api-2od7.onrender.com'
  ],
  methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE']
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))
// app.use('/uploads', express.static('uploads'))

app.use('/api/auth', authRouter)
// app.use('/api/events', eventsRouter)
// app.use('/api/meeting-schedule', meetingSchedule)

// Prueba de Sequelize ORM
app.use('/api/all-events-sequelize', async (req, res) => {
  const events = await Event.findAll()
  const users = await User.findAll()
  const meetings = await MeetingSchedule.findAll()
  res.json({ events, users, meetings })
})
