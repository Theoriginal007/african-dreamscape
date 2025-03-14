
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface CourseSectionProps {
  title: string;
  description: string;
  image: string;
  linkTo: string;
  delay?: number;
}

const CourseSection: React.FC<CourseSectionProps> = ({ 
  title, 
  description, 
  image, 
  linkTo,
  delay = 0 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Add a small delay for staggered animation
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  // Enhanced image preloading with fallbacks
  useEffect(() => {
    // Always show something after a short timeout
    const immediateTimeoutId = setTimeout(() => {
      setImageLoaded(true);
    }, 300);
    
    // Longer fallback
    const fallbackTimeoutId = setTimeout(() => {
      setImageLoaded(true);
    }, 1500);
    
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      clearTimeout(immediateTimeoutId);
      clearTimeout(fallbackTimeoutId);
    };
    
    img.onerror = () => {
      console.log('Image failed to load:', image);
      setImageLoaded(true);
      clearTimeout(immediateTimeoutId);
      clearTimeout(fallbackTimeoutId);
    };
    
    img.src = image;
    
    // Handle cached images
    if (img.complete || image.includes('/lovable-uploads/')) {
      setImageLoaded(true);
      clearTimeout(immediateTimeoutId);
      clearTimeout(fallbackTimeoutId);
    }
    
    return () => {
      clearTimeout(immediateTimeoutId);
      clearTimeout(fallbackTimeoutId);
    };
  }, [image]);

  return (
    <div 
      ref={sectionRef}
      className={`flex flex-col md:flex-row items-center gap-8 py-12 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="md:w-1/2 group">
        <div className="overflow-hidden rounded-lg shadow-lg relative">
          {/* Blurred placeholder while loading */}
          <div 
            className={`aspect-video w-full bg-africa-sand/20 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500 absolute inset-0`}
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(10px)'
            }}
          ></div>

          {/* Actual image */}
          <img 
            src={image} 
            alt={title}
            className={`aspect-video w-full object-cover transition-all duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            } ${isVisible ? 'scale-100' : 'scale-105'} group-hover:scale-105`}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-africa-earth/0 group-hover:bg-africa-earth/10 transition-colors duration-300"></div>
        </div>
      </div>
      
      <div className="md:w-1/2">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-africa-earth">{title}</h3>
          <p className="text-africa-coffee/90 leading-relaxed">{description}</p>
          <Link 
            to={linkTo}
            className="inline-flex items-center text-africa-terracotta hover:text-africa-clay transition-colors font-medium mt-2 group"
          >
            Learn more 
            <ChevronRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSection;
