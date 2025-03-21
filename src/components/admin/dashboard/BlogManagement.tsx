import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Plus } from 'lucide-react';

import BlogFilters from './blog/BlogFilters';
import BlogPostList from './blog/BlogPostList';
import DeletePostDialog from './blog/DeletePostDialog';
import { useBlogPosts, BlogPost } from './blog/useBlogPosts';

interface BlogManagementProps {
  posts: BlogPost[];
  loading: boolean;
  error: string;
  createPost: (postData: Omit<BlogPost, "id" | "created_at">) => Promise<void>;
  updatePost: (id: number, postData: Partial<BlogPost>) => Promise<void>;
  deletePost: (id: number) => Promise<void>;
  fetchPosts: () => Promise<void>; // Added fetchPosts property
}

const BlogManagement = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [searchTerm, setSearchTerm] = useState('');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    category: '',
    tags: '',
    readTime: '',
    imageUrl: '',
    content: ''
  });

  const {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    fetchPosts // Ensure fetchPosts is defined
  } = useBlogPosts();

  useEffect(() => {
    fetchPosts(); // Fetch posts on component mount
  }, [fetchPosts]);

  const fetchResources = async () => {
    try {
      const response = await fetch('http://localhost:1234/src/components/admin/dashboard/api/fetch-resources.php', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success') {
          console.log('Resources:', result.data);
          // Handle the fetched resources data as needed
        } else {
          console.error(result.message);
        }
      } else {
        console.error('Failed to fetch resources.');
      }
    } catch (error) {
      console.error('Error fetching resources:', error);
    }
  };

  useEffect(() => {
    fetchResources(); // Fetch resources on component mount
  }, []);

  const filterPosts = (search: string, tab: string) => {
    return posts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    );
  };
  const filteredPosts = filterPosts(searchTerm, activeTab);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchTerm('');
  };

  const handleDelete = (post: BlogPost) => {
    setPostToDelete(post);
    setShowDeleteDialog(true);
  };

  const confirmDelete = async () => {
    if (!postToDelete) return;
    try {
      const response = await fetch('http://localhost:1234/src/components/admin/dashboard/api/delete-post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: postToDelete.id })
      });
      if (response.ok) {
        setShowDeleteDialog(false);
        toast({
          title: 'Post Deleted',
          description: `"${postToDelete.title}" has been deleted.`,
          variant: 'destructive'
        });
        fetchPosts(); // Fetch the latest posts after deletion
      } else {
        throw new Error('Failed to delete post');
      }
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to delete post',
        variant: 'destructive'
      });
    }
  };

  const handleCreateNewPost = () => {
    setShowCreateDialog(true);
  };

  const saveNewPost = async () => {
    const postData = {
      title: newPost.title || '?',
      excerpt: newPost.excerpt || '?',
      category: newPost.category || '?',
      tags: newPost.tags
        .split(',')
        .map((t) => t.trim())
        .join(', ') || '?',
      readTime: newPost.readTime || '?',
      imageUrl: newPost.imageUrl || '?',
      content: newPost.content || '?'
    };
    try {
      const response = await fetch('http://localhost:1234/src/components/admin/dashboard/api/add-post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
      });
      const result = await response.json();
      console.log('Response from server:', result); // Log the response for debugging
      if (response.ok) {
        if (result.status === 'success') {
          setShowCreateDialog(false);
          toast({
            title: 'Post Created',
            description: `A new post titled "${newPost.title}" has been created.`
          });
          setNewPost({
            title: '',
            excerpt: '',
            category: '',
            tags: '',
            readTime: '',
            imageUrl: '',
            content: ''
          });
          fetchPosts(); // Fetch the latest posts after creation
        } else {
          throw new Error(result.message);
        }
      } else {
        throw new Error('Failed to create post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      let errorMessage = 'Failed to create post';
      if (error.response) {
        errorMessage = `Server Error: ${error.response.data.message || error.response.statusText}`;
      } else if (error.request) {
        errorMessage = 'Network Error: No response received from the server';
      } else if (error.message.includes('database')) {
        errorMessage = 'Database Error: Failed to save post to the database';
      } else {
        errorMessage = `Error: ${error.message}`;
      }
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive'
      });
    }
  };

  const handlePostFormChange = (field: string, value: string) => {
    setNewPost({ ...newPost, [field]: value });
  };

  const viewPost = (post: BlogPost) => {
    toast({
      title: 'View Post',
      description: `Viewing "${post.title}" in new tab.`
    });
  };

  const testDatabaseConnection = async () => {
    try {
      const response = await fetch('http://localhost:1234/src/components/admin/dashboard/api/test-database.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ testData: 'This is a test' }),
      });
      if (response.ok) {
        const result = await response.json();
        if (result.status === 'success') {
          alert('Test data inserted successfully!');
        } else {
          alert(result.message);
        }
      } else {
        alert('Failed to insert test data.');
      }
    } catch (error) {
      console.error('Error inserting test data:', error);
      alert('An error occurred while inserting test data.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <Button onClick={handleCreateNewPost} className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Create Post
        </Button>
        <Button onClick={testDatabaseConnection} className="flex items-center gap-2">
          Test Database Connection
        </Button>
      </div>

      {/* Tabs: posts/drafts/scheduled/published */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-off-white shadow-neumorph-sm p-1 rounded-lg inline-flex">
          <TabsTrigger value="posts">All Posts</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
        </TabsList>

        {activeTab !== 'BlogPosts' && (
          <BlogFilters
            activeTab={activeTab}
            onTabChange={handleTabChange}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        )}

        <TabsContent value="posts" className="space-y-4 mt-4">
          <BlogPostList
            posts={filteredPosts}
            viewPost={viewPost}
            handleDelete={handleDelete}
            handleEdit={() => {}} // Add handleEdit
          />
        </TabsContent>

        <TabsContent value="drafts" className="mt-4">
          <BlogPostList
            posts={filteredPosts}
            viewPost={viewPost}
            handleDelete={handleDelete}
            handleEdit={() => {}} // Add handleEdit
          />
        </TabsContent>

        <TabsContent value="scheduled" className="mt-4">
          <BlogPostList
            posts={filteredPosts}
            viewPost={viewPost}
            handleDelete={handleDelete}
            handleEdit={() => {}} // Add handleEdit
          />
        </TabsContent>

        <TabsContent value="published" className="mt-4">
          <BlogPostList
            posts={filteredPosts}
            viewPost={viewPost}
            handleDelete={handleDelete}
            handleEdit={() => {}} // Add handleEdit
          />
        </TabsContent>
      </Tabs>

      {/* Dialogs */}

      {/* Delete Post */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DeletePostDialog
          post={postToDelete}
          onCancel={() => setShowDeleteDialog(false)}
          onConfirm={confirmDelete}
        />
      </Dialog>

      {/* Create Post */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent>
          <h3 className="text-xl font-bold mb-4">Create New Post</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              value={newPost.title}
              onChange={(e) => handlePostFormChange('title', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Excerpt"
              value={newPost.excerpt}
              onChange={(e) => handlePostFormChange('excerpt', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Category"
              value={newPost.category}
              onChange={(e) => handlePostFormChange('category', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Tags (comma separated)"
              value={newPost.tags}
              onChange={(e) => handlePostFormChange('tags', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Read Time"
              value={newPost.readTime}
              onChange={(e) => handlePostFormChange('readTime', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={newPost.imageUrl}
              onChange={(e) => handlePostFormChange('imageUrl', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Content"
              value={newPost.content}
              onChange={(e) => handlePostFormChange('content', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setShowCreateDialog(false)}>
              Cancel
            </Button>
            <Button onClick={saveNewPost}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogManagement;