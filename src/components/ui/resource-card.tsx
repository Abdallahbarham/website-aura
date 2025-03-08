
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card } from './card';

export interface ResourceCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const ResourceCard = ({ id, title, excerpt, category, date, readTime, imageUrl }: ResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:-translate-y-2" 
      raised
      hover
      intensity="medium"
      backgroundColor="bg-white"
    >
      <Link 
        to={`/resources/${id}`} 
        className="block" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className={`object-cover w-full h-[200px] transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          <div className="absolute top-4 left-4">
            <span className="badge-neuro text-xs font-medium px-3 py-1">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center text-xs text-stone-gray mb-2 gap-4">
            <span>{date}</span>
            <div className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1" />
              <span>{readTime} min read</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold leading-tight mb-2 transition-colors hover:text-champagne">
            {title}
          </h3>
          <p className="text-sm text-stone-gray line-clamp-2 mb-4">{excerpt}</p>
          <div className={`text-sm font-medium flex items-center transition-all duration-300 ${isHovered ? 'text-champagne' : 'text-rich-black'}`}>
            <span>Read more</span>
            <ArrowRight className={`h-4 w-4 ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ResourceCard;
