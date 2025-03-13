
import { useState, useEffect, useRef } from 'react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoId, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [hasIntersected, setHasIntersected] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasIntersected(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div
      ref={containerRef}
      className="video-container w-full overflow-hidden rounded-lg shadow-md aspect-video relative"
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-africa-sand/20">
          <div className="h-12 w-12 rounded-full border-4 border-africa-gold border-t-transparent animate-spin"></div>
        </div>
      )}
      
      {hasIntersected && (
        <iframe
          ref={iframeRef}
          className={`w-full h-full transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
          src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleIframeLoad}
        ></iframe>
      )}
      
      {!hasIntersected && (
        <div className="absolute inset-0 bg-africa-coffee/10 backdrop-blur-sm flex items-center justify-center">
          <p className="text-africa-earth font-medium">Loading video...</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
