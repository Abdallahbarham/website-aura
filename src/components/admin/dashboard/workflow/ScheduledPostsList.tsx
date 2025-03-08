
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, MoreHorizontal, Eye, Edit, Trash } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ScheduledPost {
  id: number;
  title: string;
  author: string;
  status: string;
  date: string;
  time: string;
}

interface ScheduledPostsListProps {
  scheduledPosts: ScheduledPost[];
  onDeletePost: (id: number) => void;
}

const ScheduledPostsList = ({ scheduledPosts, onDeletePost }: ScheduledPostsListProps) => {
  return (
    <Card className="p-6" raised intensity="light">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <Clock size={20} className="mr-2" />
        Upcoming Scheduled Posts
      </h3>
      
      <div className="space-y-3">
        {scheduledPosts.map(post => (
          <div key={post.id} className="p-3 bg-off-white shadow-neumorph-sm rounded-lg group">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">{post.title}</h4>
              <div className="flex items-center">
                <span className={`text-xs px-2 py-1 rounded-full text-white mr-2 ${
                  post.status === 'Draft' ? 'bg-yellow-500' :
                  post.status === 'Review' ? 'bg-blue-500' :
                  'bg-green-500'
                }`}>
                  {post.status}
                </span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-40 p-2">
                    <div className="grid gap-1">
                      <Button variant="ghost" size="sm" className="justify-start">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="justify-start">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="justify-start text-red-500" onClick={() => onDeletePost(post.id)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex justify-between text-sm text-stone-gray">
              <span>{post.author}</span>
              <span className="flex items-center">
                <Calendar size={12} className="mr-1" />
                {post.date} @ {post.time}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="outline" className="w-full mt-4 bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
        View All Scheduled Posts
      </Button>
    </Card>
  );
};

export default ScheduledPostsList;
