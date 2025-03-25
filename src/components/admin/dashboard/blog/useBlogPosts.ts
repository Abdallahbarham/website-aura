import { useState, useEffect } from 'react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string;
  readTime: string;
  imageUrl: string;
  content: string;
  status: string; // Add status property
  author: string; // Add author property
  date: string; // Add date property
  created_at: string;
}

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('/path/to/php/fetchPosts.php');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError('Failed to fetch posts');
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (postData: Omit<BlogPost, 'id' | 'created_at'>) => {
    setLoading(true);
    try {
      const response = await fetch('/path/to/php/createPost.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      if (!response.ok) {
        throw new Error('Failed to create post');
      }
      const newPost = await response.json();
      setPosts((prevPosts) => [...prevPosts, newPost]);
      return newPost;
    } catch (err) {
      setError(err.message || 'Failed to create post');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (id: number, postData: Partial<BlogPost>) => {
    try {
      const response = await fetch(`/path/to/php/updatePost.php?id=${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      if (response.ok) {
        fetchPosts(); // Refresh the list after updating a post
      } else {
        throw new Error('Failed to update post');
      }
    } catch (err) {
      throw new Error('Failed to update post');
    }
  };

  const deletePost = async (id: number) => {
    try {
      const response = await fetch(`/path/to/php/deletePost.php?id=${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        fetchPosts(); // Refresh the list after deleting a post
      } else {
        throw new Error('Failed to delete post');
      }
    } catch (err) {
      throw new Error('Failed to delete post');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    fetchPosts
  };
};

export const updateBlogPost = async (post: BlogPost) => {
  const response = await fetch(`/api/blog/${post.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      tags: post.tags,
      date: post.date,
      author: post.author,
      status: post.status,
      readTime: post.readTime, // Ensure readTime is included if required
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to update the blog post');
  }

  return await response.json();
};
