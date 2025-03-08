
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
      {resources.map(resource => 
        viewMode === 'grid' ? (
          <ResourceCard key={resource.id} {...resource} />
        ) : (
          <div key={resource.id} className="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="w-32 h-32">
              <img src={resource.imageUrl} alt={resource.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex-grow">
              <div className="text-sm text-light-green font-medium mb-1">{resource.category}</div>
              <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
              <p className="text-stone-gray text-sm line-clamp-2">{resource.excerpt}</p>
              <div className="flex items-center mt-2 text-xs text-stone-gray">
                <span>{resource.date}</span>
                <span className="mx-2">•</span>
                <span>{resource.readTime} min read</span>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ResourceList;
