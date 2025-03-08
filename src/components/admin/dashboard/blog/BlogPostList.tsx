
import React from 'react';
import { Card } from '@/components/ui/card';
import BlogPostItem from './BlogPostItem';

interface BlogPostListProps {
  posts: any[];
  viewPost: (post: any) => void;
  handleEdit: (post: any) => void;
  handleDelete: (post: any) => void;
}

const BlogPostList = ({ posts, viewPost, handleEdit, handleDelete }: BlogPostListProps) => {
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
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default BlogPostList;
