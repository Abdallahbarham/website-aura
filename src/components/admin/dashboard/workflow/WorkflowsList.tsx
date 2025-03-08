
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight, Edit, Trash, Plus } from 'lucide-react';

interface Workflow {
  id: number;
  title: string;
  steps: string[];
}

interface WorkflowsListProps {
  workflows: Workflow[];
  onCreateWorkflow: () => void;
}

const WorkflowsList = ({ workflows, onCreateWorkflow }: WorkflowsListProps) => {
  return (
    <Card className="p-6" raised intensity="light">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <CheckCircle size={20} className="mr-2" />
        Approval Workflows
      </h3>
      
      <div className="space-y-4">
        {workflows.map(workflow => (
          <div key={workflow.id} className="p-4 bg-off-white shadow-neumorph-sm rounded-lg group hover:shadow-neumorph-md transition-all duration-300">
            <h4 className="font-medium mb-2 flex justify-between">
              <span>{workflow.title}</span>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0 mr-1">
                  <Edit size={14} />
                </Button>
                <Button variant="ghost" size="sm" className="h-7 w-7 p-0">
                  <Trash size={14} />
                </Button>
              </div>
            </h4>
            <div className="flex flex-wrap items-center">
              {workflow.steps.map((step, index) => (
                <React.Fragment key={index}>
                  <span className="bg-champagne/20 px-2 py-1 text-xs rounded">
                    {step}
                  </span>
                  {index < workflow.steps.length - 1 && (
                    <ChevronRight size={14} className="mx-1 text-stone-gray" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="neumorphic" className="w-full mt-4 flex items-center justify-center gap-2" onClick={onCreateWorkflow}>
        <Plus size={16} />
        Create New Workflow
      </Button>
    </Card>
  );
};

export default WorkflowsList;
