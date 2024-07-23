import { pool } from '../db.js'

export class MeetingSchedule {
  static table = 'meetingschedule'

  static async getMeetingSchedule() {
    try {
      const [result] = await pool.query(`SELECT * FROM ${this.table}`)

      if (!result) {
        return false
      }

      return result[0]
    } catch (err) {
      return { success: false, err }
    }
  }

  static async updateMeetingSchedule(id, morning, afternoon) {
    try {
      const [result] = await pool.query(`UPDATE ${this.table} SET morning = ?, afternoon = ? WHERE id = ?`, [
        morning,
        afternoon,
        id
      ])

      if (!result) {
        return false
      }

      return result
    } catch (err) {
      return { success: false, err }
    }
  }
}
