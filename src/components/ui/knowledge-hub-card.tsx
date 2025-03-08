
import { ReactNode, useState } from 'react';
import { Card } from './card';
import { Link } from 'react-router-dom';

interface KnowledgeHubCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
  icon?: ReactNode;
}

const KnowledgeHubCard = ({ 
  title, 
  description, 
  imageUrl, 
  category, 
  link, 
  icon 
}: KnowledgeHubCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <Card 
        className="bg-white overflow-hidden mb-4 w-full transition-all duration-500 hover:-translate-y-2 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]" 
        raised
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to={link} className="block">
          <div className="aspect-square overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
          </div>
          <div className="p-4">
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${isHovered ? 'text-champagne' : 'text-rich-black'}`}>{title}</h3>
            <p className="text-stone-gray text-sm mb-3 line-clamp-2">{description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xs text-stone-gray">{category}</span>
              <span className={`text-champagne hover:text-oat text-sm font-medium transition-all duration-300 ${isHovered ? 'underline' : ''}`}>
                Learn more
              </span>
            </div>
          </div>
        </Link>
      </Card>
    </div>
  );
};

export default KnowledgeHubCard;
