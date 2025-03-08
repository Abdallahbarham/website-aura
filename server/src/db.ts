import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '',       // Or your XAMPP MySQL password
  database: 'faei_website', 
})
