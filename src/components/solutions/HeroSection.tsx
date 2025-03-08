
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1
    });

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

  // Calculate parallax transformations based on scroll position
  const imageTransform = `translateY(${scrollPosition * 0.1}px)`;
  const textTransform = `translateY(-${scrollPosition * 0.2}px)`;

  return (
    <div 
      ref={sectionRef}
      className={`relative h-[400px] rounded-2xl overflow-hidden mb-12 transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-rich-black to-transparent z-10" />
      <div 
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: imageTransform }}
      >
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
          alt="FAEI Solutions" 
          className="w-full h-full object-cover scale-110"
        />
      </div>
      <div className="absolute inset-0 flex items-center z-20">
        <div 
          className="container-custom transition-transform duration-300 ease-out"
          style={{ transform: textTransform }}
        >
          <div className="max-w-xl text-white">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our Solutions
            </h1>
            <p className={`text-lg opacity-90 mb-6 transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Discover innovative solutions through our research-driven frameworks and methodologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
