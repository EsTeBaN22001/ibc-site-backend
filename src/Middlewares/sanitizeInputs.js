import { body } from 'express-validator'
import sanitizeHtml from 'sanitize-html'

const sanitizeField = field => {
  return body(field)
    .trim()
    .customSanitizer(value => (value !== undefined ? sanitizeHtml(value) : null))
}

export const sanitizeRegisterUser = [sanitizeField('name'), sanitizeField('username'), sanitizeField('password')]

export const sanitizeLoginUser = [sanitizeField('username'), sanitizeField('password')]

export const sanitizeCreateEvent = [
  sanitizeField('title'),
  sanitizeField('date_start'),
  sanitizeField('date_end'),
  sanitizeField('time_start'),
  sanitizeField('time_end'),
  sanitizeField('ubication'),
  sanitizeField('price'),
  sanitizeField('aditional_info')
]

export const sanitizeUpdateEvent = [
  sanitizeField('title'),
  sanitizeField('date_start'),
  sanitizeField('date_end'),
  sanitizeField('time_start'),
  sanitizeField('time_end'),
  sanitizeField('ubication'),
  sanitizeField('price'),
  sanitizeField('aditional_info')
]
