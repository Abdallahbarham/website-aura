// server/src/db.ts
import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'faei_website',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})