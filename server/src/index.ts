import express from 'express'
import cors from 'cors'
import { pool } from './db'
import resourceRouter from './resourceRoutes' // import your resource routes

const app = express()
app.use(cors())
app.use(express.json())

// Option A: Just define some basic route here
app.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT 1+1 AS result')
    res.json({ test: rows })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Internal error' })
  }
})

// Option B: Mount the resource routes under /api/resources
app.use('/api/resources', resourceRouter)

// Start the server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
