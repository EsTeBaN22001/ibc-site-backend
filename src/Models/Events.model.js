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

  static async getEvent(id) {
    try {
      const [result, data] = await pool.query(`SELECT * FROM ${this.table} WHERE id = ${id}`)

      if (!result) {
        return false
      }

      return result[0]
    } catch (err) {
      return { success: false, err }
    }
  }

  static async createEvent({ title, date_start, date_end, time_start, time_end, ubication, price, aditional_info }) {
    try {
      const [result] = await pool.query(
        `INSERT INTO ${this.table} (title, date_start, date_end, time_start, time_end, ubication, price, aditional_info) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, date_start, date_end || null, time_start, time_end || null, ubication, price || null, aditional_info || null]
      )

      if (!result || result.affectedRows <= 0) {
        return false
      }

      return result
    } catch (err) {
      return { success: false, err }
    }
  }

  static async updateEvent({ id, title, date_start, date_end, time_start, time_end, ubication, price, aditional_info }) {
    try {
      const [result] = await pool.query(
        `UPDATE ${this.table} 
         SET title = ?, date_start = ?, date_end = ?, time_start = ?, time_end = ?, ubication = ?, price = ?, aditional_info = ?
         WHERE id = ?`,
        [title, date_start, date_end || null, time_start, time_end || null, ubication, price || null, aditional_info || null, id]
      )

      if (!result || result.affectedRows <= 0) {
        return false
      }

      return result
    } catch (err) {
      return { success: false, err }
    }
  }

  static async deleteEvent(id) {
    try {
      const [result] = await pool.query(`DELETE FROM ${this.table} WHERE id = ${id} LIMIT 1`)

      if (!result || result.affectedRows <= 0) {
        return false
      }

      return result
    } catch (err) {
      return { success: false, err }
    }
  }
}
