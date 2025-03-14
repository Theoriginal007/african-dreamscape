
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1489391013510-49401c8a3b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
}) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / 700;
      setScrollOpacity(Math.max(0, Math.min(1, newOpacity)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // Optimized image preloading with priority loading
  useEffect(() => {
    // Show placeholder immediately for better perceived performance
    setTimeout(() => {
      setImageLoaded(true);
    }, 100);
    
    // Preload image with low quality placeholder and higher priority
    const img = new Image();
    
    // Priority loading
    img.loading = 'eager';
    img.fetchPriority = 'high';
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      console.log('Image failed to load:', backgroundImage);
      setImageLoaded(true);
    };
    
    // Add size hints for the browser
    const imgUrl = new URL(backgroundImage, window.location.origin);
    if (!imgUrl.searchParams.has('w')) {
      imgUrl.searchParams.set('w', '1600');
    }
    if (!imgUrl.searchParams.has('q')) {
      imgUrl.searchParams.set('q', '80');
    }
    
    img.src = imgUrl.toString();
    
    // Force immediate loading for local uploads or cached images
    if (backgroundImage.includes('/lovable-uploads/') || img.complete) {
      setImageLoaded(true);
    }
    
  }, [backgroundImage]);

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      {/* Blurred placeholder while loading */}
      <div 
        className={`absolute inset-0 bg-africa-sand/30 ${imageLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={{ 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}
      ></div>

      {/* Background image with optimized loading */}
      <div 
        className={`absolute inset-0 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: `scale(${1 + (1 - scrollOpacity) * 0.1})`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>

      {/* Content overlay */}
      <div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        style={{ opacity: scrollOpacity }}
      >
        <div className="max-w-4xl animate-scale-in">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading leading-tight">
            {title}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mt-4 mb-8">
            {subtitle}
          </p>
          <div className="mt-8 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </div>
  );
};

export default HeroSection;
