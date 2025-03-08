
import React, { useEffect, useRef } from 'react';

const SpotlightSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            section.classList.add('animate-fade-in');
            section.classList.remove('opacity-0');
            
            // Animate child elements with staggered delay
            const heading = section.querySelector('h2');
            const leftCol = section.querySelector('.left-col');
            const rightCol = section.querySelector('.right-col');
            
            if (heading) {
              setTimeout(() => {
                heading.classList.add('animate-slide-in');
                heading.classList.remove('opacity-0', 'translate-y-10');
              }, 200);
            }
            
            if (leftCol) {
              setTimeout(() => {
                leftCol.classList.add('animate-slide-in');
                leftCol.classList.remove('opacity-0', 'translate-y-10');
              }, 400);
            }
            
            if (rightCol) {
              setTimeout(() => {
                rightCol.classList.add('animate-slide-in');
                rightCol.classList.remove('opacity-0', 'translate-y-10');
              }, 600);
            }
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
    <div ref={sectionRef} className="bg-white rounded-2xl p-8 shadow-neumorph-sm mb-16 opacity-0 transition-all duration-700">
      <h2 className="text-3xl font-bold mb-8 text-center opacity-0 translate-y-10 transition-all duration-700">Spotlight</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="left-col opacity-0 translate-y-10 transition-all duration-700">
          <h3 className="text-2xl font-semibold mb-4">
            Download the latest insights and frameworks for the AI Enablement Lab to boost your organization's performance.
          </h3>
          <p className="text-stone-gray mb-6">
            Learn about our AI implementation methodology and how it can transform your operations and decision-making processes.
          </p>
          <button className="bg-rich-black text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-opacity-90 hover:scale-105">
            Download the Guide
          </button>
        </div>
        <div className="right-col bg-gray-100 rounded-xl h-[300px] flex items-center justify-center overflow-hidden opacity-0 translate-y-10 transition-all duration-700">
          <img 
            alt="AI Enablement Guide" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
            src="/lovable-uploads/642859ab-a0cb-40ff-9720-3f4669587d7b.png" 
          />
        </div>
      </div>
    </div>
  );
};

export default SpotlightSection;
