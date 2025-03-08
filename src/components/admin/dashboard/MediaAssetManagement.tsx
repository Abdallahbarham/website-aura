
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload, FolderOpen, Image, FileText, Video, File, Search, Plus, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';

const MediaAssetManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for media assets
  const mediaAssets = [
    { id: 1, name: 'hero-banner.jpg', type: 'image', size: '1.2 MB', lastModified: '2023-09-15', tags: ['banner', 'home'] },
    { id: 2, name: 'company-profile.pdf', type: 'document', size: '3.5 MB', lastModified: '2023-08-28', tags: ['company', 'profile'] },
    { id: 3, name: 'product-demo.mp4', type: 'video', size: '8.7 MB', lastModified: '2023-09-02', tags: ['product', 'demo'] },
    { id: 4, name: 'team-photo.jpg', type: 'image', size: '2.1 MB', lastModified: '2023-07-10', tags: ['team', 'about'] },
    { id: 5, name: 'whitepaper.docx', type: 'document', size: '1.8 MB', lastModified: '2023-09-20', tags: ['research', 'whitepaper'] },
    { id: 6, name: 'case-study.pdf', type: 'document', size: '2.3 MB', lastModified: '2023-08-05', tags: ['case study', 'client'] },
    { id: 7, name: 'logo-dark.png', type: 'image', size: '0.5 MB', lastModified: '2023-06-18', tags: ['logo', 'branding'] },
    { id: 8, name: 'annual-report.pdf', type: 'document', size: '4.2 MB', lastModified: '2023-09-22', tags: ['annual', 'report'] },
  ];

  // Filter assets based on active tab and search query
  const filteredAssets = mediaAssets.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         asset.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === 'all') return matchesSearch;
    return asset.type === activeTab && matchesSearch;
  });

  const getIconForAsset = (type) => {
    switch (type) {
      case 'image': return <Image size={18} className="text-blue-500" />;
      case 'document': return <FileText size={18} className="text-green-500" />;
      case 'video': return <Video size={18} className="text-purple-500" />;
      default: return <File size={18} className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">Media & Asset Management</h2>
        
        <div className="flex gap-2">
          <Button variant="neumorphic" className="flex items-center gap-2">
            <Upload size={16} />
            Upload Files
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Plus size={16} />
            New Folder
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-6">
        <Card className="p-4" raised intensity="light">
          <h3 className="font-medium mb-4">Folders</h3>
          
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start text-left">
              <FolderOpen size={16} className="mr-2 text-blue-500" />
              All Files
            </Button>
            <Button variant="ghost" className="w-full justify-start text-left">
              <FolderOpen size={16} className="mr-2 text-green-500" />
              Blog Images
            </Button>
            <Button variant="ghost" className="w-full justify-start text-left">
              <FolderOpen size={16} className="mr-2 text-yellow-500" />
              Product Assets
            </Button>
            <Button variant="ghost" className="w-full justify-start text-left">
              <FolderOpen size={16} className="mr-2 text-purple-500" />
              Marketing Materials
            </Button>
            <Button variant="ghost" className="w-full justify-start text-left">
              <FolderOpen size={16} className="mr-2 text-red-500" />
              Templates
            </Button>
          </nav>
          
          <div className="border-t my-4"></div>
          
          <h3 className="font-medium mb-2">File Types</h3>
          <div className="space-y-2">
            <Button 
              variant={activeTab === 'all' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('all')}
            >
              All Files
            </Button>
            <Button 
              variant={activeTab === 'image' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('image')}
            >
              Images
            </Button>
            <Button 
              variant={activeTab === 'document' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('document')}
            >
              Documents
            </Button>
            <Button 
              variant={activeTab === 'video' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('video')}
            >
              Videos
            </Button>
          </div>
        </Card>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                placeholder="Search files and folders..." 
                className="pl-10 bg-off-white shadow-neumorph-inset"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="outline" className="hidden md:flex items-center gap-1">
              <Filter size={16} />
              <span>Filter</span>
            </Button>
          </div>
          
          <Card className="p-6" raised intensity="light">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left font-medium py-2 px-4">Name</th>
                    <th className="text-left font-medium py-2 px-4">Type</th>
                    <th className="text-left font-medium py-2 px-4">Size</th>
                    <th className="text-left font-medium py-2 px-4">Last Modified</th>
                    <th className="text-left font-medium py-2 px-4">Tags</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAssets.map(asset => (
                    <tr key={asset.id} className="border-b border-gray-100 hover:bg-champagne/10">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          {getIconForAsset(asset.type)}
                          <span className="ml-2">{asset.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 capitalize">{asset.type}</td>
                      <td className="py-3 px-4">{asset.size}</td>
                      <td className="py-3 px-4">{asset.lastModified}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {asset.tags.map((tag, index) => (
                            <span key={index} className="text-xs px-2 py-1 bg-champagne/20 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MediaAssetManagement;
