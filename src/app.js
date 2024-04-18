import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import indexRouter from './Routes/index.routes.js'

export const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/', indexRouter)
