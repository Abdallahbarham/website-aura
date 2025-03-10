import { Router, Request, Response, NextFunction, RequestHandler } from 'express'
import { pool } from './db'

const router = Router()

// Properly typed handler with void return
const getAllResources: RequestHandler = async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM resources ORDER BY id DESC')
    res.json(rows)
  } catch (error) {
    next(error)
  }
}

const getResourceById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const [rows] = await pool.query('SELECT * FROM resources WHERE id = ?', [id])
    
    if ((rows as any[]).length === 0) {
      res.status(404).json({ error: 'Resource not found' })
      return // Exit handler without returning response object
    }
    
    res.json((rows as any[])[0])
  } catch (error) {
    next(error)
  }
}

const createResource: RequestHandler = async (req, res, next) => {
  try {
    const { title, excerpt, category, readTime, imageUrl, content } = req.body
    
    if (!title) {
      res.status(400).json({ error: 'Title is required' })
      return // Exit handler here
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
    next(error)
  }
}

// Similar fixes for updateResource and deleteResource...

// Update route
const updateResource: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    const { title, excerpt, category, readTime, imageUrl, content } = req.body
    
    const [rows] = await pool.query('SELECT * FROM resources WHERE id = ?', [id])
    
    if ((rows as any[]).length === 0) {
      res.status(404).json({ error: 'Resource not found' })
      return
    }

    await pool.query(
      `UPDATE resources 
       SET title = ?, excerpt = ?, category = ?, readTime = ?, imageUrl = ?, content = ?
       WHERE id = ?`,
      [title, excerpt, category, readTime, imageUrl, content, id]
    )
    
    res.json({ message: 'Resource updated successfully' })
  } catch (error) {
    next(error)
  }
}

// Delete route
const deleteResource: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params
    await pool.query('DELETE FROM resources WHERE id = ?', [id])
    res.json({ message: 'Resource deleted successfully' })
  } catch (error) {
    next(error)
  }
}

router.get('/', getAllResources)
router.get('/:id', getResourceById)
router.post('/', createResource)
router.put('/:id', updateResource)
router.delete('/:id', deleteResource)

export default router