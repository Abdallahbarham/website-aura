
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Shield, Lock, Key, Download, Upload, Clock, RefreshCw, AlertTriangle, CheckCircle, UserPlus, History, FileText } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SecurityBackup = () => {
  const [passwordStrength, setPasswordStrength] = useState(85);
  
  // Mock backup history
  const backupHistory = [
    { id: 1, date: '2023-09-25', time: '03:00 AM', type: 'Automated', status: 'Completed', size: '1.2 GB' },
    { id: 2, date: '2023-09-18', time: '03:00 AM', type: 'Automated', status: 'Completed', size: '1.1 GB' },
    { id: 3, date: '2023-09-15', time: '11:45 AM', type: 'Manual', status: 'Completed', size: '1.1 GB' },
    { id: 4, date: '2023-09-11', time: '03:00 AM', type: 'Automated', status: 'Completed', size: '1.1 GB' },
  ];
  
  // Mock security events
  const securityEvents = [
    { id: 1, date: '2023-09-24', time: '10:23 AM', event: 'Failed login attempt', ip: '192.168.1.105', severity: 'Medium' },
    { id: 2, date: '2023-09-23', time: '08:45 AM', event: 'Password changed', ip: '192.168.1.100', severity: 'Low' },
    { id: 3, date: '2023-09-22', time: '03:12 PM', event: 'New admin user created', ip: '192.168.1.100', severity: 'Medium' },
    { id: 4, date: '2023-09-20', time: '11:17 AM', event: 'Multiple failed login attempts', ip: '192.168.1.232', severity: 'High' },
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">Security & Backup</h2>
        
        <div className="flex gap-2">
          <Button variant="neumorphic" className="flex items-center gap-2">
            <Download size={16} />
            Backup Now
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Upload size={16} />
            Restore
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 flex flex-col items-center justify-center text-center" raised intensity="light">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
            <Shield className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Security Status</h3>
          <p className="text-green-600 font-semibold mb-2">Protected</p>
          <p className="text-sm text-stone-gray">All security features are active and functioning correctly.</p>
        </Card>
        
        <Card className="p-6 flex flex-col items-center justify-center text-center" raised intensity="light">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
            <Clock className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Last Backup</h3>
          <p className="font-semibold mb-2">Sep 25, 2023 (3 days ago)</p>
          <p className="text-sm text-stone-gray">Next scheduled backup: Sep 30, 2023</p>
        </Card>
        
        <Card className="p-6 flex flex-col items-center justify-center text-center" raised intensity="light">
          <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-3">
            <Lock className="h-8 w-8 text-yellow-600" />
          </div>
          <h3 className="text-lg font-semibold mb-1">Password Health</h3>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
            <div 
              className={`h-2.5 rounded-full ${
                passwordStrength >= 80 ? 'bg-green-600' : 
                passwordStrength >= 50 ? 'bg-yellow-500' : 'bg-red-600'
              }`} 
              style={{ width: `${passwordStrength}%` }}
            ></div>
          </div>
          <p className="text-sm text-stone-gray">Your password was last updated 30 days ago</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6" raised intensity="light">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <RefreshCw size={20} className="mr-2" />
            Backup History
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium py-2 px-4">Date</th>
                  <th className="text-left font-medium py-2 px-4">Time</th>
                  <th className="text-left font-medium py-2 px-4">Type</th>
                  <th className="text-left font-medium py-2 px-4">Size</th>
                  <th className="text-left font-medium py-2 px-4">Status</th>
                  <th className="text-left font-medium py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {backupHistory.map(backup => (
                  <tr key={backup.id} className="border-b border-gray-100 hover:bg-champagne/10">
                    <td className="py-3 px-4">{backup.date}</td>
                    <td className="py-3 px-4">{backup.time}</td>
                    <td className="py-3 px-4">{backup.type}</td>
                    <td className="py-3 px-4">{backup.size}</td>
                    <td className="py-3 px-4">
                      <span className="flex items-center text-green-600">
                        <CheckCircle size={14} className="mr-1" /> 
                        {backup.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <Button variant="ghost" size="sm">Download</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 space-y-4">
            <Separator />
            
            <div>
              <h4 className="font-medium mb-3">Backup Settings</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Backup Frequency</label>
                  <select className="w-full p-2 rounded border bg-off-white shadow-neumorph-inset">
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Retention Period</label>
                  <select className="w-full p-2 rounded border bg-off-white shadow-neumorph-inset">
                    <option>7 Days</option>
                    <option>30 Days</option>
                    <option>90 Days</option>
                    <option>1 Year</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6" raised intensity="light">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <History size={20} className="mr-2" />
            Security Events
          </h3>
          
          <div className="space-y-3 mb-6">
            {securityEvents.map(event => (
              <div key={event.id} className="p-3 bg-off-white shadow-neumorph-sm rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center">
                    <AlertTriangle 
                      size={16} 
                      className={`mr-2 ${
                        event.severity === 'High' ? 'text-red-500' : 
                        event.severity === 'Medium' ? 'text-yellow-500' : 'text-blue-500'
                      }`} 
                    />
                    <h4 className="font-medium">{event.event}</h4>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    event.severity === 'High' ? 'bg-red-100 text-red-800' : 
                    event.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {event.severity}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-stone-gray">
                  <span>{event.date} at {event.time}</span>
                  <span>IP: {event.ip}</span>
                </div>
              </div>
            ))}
          </div>
          
          <Separator className="mb-4" />
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-3">Two-Factor Authentication</h4>
              <Button variant="neumorphic" className="flex items-center gap-2 w-full">
                <Key size={16} />
                Enable 2FA
              </Button>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Security Reports</h4>
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="flex items-center gap-2 justify-center">
                  <FileText size={16} />
                  Audit Log
                </Button>
                <Button variant="outline" className="flex items-center gap-2 justify-center">
                  <UserPlus size={16} />
                  User Access
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SecurityBackup;
