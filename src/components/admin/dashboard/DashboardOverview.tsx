
import { Card } from '@/components/ui/card';
import { 
  BookText, 
  Users, 
  BarChart, 
  Calendar, 
  Eye,
  MessageSquare,
  Clock,
  ArrowUpRight
} from 'lucide-react';

const DashboardOverview = () => {
  // Mock data for dashboard
  const stats = [
    { label: 'Total Posts', value: '24', icon: BookText, change: '+3', isUp: true },
    { label: 'Total Users', value: '8', icon: Users, change: '+1', isUp: true },
    { label: 'Post Views', value: '2.4k', icon: Eye, change: '+12%', isUp: true },
    { label: 'Comments', value: '68', icon: MessageSquare, change: '-5%', isUp: false },
  ];

  const recentPosts = [
    { title: 'AI for Business Transformation', status: 'Published', views: 345, date: '2023-10-15' },
    { title: 'Future of Work with AI Integration', status: 'Draft', views: 0, date: '2023-10-22' },
    { title: 'Ethical Considerations in AI Development', status: 'Scheduled', views: 0, date: '2023-10-30' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="p-4" raised intensity="light">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-stone-gray text-sm">{stat.label}</p>
                <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
                <div className={`mt-1 text-xs flex items-center ${stat.isUp ? 'text-green-600' : 'text-red-500'}`}>
                  {stat.isUp ? '↑' : '↓'} {stat.change} from last month
                </div>
              </div>
              <div className="bg-off-white shadow-neumorph-sm p-2 rounded-lg">
                <stat.icon size={20} className="text-champagne" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="p-4" raised intensity="light">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recent Posts</h3>
            <Button className="text-xs text-stone-gray hover:text-charcoal-gray">View All</Button>
          </div>
          <div className="space-y-3">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-off-white shadow-neumorph-sm rounded-lg">
                <div>
                  <h4 className="font-medium">{post.title}</h4>
                  <div className="flex items-center mt-1 text-xs text-stone-gray">
                    <span className={`inline-block w-2 h-2 rounded-full mr-1 ${
                      post.status === 'Published' ? 'bg-green-500' : 
                      post.status === 'Draft' ? 'bg-amber-500' : 'bg-blue-500'
                    }`}></span>
                    {post.status}
                    {post.views > 0 && (
                      <span className="ml-2 flex items-center">
                        <Eye size={12} className="mr-1" /> {post.views}
                      </span>
                    )}
                  </div>
                </div>
                <span className="text-xs text-stone-gray flex items-center">
                  <Clock size={12} className="mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Quick Actions */}
        <Card className="p-4" raised intensity="light">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="neumorphic" className="py-6 h-auto flex flex-col items-center justify-center gap-2">
              <BookText size={24} />
              <span>New Post</span>
            </Button>
            <Button variant="neumorphic" className="py-6 h-auto flex flex-col items-center justify-center gap-2">
              <Users size={24} />
              <span>Add User</span>
            </Button>
            <Button variant="neumorphic" className="py-6 h-auto flex flex-col items-center justify-center gap-2">
              <BarChart size={24} />
              <span>Analytics</span>
            </Button>
            <Button variant="neumorphic" className="py-6 h-auto flex flex-col items-center justify-center gap-2">
              <Calendar size={24} />
              <span>Schedule</span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

// Add Button component to use within the Dashboard
const Button = ({ 
  children, 
  className, 
  variant = "text", 
  ...props 
}: { 
  children: React.ReactNode; 
  className?: string; 
  variant?: "neumorphic" | "text"; 
  [key: string]: any;
}) => {
  return (
    <button 
      className={`${
        variant === "neumorphic" 
          ? "bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md active:shadow-neumorph-pressed text-rich-black" 
          : "text-champagne hover:underline"
      } transition-all duration-300 rounded-lg px-3 py-2 ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default DashboardOverview;
