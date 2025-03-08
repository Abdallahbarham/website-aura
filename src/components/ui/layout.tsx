
import { useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrollTop * parseFloat(speed));
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background decorative elements with animations */}
      <div className="fixed -top-20 -left-20 w-72 h-72 bg-champagne/20 rounded-full filter blur-3xl opacity-50 animate-float z-0"></div>
      <div className="fixed top-1/3 -right-20 w-80 h-80 bg-oat/20 rounded-full filter blur-3xl opacity-50 animate-float-reverse z-0"></div>
      <div className="fixed -bottom-40 left-1/3 w-96 h-96 bg-cream-beige/20 rounded-full filter blur-3xl opacity-50 animate-scale-pulse z-0"></div>
      
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
