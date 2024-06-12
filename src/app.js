import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import eventsRouter from './Routes/events.routes.js'
import authRouter from './Routes/auth.routes.js'

export const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.use('/api/events', eventsRouter)
app.use('/api/auth', authRouter)
