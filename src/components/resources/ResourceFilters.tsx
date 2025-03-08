
import React from 'react';
import { Grid3x3, BookOpen } from 'lucide-react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResourceFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  viewMode: string;
  setViewMode: (mode: string) => void;
}

const ResourceFilters = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode
}: ResourceFiltersProps) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        {/* Search Bar */}
        <div className="w-full md:w-1/3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="w-full p-3 pr-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-light-green" 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* View Toggle */}
        <div className="flex justify-end">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            <button 
              className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-light-green text-white' : 'text-gray-500 hover:text-gray-700'}`} 
              onClick={() => setViewMode("grid")}
            >
              <Grid3x3 size={20} />
            </button>
            <button 
              className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-light-green text-white' : 'text-gray-500 hover:text-gray-700'}`} 
              onClick={() => setViewMode("list")}
            >
              <BookOpen size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Category Tabs */}
      <TabsList className="flex flex-wrap bg-transparent h-auto mb-6 gap-2">
        {categories.map(category => (
          <TabsTrigger 
            key={category} 
            value={category} 
            onClick={() => setSelectedCategory(category)} 
            className="px-4 py-2 rounded-full data-[state=active]:bg-light-green bg-white text-[D0bb9b] text-[#737273]"
          >
            {category}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default ResourceFilters;
