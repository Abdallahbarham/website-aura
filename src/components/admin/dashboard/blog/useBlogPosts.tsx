// src/components/admin/dashboard/blog/useBlogPosts.tsx
import { useEffect, useState } from 'react'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  tags: string
  readTime: string
  imageUrl: string
  content: string
  created_at: string
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const API_URL = 'http://localhost:3001/api/resources'

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await fetch(API_URL)
        if (!response.ok) throw new Error('Failed to fetch posts')
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load posts')
      } finally {
        setLoading(false)
      }
    }
    loadPosts()
  }, [])

  const createPost = async (postData: Omit<BlogPost, 'id' | 'created_at'>) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
      if (!response.ok) throw new Error('Failed to create post')
      return await response.json()
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to create post')
    }
  }

  const updatePost = async (id: number, postData: Partial<BlogPost>) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      })
      if (!response.ok) throw new Error('Failed to update post')
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to update post')
    }
  }

  const deletePost = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Failed to delete post')
    } catch (err) {
      throw err instanceof Error ? err : new Error('Failed to delete post')
    }
  }

  return { posts, loading, error, createPost, updatePost, deletePost }
}