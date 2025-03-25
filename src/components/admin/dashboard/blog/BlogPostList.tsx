import React from 'react';
import { BlogPost } from './useBlogPosts';
import { Card } from '@/components/ui/card';
import BlogPostItem from './BlogPostItem';

interface BlogPostListProps {
  posts: BlogPost[];
  viewPost: (post: BlogPost) => void;
  handleEdit: (post: BlogPost) => void;
  handleDelete: (post: BlogPost) => void;
}

const BlogPostList: React.FC<BlogPostListProps> = ({ posts, viewPost, handleEdit, handleDelete }) => {
  if (posts.length === 0) {
    return (
      <Card className="p-8 text-center" raised intensity="light">
        <p className="text-stone-gray">No posts found matching your search criteria.</p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {posts.map(post => (
        <BlogPostItem
          key={post.id}
          post={post}
          onView={viewPost}
          onEdit={handleEdit} // Ensure handleEdit is passed
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
