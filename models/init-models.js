import { sequelize } from '../src/db.js'
import { DataTypes } from 'sequelize'
import _events from './events.js'
import _meetingschedule from './meetingschedule.js'
import _sequelizemeta from './sequelizemeta.js'
import _users from './users.js'

const Event = _events(sequelize, DataTypes)
const MeetingSchedule = _meetingschedule(sequelize, DataTypes)
const SequelizeMeta = _sequelizemeta(sequelize, DataTypes)
const User = _users(sequelize, DataTypes)

export { Event, MeetingSchedule, SequelizeMeta, User }
