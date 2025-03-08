
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SolutionCard } from '../ui/solution-card';

type Solution = {
  id: number;
  title: string;
  description: string;
  category: string;
  items: string[];
  courseLink: string;
  imageUrl: string;
};

interface SolutionsSectionProps {
  title: string;
  solutions: Solution[];
  onSolutionClick: (solution: Solution) => void;
}

const SolutionsSection = ({ title, solutions, onSolutionClick }: SolutionsSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the title
            const titleElement = entry.target.querySelector('h2');
            if (titleElement) {
              titleElement.classList.add('animate-fade-in');
              titleElement.classList.remove('opacity-0');
            }
            
            // Animate cards with staggered delay
            const cards = entry.target.querySelectorAll('.solution-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-in');
                card.classList.remove('opacity-0', 'translate-y-10');
              }, 100 * index);
            });
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold opacity-0 transition-all duration-700">{title}</h2>
        <Link to="#" className="text-light-green font-medium flex items-center hover:underline">
          Learn more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <div 
            key={solution.id} 
            className="solution-card opacity-0 translate-y-10 transition-all duration-700"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <SolutionCard 
              solution={solution} 
              onClick={() => onSolutionClick(solution)} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;
