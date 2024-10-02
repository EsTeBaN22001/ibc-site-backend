import { body } from 'express-validator'
import sanitizeHtml from 'sanitize-html'

const sanitizeField = (field, isRequired = false) => {
  let validator = body(field)
    .trim()
    .customSanitizer(value => {
      // Convertir string vacío a null
      if (value === '' || value === undefined) return null
      return sanitizeHtml(value)
    })

  if (isRequired) {
    validator = validator.isLength({ min: 1 }).withMessage(`${field} es obligatorio`)
  }

  return validator
}

export const sanitizeRegisterUser = [
  sanitizeField('name', true),
  sanitizeField('username', true),
  sanitizeField('password', true)
]

export const sanitizeLoginUser = [sanitizeField('username', true), sanitizeField('password', true)]

export const sanitizeEvent = [
  sanitizeField('title', true),
  sanitizeField('date_start', true),
  sanitizeField('date_end'),
  sanitizeField('time_start', true),
  sanitizeField('time_end'),
  sanitizeField('ubication', true),
  sanitizeField('price'),
  sanitizeField('aditional_info'),
  sanitizeField('image_url'),
  sanitizeField('recurrent')
]

export const sanitizeDeleteImage = [sanitizeField('img', true)]

export const sanitizeMeetingSchedule = [sanitizeField('morning', true), sanitizeField('afternoon', true)]
