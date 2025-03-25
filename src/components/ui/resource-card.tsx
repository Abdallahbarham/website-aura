import React from 'react';
import { Link } from 'react-router-dom';

interface ResourceCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  imageUrl: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ id, title, excerpt, category, date, readTime, imageUrl }) => {
  return (
    <Link to={`/resources/${id}`} className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="text-sm text-light-green font-medium mb-1">{category}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-stone-gray text-sm line-clamp-2">{excerpt}</p>
        <div className="flex items-center mt-2 text-xs text-stone-gray">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime} min read</span>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;
