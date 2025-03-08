
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <span className="inline-block py-1 px-3 rounded-full bg-champagne/10 text-champagne text-sm font-medium mb-4">
          Who We Are
        </span>
        <h2 className="text-3xl font-bold mb-6">About FAEI</h2>
        <p className="text-stone-gray mb-6">
          FAEI is a research organization focused on improving operational efficiency across various functions. We identify innovative solutions by intertwining between science and management principles, utilizing our Functional Area Management Framework and specialized research methodologies to create implementable frameworks covering areas such as Marketing, Sales, and Artificial Intelligence.
        </p>
        <p className="text-stone-gray mb-8">
          A FAEI certification enables your teams to optimize decision making in your role. It helps you achieve business success and deliver genuine business value with implementations of change through data-driven processes and frameworks suited to fulfill your organization's capabilities in your industry vertical.
        </p>
        <Link to="/about" className="neumorph-button inline-flex items-center hover:text-champagne">
          Find Out More <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      <div className="neumorph p-6">
        <img alt="FAEI Framework" className="rounded-lg w-full h-auto" src="/lovable-uploads/fe1c7bd3-d4bf-41e7-9356-389a9b009e51.png" />
      </div>
    </div>
  );
};

export default AboutSection;
