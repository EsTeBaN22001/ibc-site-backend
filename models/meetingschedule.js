import { Model } from 'sequelize'

export default function (sequelize, DataTypes) {
  class MeetingSchedule extends Model {}

  MeetingSchedule.init(
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      morning: {
        type: DataTypes.TIME,
        allowNull: false
      },
      afternoon: {
        type: DataTypes.TIME,
        allowNull: false
      }
    },
    {
      sequelize,
      tableName: 'meetingschedule',
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
  return MeetingSchedule
}
