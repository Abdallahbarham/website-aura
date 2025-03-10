import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Plus } from 'lucide-react';

import BlogFilters from './blog/BlogFilters';
import BlogPostList from './blog/BlogPostList';
import BlogPostForm from './blog/BlogPostForm';
import DeletePostDialog from './blog/DeletePostDialog';
import { useBlogPosts, BlogPost } from './blog/useBlogPosts';

const BlogManagement = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [searchTerm, setSearchTerm] = useState('');

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
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

  const [showBlogPostDialog, setShowBlogPostDialog] = useState(false);
  const [showBlogPostEditDialog, setShowBlogPostEditDialog] = useState(false);
  const [editingBlogPost, setEditingBlogPost] = useState<BlogPost | null>(null);
  const [newBlogPost, setNewBlogPost] = useState({
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
    createPost,
    updatePost,
    deletePost
  } = useBlogPosts();

  const BlogPosts = posts;
  const createBlogPost = createPost;
  const updateBlogPost = updatePost;
  const deleteBlogPost = deletePost;

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

  // ====== POSTS ======
  const handleDelete = (post: BlogPost) => {
    setPostToDelete(post);
    setShowDeleteDialog(true);
  };
  const confirmDelete = () => {
    if (!postToDelete) return;
    deletePost(postToDelete.id);
    setShowDeleteDialog(false);
    toast({
      title: 'Post Deleted',
      description: `"${postToDelete.title}" has been deleted.`,
      variant: 'destructive'
    });
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost({
      ...post,
      // if it's already a string, do nothing.
      // if it was an array, join it into a string:
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : post.tags
    });
    setShowEditDialog(true);
  };

  const saveEdit = () => {
    if (!editingPost) return;

    // Convert comma-separated to single string again:
    const updated = {
      ...editingPost,
      tags: editingPost.tags
        .split(',')
        .map((tag) => tag.trim())
        .join(', ')
    };

    // LINE 134 fix: pass editingPost.id
    updatePost(editingPost.id, updated);
    setShowEditDialog(false);
    toast({
      title: 'Post Updated',
      description: `"${editingPost.title}" has been updated.`
    });
  };

  const handleCreateNewPost = () => {
    setShowCreateDialog(true);
  };

  const saveNewPost = () => {
    const postData = {
      ...newPost,
      // ensure final is a single string:
      tags: newPost.tags
        .split(',')
        .map((t) => t.trim())
        .join(', ')
    };
    createPost(postData as any);
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
  };

  const handlePostFormChange = (field: string, value: string) => {
    if (showEditDialog && editingPost) {
      setEditingPost({ ...editingPost, [field]: value });
    } else {
      setNewPost({ ...newPost, [field]: value });
    }
  };

  const viewPost = (post: BlogPost) => {
    toast({
      title: 'View Post',
      description: `Viewing "${post.title}" in new tab.`
    });
  };

  // ====== BLOGPOSTS (TAB) ======
  const openBlogPostDialog = () => {
    setShowBlogPostDialog(true);
  };

  const saveNewBlogPost = async () => {
    try {
      const blogData = {
        ...newBlogPost,
        tags: newBlogPost.tags
          .split(',')
          .map((t) => t.trim())
          .join(', ')
      };
      await createBlogPost(blogData as any);
      setShowBlogPostDialog(false);
      toast({
        title: 'BlogPost Created',
        description: `"${newBlogPost.title}" has been added.`
      });
      setNewBlogPost({
        title: '',
        excerpt: '',
        category: '',
        tags: '',
        readTime: '',
        imageUrl: '',
        content: ''
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: 'Failed to create BlogPost',
        variant: 'destructive'
      });
    }
  };

  const handleBlogPostFormChange = (field: string, value: string) => {
    if (showBlogPostEditDialog && editingBlogPost) {
      setEditingBlogPost({ ...editingBlogPost, [field]: value });
    } else {
      setNewBlogPost({ ...newBlogPost, [field]: value });
    }
  };

  const handleBlogPostEdit = (blogPost: BlogPost) => {
    setEditingBlogPost({
      ...blogPost,
      tags: Array.isArray(blogPost.tags) ? blogPost.tags.join(', ') : blogPost.tags
    });
    setShowBlogPostEditDialog(true);
  };

  const confirmBlogPostEdit = async () => {
    if (!editingBlogPost) return;
    try {
      const updated = {
        ...editingBlogPost,
        tags: editingBlogPost.tags
          .split(',')
          .map((t) => t.trim())
          .join(', ')
      };

      // LINE 248 fix: pass editingBlogPost.id
      await updateBlogPost(editingBlogPost.id, updated);

      setShowBlogPostEditDialog(false);
      toast({
        title: 'BlogPost Updated',
        description: `"${editingBlogPost.title}" has been updated.`
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: 'Failed to update BlogPost',
        variant: 'destructive'
      });
    }
  };

  const handleBlogPostDelete = async (blogPost: BlogPost) => {
    try {
      await deleteBlogPost(blogPost.id);
      toast({
        title: 'BlogPost Deleted',
        description: `"${blogPost.title}" has been removed.`,
        variant: 'destructive'
      });
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: 'Failed to delete BlogPost',
        variant: 'destructive'
      });
    }
  };

  const viewBlogPost = (blogPost: BlogPost) => {
    toast({
      title: 'View BlogPost',
      description: `Viewing "${blogPost.title}" in new tab.`
    });
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        <div className="flex gap-2">
          <Button
            variant="neumorphic"
            className="flex items-center gap-2"
            onClick={handleCreateNewPost}
          >
            <Plus size={16} />
            New Post
          </Button>
          <Button
            variant="neumorphic"
            className="flex items-center gap-2"
            onClick={openBlogPostDialog}
          >
            <Plus size={16} />
            New BlogPost
          </Button>
        </div>
      </div>

      {/* Tabs: posts/drafts/scheduled/published/BlogPosts */}
      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <TabsList className="bg-off-white shadow-neumorph-sm p-1 rounded-lg inline-flex">
          <TabsTrigger value="posts">All Posts</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
          <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="BlogPosts">BlogPosts</TabsTrigger>
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
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </TabsContent>

        <TabsContent value="drafts" className="mt-4">
          <BlogPostList
            posts={filteredPosts}
            viewPost={viewPost}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </TabsContent>

        <TabsContent value="scheduled" className="mt-4">
          <BlogPostList
            posts={filteredPosts}
            viewPost={viewPost}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </TabsContent>

        <TabsContent value="published" className="mt-4">
          <BlogPostList
            posts={filteredPosts}
            viewPost={viewPost}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </TabsContent>

        <TabsContent value="BlogPosts" className="mt-4">
          <BlogPostList
            posts={BlogPosts}
            viewPost={viewBlogPost}
            handleEdit={handleBlogPostEdit}
            handleDelete={handleBlogPostDelete}
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

      {/* Edit Post */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-2xl">
          <div className="text-xl font-semibold mb-2">Edit Post</div>
          {editingPost && (
            <BlogPostForm
              formData={editingPost}
              onChange={handlePostFormChange}
              onSave={saveEdit}
              onCancel={() => setShowEditDialog(false)}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Create New Post */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="max-w-2xl">
          <div className="text-xl font-semibold mb-2">Create New Post</div>
          <BlogPostForm
            formData={newPost}
            onChange={handlePostFormChange}
            onSave={saveNewPost}
            onCancel={() => setShowCreateDialog(false)}
            isNew={true}
          />
        </DialogContent>
      </Dialog>

      {/* Create New BlogPost */}
      <Dialog open={showBlogPostDialog} onOpenChange={setShowBlogPostDialog}>
        <DialogContent className="max-w-2xl">
          <div className="text-xl font-semibold mb-2">Create New BlogPost</div>
          <BlogPostForm
            formData={newBlogPost}
            onChange={handleBlogPostFormChange}
            onSave={saveNewBlogPost}
            onCancel={() => setShowBlogPostDialog(false)}
            isNew={true}
          />
        </DialogContent>
      </Dialog>

      {/* Edit BlogPost */}
      <Dialog open={showBlogPostEditDialog} onOpenChange={setShowBlogPostEditDialog}>
        <DialogContent className="max-w-2xl">
          <div className="text-xl font-semibold mb-2">Edit BlogPost</div>
          {editingBlogPost && (
            <BlogPostForm
              formData={editingBlogPost}
              onChange={handleBlogPostFormChange}
              onSave={confirmBlogPostEdit}
              onCancel={() => setShowBlogPostEditDialog(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogManagement;
