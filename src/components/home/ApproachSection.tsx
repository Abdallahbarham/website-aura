
import { BookOpen, Lightbulb, Users } from 'lucide-react';
import { FeatureCard } from '../ui/card';

const ApproachSection = () => {
  return (
    <div className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block py-1 px-3 rounded-full bg-champagne/10 text-champagne text-sm font-medium mb-4">
          Our Approach
        </span>
        <h2 className="text-3xl font-bold mb-6">What We Do</h2>
        <p className="text-stone-gray">
          At FAEI, we are committed to delivering unparalleled solutions through the integration of scientific research and practical management frameworks. Our multidisciplinary approach and research-driven methodologies enable us to address complex challenges across various functional areas.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard title="Professional Development" description="Our certification programs offer comprehensive training to enhance individual expertise and organizational capabilities through structured learning modules and practical applications." icon={<BookOpen size={24} />} />
        <FeatureCard title="Methodologies & Tools" description="Our unique set of research-driven analytical frameworks and tools help organizations systematically approach complex challenges with proven methodologies." icon={<Lightbulb size={24} />} />
        <FeatureCard title="Community & Insights" description="Join a vibrant community of professionals sharing best practices, case studies, and innovative approaches to solve real-world business challenges." icon={<Users size={24} />} />
      </div>
    </div>
  );
};

export default ApproachSection;
