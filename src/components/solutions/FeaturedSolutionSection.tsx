
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '../ui/cards';

const FeaturedSolutionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // Calculate how far the element is from the top of the viewport
        const rect = sectionRef.current.getBoundingClientRect();
        const distanceFromTop = rect.top;
        
        // Only update scroll position when the element is in view
        if (distanceFromTop < window.innerHeight && rect.bottom > 0) {
          setScrollPosition(distanceFromTop);
        }
      }
    };
    
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
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Create a subtle parallax effect based on scroll position
  const imageTransform = scrollPosition ? `translateY(${scrollPosition * 0.05}px)` : 'translateY(0)';

  return (
    <Card 
      ref={sectionRef} 
      className="mb-16 opacity-0 transition-all duration-700 overflow-hidden"
      raised
      intensity="strong"
      backgroundColor="bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-gray-100 h-[300px] lg:h-auto flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
            alt="Resilience Training" 
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            style={{ transform: imageTransform }}
          />
        </div>
        <div className="lg:col-span-2 p-8">
          <h3 className="text-2xl font-semibold mb-2 animate-slide-in" style={{ animationDelay: '200ms' }}>
            Bouncing Back: The Personal Resilience Science
          </h3>
          <p className="text-stone-gray mb-6 animate-slide-in" style={{ animationDelay: '300ms' }}>
            Discover the science behind personal resilience and learn practical techniques to build your capacity to thrive under pressure.
          </p>
          <button className="button-neuro bg-rich-black text-white px-6 py-3 rounded-xl font-medium hover:scale-105 animate-slide-in" style={{ animationDelay: '400ms' }}>
            Get Started
          </button>
        </div>
      </div>
    </Card>
  );
};

export default FeaturedSolutionSection;
