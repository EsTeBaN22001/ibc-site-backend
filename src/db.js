// import { createPool } from 'mysql2/promise'
// import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config.js'

// export const pool = createPool({
//   host: DB_HOST,
//   user: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_DATABASE,
//   port: DB_PORT
// })

import { Sequelize } from 'sequelize'
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from './config.js'

export const sequelize = new Sequelize({
  database: DB_DATABASE,
  username: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  logging: false
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la db a través de sequelize exitosamente')
  })
  .catch(err => {
    console.log('Error: ', err)
  })

sequelize.sync({ alter: true }).then(() => {
  console.log('Tablas actualizadas con los cambios de los modelos')
})
