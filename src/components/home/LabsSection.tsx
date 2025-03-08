
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { BrainCircuit, UsersRound, Lightbulb } from 'lucide-react';

// Define lab data structure
interface Lab {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

// Lab data
const labs: Lab[] = [{
  id: 'ai-enablement',
  title: 'AI Enablement Lab',
  description: 'Helping organizations leverage AI technologies to transform their operations and create value.',
  Icon: BrainCircuit
}, {
  id: 'leadership-development',
  title: 'Leadership Development Lab',
  description: 'Developing future-ready leaders with the skills to navigate complex business environments.',
  Icon: UsersRound
}, {
  id: 'strategy-innovation',
  title: 'Strategy & Innovation Lab',
  description: 'Creating innovative strategies and solutions for sustainable competitive advantage.',
  Icon: Lightbulb
}];

const LabsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Section fade-in animation
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, {
      threshold: 0.1
    });
    
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
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block py-1 px-3 rounded-full bg-champagne/10 text-champagne text-sm font-medium mb-4">
          Innovation Hub
        </span>
        <h2 className="text-3xl font-bold mb-6">Our Labs</h2>
        <p className="text-stone-gray mb-8 font-medium leading-relaxed">
          We partner with professionals and organizations in enhancing their business performance through research-based insights and expertise across multiple functional areas.
        </p>
      </div>
      
      {/* Labs Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {labs.map((lab, index) => <Card key={lab.id} className="p-8 border border-champagne/10 hover:border-champagne/30 transition-all duration-300 hover:shadow-xl bg-white/70 backdrop-blur-sm group hover:-translate-y-1">
            <div className="flex flex-col h-full" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne/10 text-champagne mb-4">
                  <lab.Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-champagne transition-colors duration-300">{lab.title}</h3>
              </div>
              <p className="text-stone-gray mb-6 flex-grow">{lab.description}</p>
              <Link to={`/labs/${lab.id}`} className="text-champagne hover:text-rich-black font-medium inline-flex items-center transition-colors">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Card>)}
      </div>
      
      <div className="text-center">
        <Button asChild className="bg-rich-black text-white px-8 py-6 rounded-lg font-medium transition-all hover:shadow-lg hover:bg-opacity-90 hover:scale-105">
          <Link to="/labs">
            Explore Our Labs
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default LabsSection;
