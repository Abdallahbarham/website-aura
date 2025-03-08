
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { DialogFooter } from "@/components/ui/dialog";

interface PostFormData {
  id?: number;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string;
  status: string;
  date?: string;
}

interface BlogPostFormProps {
  formData: PostFormData;
  onChange: (field: string, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  isNew?: boolean;
}

const BlogPostForm = ({ formData, onChange, onSave, onCancel, isNew = false }: BlogPostFormProps) => {
  return (
    <div className="grid gap-4 py-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="title" className="text-right">Title</Label>
        <Input 
          id="title" 
          value={formData.title}
          onChange={(e) => onChange('title', e.target.value)}
          className="col-span-3"
        />
      </div>
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
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="author" className="text-right">Author</Label>
        <Input 
          id="author" 
          value={formData.author}
          onChange={(e) => onChange('author', e.target.value)}
          className="col-span-3"
        />
      </div>
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="category" className="text-right">Category</Label>
        <Input 
          id="category" 
          value={formData.category}
          onChange={(e) => onChange('category', e.target.value)}
          className="col-span-3"
        />
      </div>
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
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="status" className="text-right">Status</Label>
        <select 
          id="status" 
          className="col-span-3 p-2 bg-off-white shadow-neumorph-inset rounded-md"
          value={formData.status}
          onChange={(e) => onChange('status', e.target.value)}
        >
          <option value="Draft">Draft</option>
          <option value="Scheduled">Scheduled</option>
          <option value="Published">Published</option>
        </select>
      </div>
      <DialogFooter>
        <Button onClick={onCancel} variant="outline">Cancel</Button>
        <Button onClick={onSave} variant="neumorphic">
          {isNew ? 'Create Post' : 'Save Changes'}
        </Button>
      </DialogFooter>
    </div>
  );
};

export default BlogPostForm;
