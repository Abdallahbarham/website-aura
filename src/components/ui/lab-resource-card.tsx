
import { useState } from 'react';
import { Card } from './card';
import { Link } from 'react-router-dom';

interface LabResourceCardProps {
  title: string;
  imageUrl: string;
  link?: string;
  excerpt?: string;
  lab?: string;
  resourceType?: string;
  downloadUrl?: string;
}

const LabResourceCard = ({ 
  title, 
  imageUrl, 
  link, 
  excerpt, 
  lab, 
  resourceType, 
  downloadUrl 
}: LabResourceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const url = link || downloadUrl || "#";
  
  return (
    <Link to={url} className="block">
      <Card 
        className="bg-white overflow-hidden transition-all duration-500 hover:-translate-y-2 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]"
        raised
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-square overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        </div>
        <div className="p-4">
          {lab && resourceType && (
            <div className="flex justify-between text-xs text-stone-gray mb-2">
              <span>{lab}</span>
              <span>{resourceType}</span>
            </div>
          )}
          <h3 className={`font-medium transition-colors duration-300 ${isHovered ? 'text-champagne' : 'text-rich-black'}`}>{title}</h3>
          {excerpt && <p className="text-sm text-stone-gray mt-2 transition-all duration-300">{excerpt}</p>}
        </div>
      </Card>
    </Link>
  );
};

export default LabResourceCard;
