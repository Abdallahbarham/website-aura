
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Edit, 
  Trash,
  FileText,
  Tag,
  Calendar,
  CheckCircle 
} from 'lucide-react';

interface BlogPostItemProps {
  post: {
    id: number;
    title: string;
    status: string;
    author: string;
    date: string;
    category: string;
    tags: string[];
    excerpt: string;
  };
  onView: (post: any) => void;
  onEdit: (post: any) => void;
  onDelete: (post: any) => void;
}

const BlogPostItem = ({ post, onView, onEdit, onDelete }: BlogPostItemProps) => {
  return (
    <Card key={post.id} className="p-4 group" raised intensity="light">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <span className={`text-xs px-2 py-1 rounded-full shadow-neumorph-sm 
              ${post.status === 'Published' ? 'bg-green-100 text-green-800' : 
                post.status === 'Draft' ? 'bg-amber-100 text-amber-800' : 
                'bg-blue-100 text-blue-800'}`}>
              {post.status}
            </span>
          </div>
          
          <p className="text-stone-gray text-sm mt-1">{post.excerpt}</p>
          
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs text-stone-gray flex items-center">
              <FileText size={12} className="mr-1" />
              Category: {post.category}
            </span>
            <span className="text-xs text-stone-gray flex items-center">
              <Tag size={12} className="mr-1" />
              Tags: {post.tags.join(', ')}
            </span>
            <span className="text-xs text-stone-gray flex items-center">
              <Calendar size={12} className="mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="text-xs text-stone-gray flex items-center">
              <CheckCircle size={12} className="mr-1" />
              By {post.author}
            </span>
          </div>
        </div>
        
        <div className="flex gap-2 self-end lg:self-center">
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md"
            onClick={() => onView(post)}
          >
            <Eye size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md"
            onClick={() => onEdit(post)}
          >
            <Edit size={16} />
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md text-red-500"
            onClick={() => onDelete(post)}
          >
            <Trash size={16} />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default BlogPostItem;
