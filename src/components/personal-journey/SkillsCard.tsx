
import React, { useRef, useEffect } from 'react';

const SkillsCard = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.skill-bar-fill');
          bars.forEach((bar, index) => {
            setTimeout(() => {
              (bar as HTMLElement).style.width = (bar as HTMLElement).dataset.width || '0%';
            }, index * 100);
          });
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1
    });
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="africa-card" ref={skillsRef}>
      <h3 className="text-lg font-semibold text-africa-earth mb-4">Technical Skills</h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-africa-coffee">JavaScript/TypeScript</span>
            <span className="text-xs text-africa-coffee/70">90%</span>
          </div>
          <div className="w-full h-2 bg-africa-sand/30 rounded-full overflow-hidden">
            <div className="skill-bar-fill h-full bg-africa-gold rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="90%"></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-africa-coffee">React & Frontend Frameworks</span>
            <span className="text-xs text-africa-coffee/70">85%</span>
          </div>
          <div className="w-full h-2 bg-africa-sand/30 rounded-full overflow-hidden">
            <div className="skill-bar-fill h-full bg-africa-gold rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="85%"></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-africa-coffee">Python</span>
            <span className="text-xs text-africa-coffee/70">80%</span>
          </div>
          <div className="w-full h-2 bg-africa-sand/30 rounded-full overflow-hidden">
            <div className="skill-bar-fill h-full bg-africa-gold rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="80%"></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-africa-coffee">Backend Development</span>
            <span className="text-xs text-africa-coffee/70">75%</span>
          </div>
          <div className="w-full h-2 bg-africa-sand/30 rounded-full overflow-hidden">
            <div className="skill-bar-fill h-full bg-africa-gold rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="75%"></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-africa-coffee">Cloud Computing</span>
            <span className="text-xs text-africa-coffee/70">70%</span>
          </div>
          <div className="w-full h-2 bg-africa-sand/30 rounded-full overflow-hidden">
            <div className="skill-bar-fill h-full bg-africa-gold rounded-full transition-all duration-1000 ease-out" style={{ width: '0%' }} data-width="70%"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
