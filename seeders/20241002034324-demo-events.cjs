'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        title: 'Grupo de hombres',
        date_start: '2024-06-19',
        time_start: '20:30:00',
        time_end: '22:30:00',
        ubication: 'Rivadavia 1049',
        image_url: '/uploads/1727848825539.webp',
        recurrent: '1'
      },
      {
        title: 'Grupo de mujeres',
        date_start: '2024-06-21',
        time_start: '20:30:00',
        time_end: '22:30:00',
        ubication: 'Rivadavia 1049',
        image_url: '/uploads/1719357166954.webp',
        recurrent: '1',
        price: '1200'
      },
      {
        title: 'Taller de crecimiento',
        date_start: '2024-06-25',
        time_start: '20:00:00',
        ubication: 'Rivadavia 1049',
        image_url: '/uploads/1719965026976.webp',
        recurrent: '1',
        aditional_info: 'Llevar biblia y libreta para anotar'
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {})
  }
}
