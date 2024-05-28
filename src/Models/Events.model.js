import { pool } from '../db.js'

export class EventsModel {
  static table = 'events'

  static async getEvents() {
    try {
      const [result] = await pool.query(`SELECT * FROM ${this.table}`)

      if (!result) {
        return false
      }

      return result
    } catch (err) {
      return { success: false, err }
    }
  }

  static async createEvent({ title, date_start, date_end, time_start, time_end, ubication, price, aditional_info }) {
    try {
      const result = await pool.query(
        `INSERT INTO ${this.table} (title, date_start, date_end, time_start, time_end, ubication, price, aditional_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, date_start, date_end, time_start, time_end, ubication, price || null, aditional_info]
      )

      if (!result || result.affectedRows <= 0) {
        return false
      }

      return result
    } catch (err) {
      return { success: false, err }
    }
  }
}
