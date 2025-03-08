
import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter } from 'lucide-react';

interface BlogFiltersProps {
  activeTab: string;
  onTabChange: (value: string) => void;
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

const BlogFilters = ({ activeTab, onTabChange, searchTerm, onSearchChange }: BlogFiltersProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-off-white shadow-neumorph-sm p-1 rounded-lg inline-flex">
        <TabsList className="bg-transparent">
          <TabsTrigger 
            value="posts" 
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            All Posts
          </TabsTrigger>
          <TabsTrigger 
            value="drafts"
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Drafts
          </TabsTrigger>
          <TabsTrigger 
            value="scheduled"
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Scheduled
          </TabsTrigger>
          <TabsTrigger 
            value="published"
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Published
          </TabsTrigger>
        </TabsList>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray" size={16} />
          <Input
            placeholder="Search posts, authors, or categories..."
            className="pl-10 bg-off-white shadow-neumorph-inset"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2 bg-off-white shadow-neumorph-sm">
          <Filter size={16} />
          Filters
        </Button>
      </div>
    </div>
  );
};

export default BlogFilters;
