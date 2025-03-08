
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { toast } from '@/components/ui/use-toast';
import CalendarView from './workflow/CalendarView';
import ScheduledPostsList from './workflow/ScheduledPostsList';
import WorkflowsList from './workflow/WorkflowsList';
import NewScheduleDialog from './workflow/NewScheduleDialog';

const WorkflowScheduling = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isNewScheduleOpen, setIsNewScheduleOpen] = useState(false);
  const [newScheduleData, setNewScheduleData] = useState({
    title: '',
    author: '',
    date: '',
    time: '',
    status: 'Draft'
  });
  
  // Mock data for scheduled content
  const [scheduledPosts, setScheduledPosts] = useState([
    { id: 1, title: 'Future of Work with AI Integration', author: 'Jane Doe', status: 'Draft', date: '2023-10-22', time: '09:00 AM' },
    { id: 2, title: 'Ethical Considerations in AI Development', author: 'Emily Chen', status: 'Review', date: '2023-10-30', time: '10:30 AM' },
    { id: 3, title: 'AI Governance: A Global Perspective', author: 'John Smith', status: 'Approved', date: '2023-11-05', time: '02:00 PM' },
    { id: 4, title: 'Machine Learning Applications in Healthcare', author: 'David Wilson', status: 'Draft', date: '2023-11-12', time: '11:00 AM' },
  ]);
  
  // Mock data for approval workflows
  const [approvalWorkflows, setApprovalWorkflows] = useState([
    { id: 1, title: 'Standard Content', steps: ['Draft', 'Review', 'Approve', 'Schedule', 'Publish'] },
    { id: 2, title: 'Quick Posts', steps: ['Draft', 'Review', 'Publish'] },
    { id: 3, title: 'Research Articles', steps: ['Draft', 'Peer Review', 'Technical Review', 'Final Approval', 'Schedule', 'Publish'] },
  ]);
  
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleAddSchedule = () => {
    // Add new schedule logic
    const newSchedule = {
      id: scheduledPosts.length + 1,
      ...newScheduleData
    };
    
    setScheduledPosts([...scheduledPosts, newSchedule]);
    setNewScheduleData({
      title: '',
      author: '',
      date: '',
      time: '',
      status: 'Draft'
    });
    
    setIsNewScheduleOpen(false);
    toast({
      title: "Schedule Created",
      description: `"${newScheduleData.title}" has been scheduled.`,
    });
  };

  const handleDeletePost = (id) => {
    setScheduledPosts(scheduledPosts.filter(post => post.id !== id));
    toast({
      title: "Post Deleted",
      description: "The scheduled post has been removed.",
      variant: "destructive"
    });
  };

  const handleCreateWorkflow = () => {
    toast({
      title: "New Workflow",
      description: "Workflow creation dialog will open here.",
    });
  };

  const handleNewScheduleChange = (field, value) => {
    setNewScheduleData({...newScheduleData, [field]: value});
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">Workflow & Scheduling</h2>
        
        <div className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="neumorphic" className="flex items-center gap-2">
                <Plus size={16} />
                New Schedule
              </Button>
            </DialogTrigger>
            <NewScheduleDialog 
              data={newScheduleData}
              onChange={handleNewScheduleChange}
              onSave={handleAddSchedule}
            />
          </Dialog>
        </div>
      </div>
      
      <CalendarView 
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        scheduledPosts={scheduledPosts}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ScheduledPostsList 
          scheduledPosts={scheduledPosts}
          onDeletePost={handleDeletePost}
        />
        
        <WorkflowsList 
          workflows={approvalWorkflows}
          onCreateWorkflow={handleCreateWorkflow}
        />
      </div>
    </div>
  );
};

export default WorkflowScheduling;
