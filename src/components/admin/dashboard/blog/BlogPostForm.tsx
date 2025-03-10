import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { DialogFooter } from "@/components/ui/dialog";

// Form data matches the fields from your BlogPost interface in useBlogPosts.tsx
interface PostFormData {
  id?: number
  title: string
  excerpt: string
  category: string
  tags: string        // e.g. "AI, Finance"
  readTime: string    // e.g. "5"
  imageUrl: string    // e.g. "https://..."
  content: string     // HTML content
}

interface BlogPostFormProps {
  formData: PostFormData;
  onChange: (field: keyof PostFormData, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  isNew?: boolean;
}

const BlogPostForm = ({
  formData,
  onChange,
  onSave,
  onCancel,
  isNew = false
}: BlogPostFormProps) => {
  return (
    <div className="grid gap-4 py-4">
      {/* Title */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="col-span-3"
        />
      </div>

      {/* Excerpt */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="excerpt" className="text-right">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => onChange('excerpt', e.target.value)}
          className="col-span-3"
          rows={3}
        />
      </div>

      {/* Category */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="category" className="text-right">Category</Label>
        <Input
          id="category"
          value={formData.category}
          onChange={(e) => onChange('category', e.target.value)}
          className="col-span-3"
        />
      </div>

      {/* Tags */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="tags" className="text-right">Tags</Label>
        <Input
          id="tags"
          value={formData.tags}
          onChange={(e) => onChange('tags', e.target.value)}
          className="col-span-3"
          placeholder="Separate tags with commas"
        />
      </div>

      {/* Read Time */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="readTime" className="text-right">Read Time</Label>
        <Input
          id="readTime"
          value={formData.readTime}
          onChange={(e) => onChange('readTime', e.target.value)}
          className="col-span-3"
          placeholder="e.g. 5"
        />
      </div>

      {/* Image URL */}
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="imageUrl" className="text-right">Image URL</Label>
        <Input
          id="imageUrl"
          value={formData.imageUrl}
          onChange={(e) => onChange('imageUrl', e.target.value)}
          className="col-span-3"
          placeholder="https://..."
        />
      </div>

      {/* Content (HTML) */}
      <div className="grid grid-cols-4 items-start gap-4">
        <Label htmlFor="content" className="text-right mt-2">Content (HTML)</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => onChange('content', e.target.value)}
          className="col-span-3"
          rows={6}
          placeholder="<h2>Intro</h2><p>...</p>"
        />
      </div>

      {/* Dialog Footer */}
      <DialogFooter>
        <Button onClick={onCancel} variant="outline">
          Cancel
        </Button>
        <Button onClick={onSave} variant="neumorphic">
          {isNew ? 'Create Post' : 'Save Changes'}
        </Button>
      </DialogFooter>
    </div>
  );
};

export default BlogPostForm;
