
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent } from "@/components/ui/tabs";
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
  const [editingPost, setEditingPost] = useState<any>(null);
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    author: '',
    category: '',
    tags: '',
    status: 'Draft'
  });
  
  const { filterPosts, createPost, updatePost, deletePost } = useBlogPosts();
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setSearchTerm('');
  };
  
  const filteredPosts = filterPosts(searchTerm, activeTab);

  const handleDelete = (post: BlogPost) => {
    setPostToDelete(post);
    setShowDeleteDialog(true);
  };

  const confirmDelete = () => {
    if (postToDelete) {
      deletePost(postToDelete.id);
      setShowDeleteDialog(false);
      toast({
        title: "Post Deleted",
        description: `"${postToDelete.title}" has been deleted.`,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost({
      ...post,
      tags: post.tags.join(', ')
    });
    setShowEditDialog(true);
  };

  const saveEdit = () => {
    const updatedPost = {
      ...editingPost,
      tags: editingPost.tags.split(',').map((tag: string) => tag.trim())
    };
    
    updatePost(updatedPost);
    setShowEditDialog(false);
    toast({
      title: "Post Updated",
      description: `"${editingPost.title}" has been updated.`
    });
  };

  const handleCreateNew = () => {
    setShowCreateDialog(true);
  };

  const saveNewPost = () => {
    const post = createPost(newPost);
    
    setShowCreateDialog(false);
    setNewPost({
      title: '',
      excerpt: '',
      author: '',
      category: '',
      tags: '',
      status: 'Draft'
    });
    
    toast({
      title: "Post Created",
      description: `"${post.title}" has been created.`
    });
  };

  const viewPost = (post: BlogPost) => {
    toast({
      title: "View Post",
      description: `Viewing "${post.title}" in new tab.`
    });
    // In a real application, this would navigate to the post view
  };

  const handleFormChange = (field: string, value: string) => {
    if (showEditDialog) {
      setEditingPost({ ...editingPost, [field]: value });
    } else {
      setNewPost({ ...newPost, [field]: value });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">Blog Management</h2>
        
        <div className="flex gap-2">
          <Button variant="neumorphic" className="flex items-center gap-2" onClick={handleCreateNew}>
            <Plus size={16} />
            New Post
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-6">
        <BlogFilters
          activeTab={activeTab}
          onTabChange={handleTabChange}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        
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
      </Tabs>
      
      {/* Delete Confirmation Dialog */}
      <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <DeletePostDialog
          post={postToDelete}
          onCancel={() => setShowDeleteDialog(false)}
          onConfirm={confirmDelete}
        />
      </Dialog>
      
      {/* Edit Post Dialog */}
      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent className="max-w-2xl">
          <div className="text-xl font-semibold mb-2">Edit Post</div>
          {editingPost && (
            <BlogPostForm
              formData={editingPost}
              onChange={handleFormChange}
              onSave={saveEdit}
              onCancel={() => setShowEditDialog(false)}
            />
          )}
        </DialogContent>
      </Dialog>
      
      {/* Create New Post Dialog */}
      <Dialog open={showCreateDialog} onOpenChange={setShowCreateDialog}>
        <DialogContent className="max-w-2xl">
          <div className="text-xl font-semibold mb-2">Create New Post</div>
          <BlogPostForm
            formData={newPost}
            onChange={handleFormChange}
            onSave={saveNewPost}
            onCancel={() => setShowCreateDialog(false)}
            isNew={true}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BlogManagement;
