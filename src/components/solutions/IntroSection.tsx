
import React, { useEffect, useRef } from 'react';

const IntroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.remove('opacity-0');
        }
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
    <div ref={sectionRef} className="max-w-4xl mx-auto mb-16 text-center opacity-0 transition-all duration-1000">
      <p className="text-stone-gray text-lg leading-relaxed">
        At FAEI, we provide research-driven solutions that bridge theory and practice in finance and business. 
        Our expert team combines academic rigor with real-world experience to deliver actionable frameworks, methodologies, 
        and insights that create immediate business value. Our Functional Area Management Framework empowers organizations 
        with specialized tools for Marketing, Sales, Operations, and AI integration. Explore our tailored solutions below 
        to discover how we can help your organization achieve excellence through applied research.
      </p>
    </div>
  );
};

export default IntroSection;
