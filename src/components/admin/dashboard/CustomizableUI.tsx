
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Layout, Moon, Sun, PanelLeft, PanelRight, Grid, List, AlignLeft, AlignRight, AlignCenter, Eye } from 'lucide-react';

const CustomizableUI = () => {
  const [themeMode, setThemeMode] = useState('light');
  const [sidebarPosition, setSidebarPosition] = useState('left');
  const [dashboardLayout, setDashboardLayout] = useState('grid');
  const [contentAlignment, setContentAlignment] = useState('left');
  
  // Mock saved layouts
  const savedLayouts = [
    { id: 1, name: 'Default Layout', description: 'Standard dashboard layout with all widgets' },
    { id: 2, name: 'Minimal View', description: 'Simplified view with only essential widgets' },
    { id: 3, name: 'Analytics Focus', description: 'Emphasis on analytics and reporting widgets' },
  ];
  
  // Mock widgets for customization
  const availableWidgets = [
    { id: 'w1', name: 'Quick Stats', enabled: true },
    { id: 'w2', name: 'Recent Activity', enabled: true },
    { id: 'w3', name: 'Traffic Overview', enabled: true },
    { id: 'w4', name: 'Content Calendar', enabled: false },
    { id: 'w5', name: 'Pending Approvals', enabled: true },
    { id: 'w6', name: 'Recent Comments', enabled: false },
    { id: 'w7', name: 'System Notifications', enabled: true },
    { id: 'w8', name: 'Quick Actions', enabled: true },
  ];
  
  const [widgets, setWidgets] = useState(availableWidgets);
  
  const toggleWidget = (id) => {
    setWidgets(widgets.map(widget => 
      widget.id === id ? { ...widget, enabled: !widget.enabled } : widget
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">Customizable UI</h2>
        
        <div className="flex gap-2">
          <Button variant="neumorphic" className="flex items-center gap-2">
            <Eye size={16} />
            Preview Changes
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6" raised intensity="light">
          <h3 className="text-lg font-semibold mb-4">Theme & Layout</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Theme Mode</h4>
              <div className="flex gap-3">
                <Button 
                  variant={themeMode === 'light' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => setThemeMode('light')}
                >
                  <Sun size={16} />
                  Light
                </Button>
                <Button 
                  variant={themeMode === 'dark' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => setThemeMode('dark')}
                >
                  <Moon size={16} />
                  Dark
                </Button>
                <Button 
                  variant={themeMode === 'system' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1"
                  onClick={() => setThemeMode('system')}
                >
                  System
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-3">Sidebar Position</h4>
              <div className="flex gap-3">
                <Button 
                  variant={sidebarPosition === 'left' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => setSidebarPosition('left')}
                >
                  <PanelLeft size={16} />
                  Left
                </Button>
                <Button 
                  variant={sidebarPosition === 'right' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => setSidebarPosition('right')}
                >
                  <PanelRight size={16} />
                  Right
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-3">Dashboard Layout</h4>
              <div className="flex gap-3">
                <Button 
                  variant={dashboardLayout === 'grid' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => setDashboardLayout('grid')}
                >
                  <Grid size={16} />
                  Grid
                </Button>
                <Button 
                  variant={dashboardLayout === 'list' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center gap-2"
                  onClick={() => setDashboardLayout('list')}
                >
                  <List size={16} />
                  List
                </Button>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-medium mb-3">Content Alignment</h4>
              <div className="flex gap-3">
                <Button 
                  variant={contentAlignment === 'left' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center"
                  onClick={() => setContentAlignment('left')}
                >
                  <AlignLeft size={16} />
                </Button>
                <Button 
                  variant={contentAlignment === 'center' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center"
                  onClick={() => setContentAlignment('center')}
                >
                  <AlignCenter size={16} />
                </Button>
                <Button 
                  variant={contentAlignment === 'right' ? 'neumorphicInset' : 'neumorphic'} 
                  className="flex-1 flex items-center justify-center"
                  onClick={() => setContentAlignment('right')}
                >
                  <AlignRight size={16} />
                </Button>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6" raised intensity="light">
          <h3 className="text-lg font-semibold mb-4">Saved Layouts</h3>
          
          <div className="space-y-4 mb-6">
            {savedLayouts.map(layout => (
              <div key={layout.id} className="p-4 bg-off-white shadow-neumorph-sm rounded-lg">
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">{layout.name}</h4>
                  <Button variant="outline" size="sm" className="text-xs h-7">Apply</Button>
                </div>
                <p className="text-sm text-stone-gray">{layout.description}</p>
              </div>
            ))}
          </div>
          
          <Button variant="neumorphic" className="w-full">Save Current Layout</Button>
        </Card>
      </div>
      
      <Card className="p-6" raised intensity="light">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Layout size={20} className="mr-2" />
          Dashboard Widgets
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {widgets.map(widget => (
            <div 
              key={widget.id} 
              className={`p-4 rounded-lg border ${widget.enabled ? 'border-green-500/30 bg-green-50/30' : 'border-gray-200 bg-gray-50/50'}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{widget.name}</span>
                <Button 
                  variant={widget.enabled ? 'neumorphicInset' : 'neumorphic'} 
                  size="sm" 
                  className="h-7"
                  onClick={() => toggleWidget(widget.id)}
                >
                  {widget.enabled ? 'Enabled' : 'Disabled'}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-end mt-6">
          <Button variant="neumorphic">Apply Widget Settings</Button>
        </div>
      </Card>
    </div>
  );
};

export default CustomizableUI;
