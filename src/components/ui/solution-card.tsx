
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card } from './card';

type Solution = {
  id: number;
  title: string;
  description: string;
  category: string;
  items: string[];
  courseLink: string;
  imageUrl: string;
};

interface SolutionCardProps {
  solution: Solution;
  onClick: () => void;
}

export const SolutionCard = ({ solution, onClick }: SolutionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="bg-white overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff]" 
      raised
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={solution.imageUrl} 
          alt={solution.title} 
          className={`object-cover w-full h-[160px] transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'}`}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full shadow-sm">
            {solution.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-lg font-semibold leading-tight mb-2 transition-colors duration-300 ${isHovered ? 'text-champagne' : 'text-rich-black'}`}>
          {solution.title}
        </h3>
        <p className="text-sm text-stone-gray line-clamp-3 mb-4">{solution.description}</p>
        <div className={`text-sm font-medium flex items-center transition-all duration-300 ${isHovered ? 'text-champagne' : 'text-rich-black'}`}>
          <span>Learn more</span>
          <ArrowRight className={`h-4 w-4 ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
        </div>
      </div>
    </Card>
  );
};

export default SolutionCard;
