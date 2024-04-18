import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../config.js'

export const generateToken = (name, username) => {
  return jwt.sign(
    {
      name,
      username
    },
    JWT_SECRET_KEY
  )
}
