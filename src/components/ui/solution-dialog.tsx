
import React from 'react';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

type Solution = {
  id: number;
  title: string;
  description: string;
  category: string;
  items: string[];
  courseLink: string;
  imageUrl: string;
};

interface SolutionDialogProps {
  solution: Solution;
  isOpen: boolean;
  onClose: () => void;
}

const SolutionDialog: React.FC<SolutionDialogProps> = ({ solution, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-rich-black bg-opacity-80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Dialog Content */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full max-w-4xl relative z-10 animate-fade-in">
        <div className="flex justify-end p-4 absolute top-0 right-0 z-10">
          <button 
            onClick={onClose}
            className="bg-white/80 backdrop-blur-sm rounded-full p-2 text-rich-black hover:bg-white transition-all"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[200px] md:h-auto">
            <img 
              src={solution.imageUrl}
              alt={solution.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-white/80 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full">
                {solution.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
            <p className="text-stone-gray mb-6">{solution.description}</p>
            
            <h4 className="font-semibold mb-3">What you'll learn:</h4>
            <ul className="mb-6 space-y-2">
              {solution.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <ArrowRight size={16} className="mt-1 mr-2 text-light-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-auto">
              <a 
                href={solution.courseLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-rich-black text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90 inline-flex items-center"
              >
                Explore Course <ExternalLink size={16} className="ml-2" />
              </a>
              <p className="text-xs text-stone-gray mt-2">
                This course is offered through our sister company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionDialog;
