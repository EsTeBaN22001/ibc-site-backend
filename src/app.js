import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import eventsRouter from './Routes/events.routes.js'
import authRouter from './Routes/auth.routes.js'

export const app = express()

const corsOptions = {
  origin: ['http://localhost:4200', 'https://ibcsl.netlify.app', 'https://ibc-site-frontend-production.up.railway.app'],
  methods: ['OPTIONS', 'GET', 'POST', 'PUT', 'DELETE']
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(morgan('dev'))
app.use('/uploads', express.static('uploads'))

app.use('/api/events', eventsRouter)
app.use('/api/auth', authRouter)
