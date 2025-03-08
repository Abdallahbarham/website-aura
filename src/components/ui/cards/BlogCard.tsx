
import { useState } from 'react';
import Card from './Card';

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  imageUrl: string;
  url: string;
}

export const BlogCard = ({ title, excerpt, category, date, imageUrl, url }: BlogCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2" 
      raised 
      hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url} className="block">
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className={`object-cover w-full h-[200px] transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full shadow-sm">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-xs text-stone-gray mb-2">
            <span>{date}</span>
          </div>
          <h3 className="text-lg font-semibold leading-tight mb-2 transition-colors hover:text-champagne">
            {title}
          </h3>
          <p className="text-sm text-stone-gray line-clamp-2">{excerpt}</p>
          <div className="mt-4 text-sm font-medium text-rich-black flex items-center">
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </a>
    </Card>
  );
};

export default BlogCard;
