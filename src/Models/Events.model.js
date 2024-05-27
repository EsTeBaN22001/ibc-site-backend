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
}
