import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Labs', path: '/labs' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/95 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'
      } ${isHovered && !scrolled ? 'bg-white/80 backdrop-blur-sm' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center"
        >
          <img 
            src="/lovable-uploads/e4bf9be8-0dd9-40ba-a8eb-f7ec76ca64a5.png" 
            alt="FAEI Logo" 
            className="h-8 md:h-10" 
          />
        </Link>
        
        <div className="hidden md:flex space-x-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                isActive(link.path)
                  ? 'bg-off-white text-charcoal-gray font-semibold shadow-neumorph-pressed'
                  : 'bg-off-white text-stone-gray shadow-neumorph-sm hover:shadow-neumorph-md hover:text-charcoal-gray active:shadow-neumorph-pressed'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden md:flex space-x-4">
          <button className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md active:shadow-neumorph-pressed text-rich-black text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300">
            Sign In
          </button>
          <button className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md active:shadow-neumorph-pressed text-champagne text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300">
            Get Started
          </button>
        </div>
        
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md active:shadow-neumorph-pressed rounded-full transition-all duration-300"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden pt-20`}
      >
        <div className="container-custom flex flex-col space-y-4 py-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-3 text-sm font-medium transition-all duration-300 rounded-lg ${
                isActive(link.path)
                  ? 'bg-off-white text-charcoal-gray font-semibold shadow-neumorph-pressed'
                  : 'bg-off-white text-stone-gray shadow-neumorph-sm hover:shadow-neumorph-md hover:text-charcoal-gray active:shadow-neumorph-pressed'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 flex flex-col space-y-4">
          <Link
            to="src/components/admin/AdminLogin.tsx"
            className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md active:shadow-neumorph-pressed text-rich-black text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 w-full block"
          >
            Sign In
          </Link> 
            <button className="bg-off-white shadow-neumorph-sm hover:shadow-neumorph-md active:shadow-neumorph-pressed text-champagne text-sm font-medium px-4 py-3 rounded-lg transition-all duration-300 w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
