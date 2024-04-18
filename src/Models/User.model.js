import { pool } from '../db.js'

export class UserModel {
  static table = 'users'

  static async registerUser({ name, username, password }) {
    try {
      const [result] = await pool.query(`INSERT INTO ${this.table} (name, username, password) VALUES (?, ?, ?)`, [
        name,
        username,
        password
      ])

      if (!result || result.affectedRows <= 0) {
        return false
      }

      return {
        id: result.insertId,
        name,
        username
      }
    } catch (err) {
      return { success: false, err }
    }
  }
}
