
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Users, 
  UserPlus, 
  Search, 
  Edit, 
  Trash, 
  Shield,
  Eye,
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  UserCheck
} from 'lucide-react';

const UserRoleManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data for users
  const users = [
    { 
      id: 1, 
      name: 'John Smith', 
      email: 'john@faei.org', 
      role: 'Admin',
      status: 'Active',
      lastLogin: '2023-10-16 14:32',
      permissions: ['manage_users', 'manage_content', 'publish_content', 'manage_settings']
    },
    { 
      id: 2, 
      name: 'Jane Doe', 
      email: 'jane@faei.org', 
      role: 'Editor',
      status: 'Active',
      lastLogin: '2023-10-15 09:45',
      permissions: ['manage_content', 'publish_content']
    },
    { 
      id: 3, 
      name: 'Emily Chen', 
      email: 'emily@faei.org', 
      role: 'Contributor',
      status: 'Active',
      lastLogin: '2023-10-14 16:20',
      permissions: ['manage_content']
    },
    { 
      id: 4, 
      name: 'David Wilson', 
      email: 'david@faei.org', 
      role: 'Viewer',
      status: 'Inactive',
      lastLogin: '2023-09-30 11:15',
      permissions: []
    },
  ];
  
  const rolePermissions = {
    Admin: ['manage_users', 'manage_content', 'publish_content', 'manage_settings'],
    Editor: ['manage_content', 'publish_content'],
    Contributor: ['manage_content'],
    Viewer: []
  };
  
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Mock audit logs
  const auditLogs = [
    { id: 1, user: 'John Smith', action: 'Added new user', target: 'David Wilson', timestamp: '2023-10-10 09:30' },
    { id: 2, user: 'John Smith', action: 'Changed role', target: 'Jane Doe (Contributor → Editor)', timestamp: '2023-10-11 14:15' },
    { id: 3, user: 'Jane Doe', action: 'Published content', target: 'AI for Business Transformation', timestamp: '2023-10-15 10:40' },
    { id: 4, user: 'Emily Chen', action: 'Created draft', target: 'Ethical Considerations in AI Development', timestamp: '2023-10-16 13:20' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">User Role Management</h2>
        
        <Button variant="neumorphic" className="flex items-center gap-2">
          <UserPlus size={16} />
          Add New User
        </Button>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-stone-gray" size={16} />
        <Input
          placeholder="Search users by name, email, or role..."
          className="pl-10 bg-off-white shadow-neumorph-inset"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="space-y-4">
        {filteredUsers.map(user => (
          <Card key={user.id} className="p-4" raised intensity="light">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="md:flex-grow">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-champagne/20 flex items-center justify-center text-champagne font-medium">
                    {user.name.charAt(0)}
                  </span>
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-stone-gray">{user.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 md:gap-4 items-center">
                <div className="bg-off-white shadow-neumorph-sm px-3 py-1 rounded-full text-xs flex items-center">
                  <Shield size={12} className="mr-1" />
                  {user.role}
                </div>
                
                <div className={`px-3 py-1 rounded-full text-xs flex items-center ${
                  user.status === 'Active' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-stone-100 text-stone-800'
                }`}>
                  {user.status === 'Active' ? (
                    <CheckCircle size={12} className="mr-1" />
                  ) : (
                    <XCircle size={12} className="mr-1" />
                  )}
                  {user.status}
                </div>
                
                <div className="text-xs text-stone-gray flex items-center">
                  <Clock size={12} className="mr-1" />
                  Last login: {user.lastLogin}
                </div>
                
                <div className="flex gap-1">
                  <Button variant="outline" size="sm" className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md p-1 h-8 w-8">
                    <Edit size={14} />
                  </Button>
                  <Button variant="outline" size="sm" className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md p-1 h-8 w-8">
                    <Trash size={14} />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <Card className="p-6" raised intensity="light">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Shield size={20} className="mr-2" />
          Role Permissions
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-left border-b border-stone-gray/20">
                <th className="px-4 py-2 font-medium">Permission</th>
                <th className="px-4 py-2 font-medium text-center">Admin</th>
                <th className="px-4 py-2 font-medium text-center">Editor</th>
                <th className="px-4 py-2 font-medium text-center">Contributor</th>
                <th className="px-4 py-2 font-medium text-center">Viewer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-gray/20">
                <td className="px-4 py-3">Manage Users</td>
                <td className="px-4 py-3 text-center"><CheckCircle size={16} className="mx-auto text-green-600" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
              </tr>
              <tr className="border-b border-stone-gray/20">
                <td className="px-4 py-3">Manage Content</td>
                <td className="px-4 py-3 text-center"><CheckCircle size={16} className="mx-auto text-green-600" /></td>
                <td className="px-4 py-3 text-center"><CheckCircle size={16} className="mx-auto text-green-600" /></td>
                <td className="px-4 py-3 text-center"><CheckCircle size={16} className="mx-auto text-green-600" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
              </tr>
              <tr className="border-b border-stone-gray/20">
                <td className="px-4 py-3">Publish Content</td>
                <td className="px-4 py-3 text-center"><CheckCircle size={16} className="mx-auto text-green-600" /></td>
                <td className="px-4 py-3 text-center"><CheckCircle size={16} className="mx-auto text-green-600" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
              </tr>
              <tr>
                <td className="px-4 py-3">Manage Settings</td>
                <td className="px-4 py-3 text-center"><CheckCircle size={16} className="mx-auto text-green-600" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
                <td className="px-4 py-3 text-center"><XCircle size={16} className="mx-auto text-stone-400" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Button variant="default" className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
            Edit Permissions
          </Button>
        </div>
      </Card>
      
      <Card className="p-6" raised intensity="light">
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Clock size={20} className="mr-2" />
          Activity Audit Log
        </h3>
        
        <div className="space-y-3">
          {auditLogs.map(log => (
            <div key={log.id} className="flex items-center p-3 bg-off-white shadow-neumorph-sm rounded-lg">
              <div className="flex-grow">
                <p className="font-medium text-sm">
                  <span className="text-champagne">{log.user}</span> {log.action}: <span className="italic">{log.target}</span>
                </p>
                <p className="text-xs text-stone-gray">{log.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="text-stone-gray bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md">
            View All Activity
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UserRoleManagement;
