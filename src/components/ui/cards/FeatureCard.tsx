
import { ReactNode } from 'react';
import Card from './Card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

export const FeatureCard = ({ title, description, icon, className = '' }: FeatureCardProps) => {
  return (
    <Card 
      className={`bg-off-white p-6 transition-all duration-300 ${className}`} 
      raised 
      hover
      intensity="medium"
      shape="rounded"
    >
      {icon && (
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne/10 text-champagne mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-stone-gray">{description}</p>
    </Card>
  );
};

export default FeatureCard;
