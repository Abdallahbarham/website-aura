
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BarChart as BarChartIcon, LineChart, TrendingUp, TrendingDown, Clock, Eye, MessageSquare, Share2, Clock3, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart as RechartsLineChart, Line } from 'recharts';

const AnalyticsPerformance = () => {
  const [timeRange, setTimeRange] = useState('last7days');
  
  // Mock data for analytics
  const pageViewData = [
    { date: 'Oct 10', views: 120 },
    { date: 'Oct 11', views: 145 },
    { date: 'Oct 12', views: 160 },
    { date: 'Oct 13', views: 190 },
    { date: 'Oct 14', views: 230 },
    { date: 'Oct 15', views: 210 },
    { date: 'Oct 16', views: 250 },
  ];
  
  const contentEngagementData = [
    { name: 'AI for Business', views: 450, shares: 32, comments: 24, avgReadTime: 3.2 },
    { name: 'Future of Work', views: 320, shares: 25, comments: 18, avgReadTime: 2.8 },
    { name: 'Ethics in AI', views: 280, shares: 19, comments: 15, avgReadTime: 4.1 },
    { name: 'ML for Beginners', views: 520, shares: 41, comments: 29, avgReadTime: 5.5 },
    { name: 'AI Strategy', views: 380, shares: 28, comments: 21, avgReadTime: 3.7 },
  ];
  
  const conversionData = [
    { name: 'Get Started', views: 620, clicks: 85, conversionRate: 13.7 },
    { name: 'Contact Us', views: 480, clicks: 52, conversionRate: 10.8 },
    { name: 'Download Guide', views: 350, clicks: 120, conversionRate: 34.3 },
    { name: 'Newsletter', views: 520, clicks: 98, conversionRate: 18.8 },
    { name: 'Book Demo', views: 290, clicks: 45, conversionRate: 15.5 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h2 className="text-2xl font-bold">Analytics & Performance</h2>
        
        <div className="flex gap-2">
          <Button
            variant={timeRange === 'last7days' ? 'neumorphicInset' : 'neumorphic'}
            size="sm"
            onClick={() => setTimeRange('last7days')}
          >
            Last 7 Days
          </Button>
          <Button
            variant={timeRange === 'last30days' ? 'neumorphicInset' : 'neumorphic'}
            size="sm"
            onClick={() => setTimeRange('last30days')}
          >
            Last 30 Days
          </Button>
          <Button
            variant={timeRange === 'last90days' ? 'neumorphicInset' : 'neumorphic'}
            size="sm"
            onClick={() => setTimeRange('last90days')}
          >
            Last 90 Days
          </Button>
        </div>
      </div>
      
      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-4" raised intensity="light">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-stone-gray text-sm">Total Page Views</p>
              <h3 className="text-3xl font-bold mt-1">1,245</h3>
              <div className="mt-1 text-xs flex items-center text-green-600">
                ↑ 12.5% from last period
              </div>
            </div>
            <div className="bg-off-white shadow-neumorph-sm p-2 rounded-lg">
              <Eye size={20} className="text-champagne" />
            </div>
          </div>
        </Card>
        
        <Card className="p-4" raised intensity="light">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-stone-gray text-sm">Avg. Time on Page</p>
              <h3 className="text-3xl font-bold mt-1">3:24</h3>
              <div className="mt-1 text-xs flex items-center text-green-600">
                ↑ 8.3% from last period
              </div>
            </div>
            <div className="bg-off-white shadow-neumorph-sm p-2 rounded-lg">
              <Clock size={20} className="text-champagne" />
            </div>
          </div>
        </Card>
        
        <Card className="p-4" raised intensity="light">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-stone-gray text-sm">Social Shares</p>
              <h3 className="text-3xl font-bold mt-1">87</h3>
              <div className="mt-1 text-xs flex items-center text-green-600">
                ↑ 15.2% from last period
              </div>
            </div>
            <div className="bg-off-white shadow-neumorph-sm p-2 rounded-lg">
              <Share2 size={20} className="text-champagne" />
            </div>
          </div>
        </Card>
        
        <Card className="p-4" raised intensity="light">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-stone-gray text-sm">Conversion Rate</p>
              <h3 className="text-3xl font-bold mt-1">18.7%</h3>
              <div className="mt-1 text-xs flex items-center text-red-500">
                ↓ 2.1% from last period
              </div>
            </div>
            <div className="bg-off-white shadow-neumorph-sm p-2 rounded-lg">
              <TrendingUp size={20} className="text-champagne" />
            </div>
          </div>
        </Card>
      </div>
      
      <Tabs defaultValue="traffic" className="space-y-6">
        <TabsList className="bg-off-white shadow-neumorph-sm p-1 rounded-lg">
          <TabsTrigger 
            value="traffic" 
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Traffic
          </TabsTrigger>
          <TabsTrigger 
            value="content"
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Content Engagement
          </TabsTrigger>
          <TabsTrigger 
            value="conversion"
            className="data-[state=active]:shadow-neumorph-inset data-[state=active]:bg-transparent"
          >
            Conversion
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="traffic" className="space-y-6 mt-4">
          <Card className="p-6" raised intensity="light">
            <h3 className="text-lg font-semibold mb-6">Page Views Over Time</h3>
            
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsLineChart data={pageViewData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="views" 
                    stroke="#F7A456" 
                    strokeWidth={2} 
                    dot={{ fill: '#F7A456', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6" raised intensity="light">
              <h3 className="text-lg font-semibold mb-4">Traffic Sources</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Direct</span>
                    <span className="text-sm font-medium">45%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Search Engines</span>
                    <span className="text-sm font-medium">30%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Social Media</span>
                    <span className="text-sm font-medium">15%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Referrals</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6" raised intensity="light">
              <h3 className="text-lg font-semibold mb-4">Device Breakdown</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Mobile</span>
                    <span className="text-sm font-medium">62%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '62%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Desktop</span>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '28%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Tablet</span>
                    <span className="text-sm font-medium">10%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="content" className="space-y-6 mt-4">
          <Card className="p-6" raised intensity="light">
            <h3 className="text-lg font-semibold mb-6">Top Performing Content</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b border-stone-gray/20">
                    <th className="px-4 py-2 font-medium">Content Title</th>
                    <th className="px-4 py-2 font-medium">Views</th>
                    <th className="px-4 py-2 font-medium">Shares</th>
                    <th className="px-4 py-2 font-medium">Comments</th>
                    <th className="px-4 py-2 font-medium">Avg. Read Time</th>
                  </tr>
                </thead>
                <tbody>
                  {contentEngagementData.map((item, index) => (
                    <tr key={index} className="border-b border-stone-gray/20">
                      <td className="px-4 py-3 font-medium">{item.name}</td>
                      <td className="px-4 py-3">{item.views}</td>
                      <td className="px-4 py-3">{item.shares}</td>
                      <td className="px-4 py-3">{item.comments}</td>
                      <td className="px-4 py-3">{item.avgReadTime} min</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6" raised intensity="light">
              <h3 className="text-lg font-semibold mb-6">Content Engagement Metrics</h3>
              
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={contentEngagementData.slice(0, 5)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="views" fill="#F7A456" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            
            <Card className="p-6" raised intensity="light">
              <h3 className="text-lg font-semibold mb-4">Engagement by Category</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">AI Strategy</span>
                    <span className="text-sm font-medium">38%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '38%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Tutorials</span>
                    <span className="text-sm font-medium">25%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Case Studies</span>
                    <span className="text-sm font-medium">20%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Industry News</span>
                    <span className="text-sm font-medium">12%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '12%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Other</span>
                    <span className="text-sm font-medium">5%</span>
                  </div>
                  <div className="h-2 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="conversion" className="space-y-6 mt-4">
          <Card className="p-6" raised intensity="light">
            <h3 className="text-lg font-semibold mb-6">Call-to-Action Performance</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left border-b border-stone-gray/20">
                    <th className="px-4 py-2 font-medium">CTA</th>
                    <th className="px-4 py-2 font-medium">Impressions</th>
                    <th className="px-4 py-2 font-medium">Clicks</th>
                    <th className="px-4 py-2 font-medium">Conversion Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {conversionData.map((item, index) => (
                    <tr key={index} className="border-b border-stone-gray/20">
                      <td className="px-4 py-3 font-medium">{item.name}</td>
                      <td className="px-4 py-3">{item.views}</td>
                      <td className="px-4 py-3">{item.clicks}</td>
                      <td className="px-4 py-3">{item.conversionRate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6" raised intensity="light">
              <h3 className="text-lg font-semibold mb-6">Conversion Rates by CTA</h3>
              
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conversionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="conversionRate" fill="#F7A456" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
            
            <Card className="p-6" raised intensity="light">
              <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
              
              <div className="space-y-4 mt-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Visitors</span>
                    <span className="text-sm font-medium">2,450</span>
                  </div>
                  <div className="h-3 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">CTA Views</span>
                    <span className="text-sm font-medium">1,820</span>
                  </div>
                  <div className="h-3 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">CTA Clicks</span>
                    <span className="text-sm font-medium">420</span>
                  </div>
                  <div className="h-3 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '17%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Form Completions</span>
                    <span className="text-sm font-medium">165</span>
                  </div>
                  <div className="h-3 bg-off-white shadow-neumorph-inset rounded-full overflow-hidden">
                    <div className="h-full bg-champagne rounded-full" style={{ width: '7%' }}></div>
                  </div>
                </div>
              </div>
              
              <p className="mt-4 text-sm text-stone-gray">
                Overall conversion rate: <span className="font-medium">6.7%</span>
              </p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPerformance;
