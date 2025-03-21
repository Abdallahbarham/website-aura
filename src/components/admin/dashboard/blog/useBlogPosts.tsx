import { useEffect, useState } from 'react';
import { resources } from "../../../resources/resourcesData";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  tags: string;
  readTime: string;
  imageUrl: string;
  content: string;
  created_at: string;
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch('/path/to/php/getPosts.php');
      const data = await response.json();
      const formattedPosts: BlogPost[] = data.map((post: any) => ({
        id: Number(post.id),
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        tags: post.tags || "",
        readTime: post.readTime,
        imageUrl: post.imageUrl,
        content: post.content || "",
        created_at: post.created_at || new Date().toISOString(),
      }));
      setPosts(formattedPosts);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = async (postData: Omit<BlogPost, 'id' | 'created_at'>) => {
    try {
      const response = await fetch('/path/to/php/createPost.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      if (response.ok) {
        const newPost = {
          ...postData,
          id: posts.length + 1, // Assign a new ID
          created_at: new Date().toISOString(),
        };
        setPosts((prevPosts) => [...prevPosts, newPost]); // Correct state update
      } else {
        throw new Error('Failed to create post');
      }
    } catch (err) {
      throw new Error('Failed to create post');
    }
  };

  const updatePost = async (id: number, postData: Partial<BlogPost>) => {
    try {
      setPosts(posts.map((p) => (p.id === id ? { ...p, ...postData } : p)));
    } catch (err) {
      throw new Error('Failed to update post');
    }
  };

  const deletePost = async (id: number) => {
    try {
      setPosts(posts.filter((p) => p.id !== id));
    } catch (err) {
      throw new Error('Failed to delete post');
    }
  };

  return { posts, loading, error, createPost, updatePost, deletePost, fetchPosts };
}