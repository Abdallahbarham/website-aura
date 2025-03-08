import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../ui/carousel';

const HeroCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current) return;
      const scrollPos = window.scrollY;
      const translateY = scrollPos * 0.3;
      carouselRef.current.style.transform = `translateY(${translateY}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      <div ref={carouselRef} className="transition-transform duration-300 ease-out">
        <Carousel className="h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-rich-black to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Data frameworks" className="object-cover h-full w-full parallax" data-speed="0.4" />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container-custom">
                <div className="max-w-xl text-white">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-4 animate-fade-in">
                    Applied Research Excellence
                  </span>
                  <h1 className="text-4xl font-bold mb-4 leading-tight md:text-5xl animate-slide-in">Transforming Theory Into Business Results</h1>
                  <p className="text-lg opacity-90 mb-6 animate-slide-in" style={{ animationDelay: '200ms' }}>
                    FAEI delivers research-powered frameworks and solutions that drive measurable organizational performance.
                  </p>
                  <div className="flex flex-wrap gap-4 animate-slide-in" style={{ animationDelay: '300ms' }}>
                    <Link to="/solutions" className="bg-white text-rich-black px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:scale-105">
                      Explore Solutions
                    </Link>
                    <Link to="/labs" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/10">
                      Visit Our Lab
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-rich-black to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Framework methodologies" className="object-cover h-full w-full" />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container-custom">
                <div className="max-w-xl text-white">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-4">
                    Research-Backed Insights
                  </span>
                  <h1 className="text-4xl font-bold mb-4 leading-tight md:text-5xl">Data-Driven Frameworks</h1>
                  <p className="text-lg opacity-90 mb-6">Access our curated knowledge base of methodologies and practical implementation strategies.</p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/resources" className="bg-white text-rich-black px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
                      Browse Resources
                    </Link>
                    <Link to="/contact" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/10">
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-rich-black to-transparent z-10" />
            <img src="https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Data analysis" className="object-cover h-full w-full" />
            <div className="absolute inset-0 flex items-center z-20">
              <div className="container-custom">
                <div className="max-w-xl text-white">
                  <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white/90 text-sm font-medium mb-4">
                    AI-Powered Innovation
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Future-Ready Operations</h1>
                  <p className="text-lg opacity-90 mb-6">Discover how our AI Enablement Lab creates tailored solutions for tomorrow's challenges.</p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/labs" className="bg-white text-rich-black px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg">
                      Discover the Lab
                    </Link>
                    <Link to="/about" className="bg-transparent border border-white text-white px-6 py-3 rounded-lg font-medium transition-all hover:bg-white/10">
                      About Our Approach
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;
