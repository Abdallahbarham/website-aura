
import { useState } from 'react';
import { toast } from "@/components/ui/use-toast";

// Define types for blog posts
export interface BlogPost {
  id: number;
  title: string;
  status: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  excerpt: string;
}

export interface NewPostData {
  title: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string;
  status: string;
}

export function useBlogPosts() {
  // Mock data
  const [posts, setPosts] = useState<BlogPost[]>([
    { 
      id: 1, 
      title: 'AI for Business Transformation', 
      status: 'Published', 
      author: 'John Smith',
      date: '2023-10-15',
      category: 'AI Strategy',
      tags: ['AI', 'Business', 'Transformation'],
      excerpt: 'How artificial intelligence is changing the business landscape...'
    },
    { 
      id: 2, 
      title: 'Future of Work with AI Integration', 
      status: 'Draft', 
      author: 'Jane Doe',
      date: '2023-10-22',
      category: 'Workplace',
      tags: ['AI', 'Future of Work', 'Automation'],
      excerpt: 'Exploring how AI will reshape the workplace in the coming decade...'
    },
    { 
      id: 3, 
      title: 'Ethical Considerations in AI Development', 
      status: 'Scheduled', 
      author: 'Emily Chen',
      date: '2023-10-30',
      category: 'Ethics',
      tags: ['AI Ethics', 'Development', 'Governance'],
      excerpt: 'The ethical frameworks that should guide AI development...'
    },
    { 
      id: 4, 
      title: 'Machine Learning for Beginners', 
      status: 'Published', 
      author: 'David Wilson',
      date: '2023-10-10',
      category: 'Education',
      tags: ['ML', 'Beginners', 'Tutorial'],
      excerpt: 'A gentle introduction to machine learning concepts...'
    },
  ]);

  const deletePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const updatePost = (updatedPost: BlogPost) => {
    setPosts(posts.map(post => post.id === updatedPost.id ? updatedPost : post));
  };

  const createPost = (newPost: NewPostData) => {
    const post = {
      id: posts.length + 1,
      ...newPost,
      date: new Date().toISOString().split('T')[0],
      tags: newPost.tags.split(',').map(tag => tag.trim())
    };
    
    setPosts([...posts, post]);
    return post;
  };

  const filterPosts = (searchTerm: string, tab: string) => {
    return posts.filter(post => {
      // First filter by search term
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Then filter by tab
      if (tab === 'posts') return matchesSearch;
      if (tab === 'drafts') return matchesSearch && post.status === 'Draft';
      if (tab === 'scheduled') return matchesSearch && post.status === 'Scheduled';
      if (tab === 'published') return matchesSearch && post.status === 'Published';
      
      return matchesSearch;
    });
  };

  return {
    posts,
    deletePost,
    updatePost,
    createPost,
    filterPosts
  };
}
