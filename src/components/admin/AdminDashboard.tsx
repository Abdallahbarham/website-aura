import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  LayoutDashboard, 
  BookText, 
  Palette, 
  Users, 
  BarChart, 
  Calendar, 
  FolderOpen, 
  Settings, 
  Shield,
  LogOut,
  Menu,
  X
} from 'lucide-react';

import DashboardOverview from './dashboard/DashboardOverview';
import BlogManagement from './dashboard/BlogManagement';
import BrandingTheme from './dashboard/BrandingTheme';
import UserRoleManagement from './dashboard/UserRoleManagement';
import AnalyticsPerformance from './dashboard/AnalyticsPerformance';
import WorkflowScheduling from './dashboard/WorkflowScheduling';
import MediaAssetManagement from './dashboard/MediaAssetManagement';
import CustomizableUI from './dashboard/CustomizableUI';
import SecurityBackup from './dashboard/SecurityBackup';
import { useToast } from "@/components/ui/use-toast";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const lastActivity = new Date().getTime();
    localStorage.setItem('lastAdminActivity', lastActivity.toString());
    
    const interval = setInterval(() => {
      const last = localStorage.getItem('lastAdminActivity');
      if (last) {
        const inactiveTime = new Date().getTime() - parseInt(last);
        if (inactiveTime > 30 * 60 * 1000) {
          toast({
            title: "Session timeout",
            description: "You have been inactive for 30 minutes. Please log in again.",
            variant: "destructive"
          });
          window.location.reload();
        }
      }
    }, 60000);
    
    const updateActivity = () => {
      localStorage.setItem('lastAdminActivity', new Date().getTime().toString());
    };
    
    window.addEventListener('mousemove', updateActivity);
    window.addEventListener('keypress', updateActivity);
    window.addEventListener('click', updateActivity);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', updateActivity);
      window.removeEventListener('keypress', updateActivity);
      window.removeEventListener('click', updateActivity);
    };
  }, [toast]);

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You are being logged out of the admin portal."
    });
    setTimeout(() => window.location.reload(), 1500);
  };

  return (
    <div className="container-custom pt-4 pb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        
        <div className="flex gap-2 items-center">
          <Button 
            variant="neumorphic" 
            className="flex md:hidden items-center justify-center h-10 w-10 p-0"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          >
            {mobileSidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </Button>
          <Button 
            variant="neumorphic" 
            className="hidden md:flex items-center gap-2"
            onClick={handleLogout}
          >
            <LogOut size={16} />
            <span>Logout</span>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6">
        {mobileSidebarOpen && (
          <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setMobileSidebarOpen(false)}>
            <Card className="absolute left-0 top-0 h-full w-64 p-4 rounded-r-xl overflow-auto" raised intensity="light">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">Navigation</h3>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => setMobileSidebarOpen(false)}>
                  <X size={18} />
                </Button>
              </div>
              <Separator className="mb-4" />
              <nav className="space-y-2">
                <Button 
                  variant={activeTab === 'overview' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('overview');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <LayoutDashboard className="mr-2" size={18} />
                  Overview
                </Button>
                
                <Button 
                  variant={activeTab === 'blog' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('blog');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <BookText className="mr-2" size={18} />
                  Blog Management
                </Button>
                
                <Button 
                  variant={activeTab === 'branding' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('branding');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <Palette className="mr-2" size={18} />
                  Branding & Theme
                </Button>
                
                <Button 
                  variant={activeTab === 'users' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('users');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <Users className="mr-2" size={18} />
                  User Roles
                </Button>
                
                <Button 
                  variant={activeTab === 'analytics' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('analytics');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <BarChart className="mr-2" size={18} />
                  Analytics
                </Button>
                
                <Button 
                  variant={activeTab === 'workflow' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('workflow');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <Calendar className="mr-2" size={18} />
                  Workflow & Scheduling
                </Button>
                
                <Button 
                  variant={activeTab === 'media' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('media');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <FolderOpen className="mr-2" size={18} />
                  Media & Assets
                </Button>
                
                <Button 
                  variant={activeTab === 'ui' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('ui');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <Settings className="mr-2" size={18} />
                  Customizable UI
                </Button>
                
                <Button 
                  variant={activeTab === 'security' ? 'neumorphicInset' : 'neumorphic'} 
                  className="w-full justify-start text-left"
                  onClick={() => {
                    setActiveTab('security');
                    setMobileSidebarOpen(false);
                  }}
                >
                  <Shield className="mr-2" size={18} />
                  Security & Backup
                </Button>

                <Separator className="my-2" />
                <Button 
                  variant="neumorphic" 
                  className="w-full justify-start text-left md:hidden"
                  onClick={handleLogout}
                >
                  <LogOut className="mr-2" size={18} />
                  Logout
                </Button>
              </nav>
            </Card>
          </div>
        )}
        
        <Card className="p-4 h-fit hidden md:block" raised intensity="light">
          <nav className="space-y-2">
            <Button 
              variant={activeTab === 'overview' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('overview')}
            >
              <LayoutDashboard className="mr-2" size={18} />
              Overview
            </Button>
            
            <Button 
              variant={activeTab === 'blog' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('blog')}
            >
              <BookText className="mr-2" size={18} />
              Blog Management
            </Button>
            
            <Button 
              variant={activeTab === 'branding' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('branding')}
            >
              <Palette className="mr-2" size={18} />
              Branding & Theme
            </Button>
            
            <Button 
              variant={activeTab === 'users' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('users')}
            >
              <Users className="mr-2" size={18} />
              User Roles
            </Button>
            
            <Button 
              variant={activeTab === 'analytics' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('analytics')}
            >
              <BarChart className="mr-2" size={18} />
              Analytics
            </Button>
            
            <Button 
              variant={activeTab === 'workflow' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('workflow')}
            >
              <Calendar className="mr-2" size={18} />
              Workflow & Scheduling
            </Button>
            
            <Button 
              variant={activeTab === 'media' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('media')}
            >
              <FolderOpen className="mr-2" size={18} />
              Media & Assets
            </Button>
            
            <Button 
              variant={activeTab === 'ui' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('ui')}
            >
              <Settings className="mr-2" size={18} />
              Customizable UI
            </Button>
            
            <Button 
              variant={activeTab === 'security' ? 'neumorphicInset' : 'neumorphic'} 
              className="w-full justify-start text-left"
              onClick={() => setActiveTab('security')}
            >
              <Shield className="mr-2" size={18} />
              Security & Backup
            </Button>
          </nav>
        </Card>
        
        <div>
          {activeTab === 'overview' && <DashboardOverview />}
          {activeTab === 'blog' && <BlogManagement />}
          {activeTab === 'branding' && <BrandingTheme />}
          {activeTab === 'users' && <UserRoleManagement />}
          {activeTab === 'analytics' && <AnalyticsPerformance />}
          {activeTab === 'workflow' && <WorkflowScheduling />}
          {activeTab === 'media' && <MediaAssetManagement />}
          {activeTab === 'ui' && <CustomizableUI />}
          {activeTab === 'security' && <SecurityBackup />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
