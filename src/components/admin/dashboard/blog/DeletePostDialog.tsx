
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { AlertTriangle } from 'lucide-react';

interface DeletePostDialogProps {
  post: {
    id: number;
    title: string;
  } | null;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeletePostDialog = ({ post, onCancel, onConfirm }: DeletePostDialogProps) => {
  if (!post) return null;
  
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <AlertTriangle className="text-red-500" size={18} />
          Confirm Deletion
        </DialogTitle>
        <DialogDescription>
          Are you sure you want to delete "{post.title}"? This action cannot be undone.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="flex gap-2 justify-end">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={onConfirm}>
          Delete Post
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default DeletePostDialog;
