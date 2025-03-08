import { Router, Request, Response } from 'express'
import { pool } from './db'

const router = Router()

// GET all resources
router.get('/', async (req: Request, res: Response) => {
  try {
    const [rows] = await pool.query('SELECT * FROM resources ORDER BY id DESC')
    res.json(rows)
  } catch (error) {
    console.error('Error fetching resources:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// GET one resource by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query('SELECT * FROM resources WHERE id = ?', [id])
    if ((rows as any[]).length === 0) {
      return res.status(404).json({ error: 'Resource not found' })
    }
    res.json((rows as any[])[0])
  } catch (error) {
    console.error('Error fetching resource:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// CREATE (POST) a new resource
router.post('/', async (req: Request, res: Response) => {
  try {
    const { title, excerpt, category, readTime, imageUrl, content } = req.body
    if (!title) {
      return res.status(400).json({ error: 'Title is required' })
    }
    const [result] = await pool.query(
      `INSERT INTO resources (title, excerpt, category, readTime, imageUrl, content)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, excerpt, category, readTime, imageUrl, content]
    )
    res.status(201).json({
      message: 'Resource created successfully',
      insertId: (result as any).insertId
    })
  } catch (error) {
    console.error('Error creating resource:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// UPDATE (PUT) a resource
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { title, excerpt, category, readTime, imageUrl, content } = req.body
    // Quick check
    const [rows] = await pool.query('SELECT * FROM resources WHERE id = ?', [id])
    if ((rows as any[]).length === 0) {
      return res.status(404).json({ error: 'Resource not found' })
    }

    await pool.query(
      `UPDATE resources 
       SET title = ?, excerpt = ?, category = ?, readTime = ?, imageUrl = ?, content = ?
       WHERE id = ?`,
      [title, excerpt, category, readTime, imageUrl, content, id]
    )
    res.json({ message: 'Resource updated successfully' })
  } catch (error) {
    console.error('Error updating resource:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

// DELETE a resource
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query('DELETE FROM resources WHERE id = ?', [id])
    res.json({ message: 'Resource deleted successfully' })
  } catch (error) {
    console.error('Error deleting resource:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router
