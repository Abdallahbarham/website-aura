
import { ReactNode, useEffect, useRef, useState, forwardRef, ForwardedRef } from 'react';

export interface CardProps {
  className?: string;
  children: ReactNode;
  raised?: boolean;
  inset?: boolean;
  hover?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  backgroundColor?: string;
  textColor?: string;
  animateOnScroll?: boolean;
  border?: boolean;
  intensity?: 'light' | 'medium' | 'strong';
  shape?: 'rounded' | 'circle' | 'pill';
}

export const Card = forwardRef(({
  className = '',
  children,
  raised = false,
  inset = false,
  hover = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
  backgroundColor = '',
  textColor = '',
  animateOnScroll = false,
  border = false,
  intensity = 'medium',
  shape = 'rounded',
}: CardProps, ref: ForwardedRef<HTMLDivElement>) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const [isPressed, setIsPressed] = useState(false);
  
  useEffect(() => {
    if (!animateOnScroll) return;
    
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
    
    const elementRef = ref ? (ref as React.RefObject<HTMLDivElement>).current : internalRef.current;
    
    if (elementRef) {
      observer.observe(elementRef);
    }
    
    return () => {
      if (elementRef) {
        observer.unobserve(elementRef);
      }
    };
  }, [animateOnScroll, ref]);
  
  // Determine shape class
  const shapeClass = {
    rounded: 'rounded-xl',
    circle: 'rounded-full',
    pill: 'rounded-[30px]',
  }[shape];
  
  // Determine shadow intensity
  const getShadowClasses = () => {
    const baseIntensity = {
      light: {
        raised: 'shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]',
        inset: 'shadow-[inset_3px_3px_6px_#d1d1d1,inset_-3px_-3px_6px_#ffffff]',
        pressed: 'shadow-[inset_2px_2px_5px_#d1d1d1,inset_-2px_-2px_5px_#ffffff]'
      },
      medium: {
        raised: 'shadow-[5px_5px_10px_#d1d1d1,-5px_-5px_10px_#ffffff]',
        inset: 'shadow-[inset_5px_5px_10px_#d1d1d1,inset_-5px_-5px_10px_#ffffff]',
        pressed: 'shadow-[inset_4px_4px_8px_#d1d1d1,inset_-4px_-4px_8px_#ffffff]'
      },
      strong: {
        raised: 'shadow-[8px_8px_16px_#d1d1d1,-8px_-8px_16px_#ffffff]',
        inset: 'shadow-[inset_8px_8px_16px_#d1d1d1,inset_-8px_-8px_16px_#ffffff]',
        pressed: 'shadow-[inset_6px_6px_12px_#d1d1d1,inset_-6px_-6px_12px_#ffffff]'
      }
    };
    
    if (isPressed) {
      return baseIntensity[intensity].pressed;
    }
    
    if (inset) {
      return baseIntensity[intensity].inset;
    }
    
    if (raised) {
      return baseIntensity[intensity].raised;
    }
    
    return '';
  };
  
  const handleMouseDown = () => {
    if (hover) setIsPressed(true);
  };
  
  const handleMouseUp = () => {
    if (hover) setIsPressed(false);
  };
  
  // Base classes and conditionally added classes
  const baseClasses = "overflow-hidden border-transparent transition-all duration-300";
  const hoverClasses = hover && !isPressed
    ? "hover:shadow-[3px_3px_6px_#d1d1d1,-3px_-3px_6px_#ffffff]"
    : "";
  const bgColorClass = backgroundColor || 'bg-off-white';
  const textColorClass = textColor || '';
  const animateClass = animateOnScroll ? 'opacity-0' : '';
  const borderClass = border ? 'border border-gray-200' : 'border-0';
  const shadowClass = getShadowClasses();
  
  return (
    <div 
      ref={ref || internalRef}
      className={`${baseClasses} ${shapeClass} ${shadowClass} ${hoverClasses} ${bgColorClass} ${textColorClass} ${animateClass} ${borderClass} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
