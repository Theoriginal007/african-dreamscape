
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

  // Optimized image loading
  useEffect(() => {
    // Fast initial render with placeholder
    setTimeout(() => {
      setImageLoaded(true);
    }, 100);
    
    // Use Intersection Observer to load images only when needed
    const loadImage = () => {
      const img = new Image();
      
      // Add loading optimization attributes
      img.loading = 'lazy';
      
      img.onload = () => {
        setImageLoaded(true);
      };
      
      img.onerror = () => {
        console.log('Image failed to load:', image);
        setImageLoaded(true);
      };
      
      // Optimize image URL with sizing parameters if applicable
      const imgUrl = new URL(image, window.location.origin);
      if (!imgUrl.searchParams.has('w') && !image.includes('/lovable-uploads/')) {
        imgUrl.searchParams.set('w', '800');
        imgUrl.searchParams.set('q', '80');
      }
      
      img.src = imgUrl.toString();
      
      // For cached images, set as loaded immediately
      if (img.complete || image.includes('/lovable-uploads/')) {
        setImageLoaded(true);
      }
    };
    
    // Create an observer for the image loading
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadImage();
            if (sectionRef.current) observer.unobserve(sectionRef.current);
          }
        },
        { rootMargin: '200px' } // Start loading before the image is in view
      );
      
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
      
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    } else {
      // Fallback for browsers without Intersection Observer
      loadImage();
    }
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
          {/* Optimized low-quality placeholder */}
          <div 
            className={`aspect-video w-full bg-africa-sand/20 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300 absolute inset-0`}
            style={{ 
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(8px)',
              transform: 'scale(1.05)'
            }}
          ></div>

          {/* Main image with optimized loading */}
          <img 
            src={image} 
            alt={title}
            loading="lazy"
            decoding="async"
            className={`aspect-video w-full object-cover transition-all duration-500 ${
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
