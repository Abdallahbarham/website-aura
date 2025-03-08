import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '../ui/cards';

const caseStudies = [
  {
    category: 'Resilience',
    title: 'Industry Trend Analysis for Global Markets',
    backgroundColor: 'bg-gray-100'
  },
  {
    category: 'Resilience',
    title: 'Policy Impact Assessment',
    backgroundColor: 'bg-gray-100'
  },
  {
    category: 'Resilience',
    title: 'Policy Impact Assessment',
    backgroundColor: 'bg-gray-100'
  },
  {
    category: 'Resilience',
    title: 'Consumer Behavior Research',
    backgroundColor: 'bg-gray-100'
  }
];

const CaseStudiesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
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
    <div ref={sectionRef} className="mb-20 opacity-0 transition-all duration-1000">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold">Case Studies</h2>
        <Link to="/resources" className="text-champagne font-medium flex items-center hover:underline">
          View all <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {caseStudies.map((study, index) => (
          <Card 
            key={index} 
            className={`h-[200px] flex flex-col justify-end p-6 transform transition-all duration-500 hover:-translate-y-2`}
            backgroundColor={study.backgroundColor}
            raised
          >
            <span className="text-champagne font-medium mb-2 transition-opacity duration-300">{study.category}</span>
            <h3 className="text-lg font-semibold transition-transform duration-300">{study.title}</h3>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseStudiesSection;
