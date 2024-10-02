import { Model } from 'sequelize'

export default function (sequelize, DataTypes) {
  class Event extends Model {}

  Event.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      date_start: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      date_end: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      time_start: {
        type: DataTypes.TIME,
        allowNull: true
      },
      time_end: {
        type: DataTypes.TIME,
        allowNull: true
      },
      ubication: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      price: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: true
      },
      aditional_info: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      title: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      visible: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      },
      image_url: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      recurrent: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: 0
      }
    },
    {
      sequelize,
      tableName: 'events',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }]
        }
      ]
    }
  )

  return Event
}
