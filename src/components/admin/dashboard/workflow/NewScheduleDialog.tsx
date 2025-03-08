
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  DialogContent, 
  DialogHeader, 
  DialogTitle
} from "@/components/ui/dialog";

interface NewScheduleData {
  title: string;
  author: string;
  date: string;
  time: string;
  status: string;
}

interface NewScheduleDialogProps {
  data: NewScheduleData;
  onChange: (field: string, value: string) => void;
  onSave: () => void;
}

const NewScheduleDialog = ({ data, onChange, onSave }: NewScheduleDialogProps) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Create New Schedule</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="title" className="text-right">Title</label>
          <input 
            id="title" 
            className="col-span-3 p-2 bg-off-white shadow-neumorph-inset rounded-md"
            value={data.title}
            onChange={(e) => onChange('title', e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="author" className="text-right">Author</label>
          <input 
            id="author" 
            className="col-span-3 p-2 bg-off-white shadow-neumorph-inset rounded-md"
            value={data.author}
            onChange={(e) => onChange('author', e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="date" className="text-right">Date</label>
          <input 
            id="date" 
            type="date"
            className="col-span-3 p-2 bg-off-white shadow-neumorph-inset rounded-md"
            value={data.date}
            onChange={(e) => onChange('date', e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="time" className="text-right">Time</label>
          <input 
            id="time" 
            type="time"
            className="col-span-3 p-2 bg-off-white shadow-neumorph-inset rounded-md"
            value={data.time}
            onChange={(e) => onChange('time', e.target.value)}
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="status" className="text-right">Status</label>
          <select 
            id="status" 
            className="col-span-3 p-2 bg-off-white shadow-neumorph-inset rounded-md"
            value={data.status}
            onChange={(e) => onChange('status', e.target.value)}
          >
            <option value="Draft">Draft</option>
            <option value="Review">Review</option>
            <option value="Approved">Approved</option>
            <option value="Published">Published</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <Button variant="neumorphic" onClick={onSave}>
          Schedule Post
        </Button>
      </div>
    </DialogContent>
  );
};

export default NewScheduleDialog;
