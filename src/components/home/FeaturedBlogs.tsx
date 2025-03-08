import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BlogCard } from '../ui/cards';

const FeaturedBlogs = () => {
  const featuredBlogPosts = [{
    id: 1,
    title: "Resilience in Global Markets",
    excerpt: "Exploring strategies for maintaining operational resilience amidst global market volatility.",
    category: "Insights",
    date: "June 27, 2023",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    url: "/resources/resilience-in-global-markets"
  }, {
    id: 2,
    title: "Policy Impact Assessment",
    excerpt: "Quantitative analysis of recent policy changes and their implications for financial systems.",
    category: "Research",
    date: "May 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    url: "/resources/policy-impact-assessment"
  }, {
    id: 3,
    title: "AI Implementation for AI Report",
    excerpt: "Case study on successful AI implementation strategies in financial operations.",
    category: "Case Study",
    date: "April 8, 2023",
    imageUrl: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    url: "/resources/ai-implementation-report"
  }];

  return (
    <div className="mb-20">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold">Featured</h2>
        <Link to="/resources" className="text-champagne font-medium flex items-center hover:underline">
          View all <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredBlogPosts.map(post => <BlogCard key={post.id} title={post.title} excerpt={post.excerpt} category={post.category} date={post.date} imageUrl={post.imageUrl} url={post.url} />)}
      </div>
    </div>
  );
};

export default FeaturedBlogs;
