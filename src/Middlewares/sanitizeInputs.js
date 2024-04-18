import { body } from 'express-validator'
import sanitizeHtml from 'sanitize-html'

const sanitizeField = field => {
  return body(field)
    .notEmpty()
    .trim()
    .customSanitizer(value => sanitizeHtml(value))
}

export const sanitizeRegisterUser = [sanitizeField('name'), sanitizeField('username'), sanitizeField('password')]

export const sanitizeLoginUser = [sanitizeField('username'), sanitizeField('password')]
