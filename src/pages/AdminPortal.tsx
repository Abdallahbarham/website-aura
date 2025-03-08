
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AdminLogin from '@/components/admin/AdminLogin';
import AdminDashboard from '@/components/admin/AdminDashboard';

const AdminPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const handleLogin = (status: boolean) => {
    setIsAuthenticated(status);
  };

  return (
    <div className="container-custom py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">Admin Portal</h1>
      
      {!isAuthenticated ? (
        <div className="max-w-md mx-auto">
          <Card className="p-6">
            <AdminLogin onLogin={handleLogin} />
          </Card>
        </div>
      ) : (
        <AdminDashboard />
      )}
    </div>
  );
};

export default AdminPortal;
