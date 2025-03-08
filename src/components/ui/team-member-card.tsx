
import { useState } from 'react';
import { User } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const TeamMemberCard = ({ name, role, imageUrl, bio }: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl transition-all duration-500 transform hover:-translate-y-2 shadow-[6px_6px_12px_#d1d1d1,-6px_-6px_12px_#ffffff] bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={name} 
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <User size={48} className="text-gray-400" />
          </div>
        )}
      </div>
      
      <div className="p-5 bg-white">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-champagne text-sm mb-3">{role}</p>
        <p className="text-stone-gray text-sm">{bio}</p>
      </div>
      
      <div 
        className={`absolute inset-0 bg-rich-black/90 backdrop-blur-sm flex items-center justify-center p-6 transition-all duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="text-white transform transition-transform duration-500">
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <p className="text-champagne text-sm mb-4">{role}</p>
          <p className="text-white/90 text-sm">{bio}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
