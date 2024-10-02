'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Función para obtener la hora actual en formato 'HH:mm:ss'
    const getCurrentTime = () => {
      const now = new Date()
      return now.toTimeString().split(' ')[0] // Esto devuelve la hora en formato 'HH:mm:ss'
    }
    await queryInterface.createTable('events', {
      id: {
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.DataTypes.STRING(100),
        allowNull: false
      },
      date_start: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.DataTypes.NOW
      },
      date_end: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: true
      },
      time_start: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false,
        defaultValue: getCurrentTime
      },
      time_end: {
        type: Sequelize.DataTypes.TIME,
        allowNull: true
      },
      ubication: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false,
        defaultValue: 'Rivadavia 1049'
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL(10, 0),
        allowNull: true
      },
      aditional_info: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true
      },
      visible: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      image_url: {
        type: Sequelize.DataTypes.STRING(255),
        allowNull: true
      },
      recurrent: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events')
  }
}
