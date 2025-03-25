import React from 'react';
import { FileText } from 'lucide-react';
import ResourceCard from '../ui/resource-card';

interface Resource {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

interface ResourceListProps {
  resources: Resource[];
  viewMode: string;
}

const ResourceList = ({ resources, viewMode }: ResourceListProps) => {
  if (resources.length === 0) {
    return (
      <div className="col-span-full text-center py-12">
        <FileText className="h-12 w-12 mx-auto text-gray-300 mb-4" />
        <h3 className="text-xl font-semibold mb-2">No resources found</h3>
        <p className="text-stone-gray">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}`}>
      {resources.map(resource => (
        <ResourceCard key={resource.id} {...resource} />
      ))}
    </div>
  );
};

export default ResourceList;
