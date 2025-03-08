import { useEffect, useState } from 'react'

// This interface matches the "resource" fields from your backend.
export interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  tags: string            // Comma-separated tags ("AI, Finance") 
  readTime: string        // e.g. "5"
  imageUrl: string        // e.g. "https://..."
  content: string         // HTML content
  created_at?: string
  updated_at?: string
}

// For creating a new post (without an id)
export interface NewPostData {
  title: string
  excerpt: string
  category: string
  tags: string
  readTime: string
  imageUrl: string
  content: string
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Your Express/Node API endpoint
  const API_URL = 'http://localhost:3001/api/resources'

  // ===== LOAD all posts from the server =====
  useEffect(() => {
    loadPosts()
  }, [])

  async function loadPosts() {
    try {
      setLoading(true)
      setError(null)
      const res = await fetch(API_URL)
      if (!res.ok) {
        throw new Error('Failed to fetch resources')
      }
      const data = await res.json()
      setPosts(data)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // ===== CREATE a new post =====
  async function createPost(data: NewPostData) {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        throw new Error('Failed to create resource')
      }
      await res.json() // optionally read insertId, etc.
      // Refresh local list
      await loadPosts()
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  // ===== UPDATE a post =====
  async function updatePost(id: number, updatedData: Partial<BlogPost>) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      })
      if (!res.ok) {
        throw new Error('Failed to update resource')
      }
      await loadPosts()
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  // ===== DELETE a post =====
  async function deletePost(id: number) {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) {
        throw new Error('Failed to delete resource')
      }
      await loadPosts()
    } catch (err: any) {
      setError(err.message)
      throw err
    }
  }

  return {
    posts,         // The list of BlogPost objects
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
  }
}
