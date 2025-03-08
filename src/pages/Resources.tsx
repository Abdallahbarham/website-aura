
import { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Navbar from '../components/ui/navbar';
import ResourceHero from '../components/resources/ResourceHero';
import ResourceFilters from '../components/resources/ResourceFilters';
import ResourceList from '../components/resources/ResourceList';
import Pagination from '../components/resources/Pagination';
import Newsletter from '../components/resources/Newsletter';
import { resources, categories } from '../components/resources/resourcesData';

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <ResourceHero 
        title="Your Hub for Resources and Practical Tools"
        description="FAEI offers a diverse range of resources covering various areas of business expertise and research insights."
        imageUrl="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
      />
      
      <section className="py-12 bg-off-white">
        <div className="container-custom">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-6">Knowledge Hub</h2>
            
            <Tabs defaultValue="All" className="w-full">
              <ResourceFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                viewMode={viewMode}
                setViewMode={setViewMode}
              />
              
              <TabsContent value={selectedCategory} className="mt-0">
                <ResourceList 
                  resources={filteredResources} 
                  viewMode={viewMode} 
                />
              </TabsContent>
            </Tabs>
          </div>
          
          <Pagination />
        </div>
      </section>
      
      <Newsletter />
    </div>
  );
};

export default Resources;
