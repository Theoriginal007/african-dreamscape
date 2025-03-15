
import React from 'react';
import { Code, Globe, Server } from 'lucide-react';

const TechSkillsSection = () => {
  return (
    <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="africa-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-africa-sand/30 mb-3">
            <Code className="w-6 h-6 text-africa-earth" />
          </div>
          <h3 className="text-lg font-semibold text-africa-earth mb-1">Programming</h3>
          <p className="text-africa-coffee/80 text-sm">
            Mastered multiple languages and frameworks for diverse applications
          </p>
        </div>
      </div>
      
      <div className="africa-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-africa-sand/30 mb-3">
            <Globe className="w-6 h-6 text-africa-earth" />
          </div>
          <h3 className="text-lg font-semibold text-africa-earth mb-1">Web Development</h3>
          <p className="text-africa-coffee/80 text-sm">
            Created responsive, accessible web applications with modern frameworks
          </p>
        </div>
      </div>
      
      <div className="africa-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-africa-sand/30 mb-3">
            <Server className="w-6 h-6 text-africa-earth" />
          </div>
          <h3 className="text-lg font-semibold text-africa-earth mb-1">Backend Systems</h3>
          <p className="text-africa-coffee/80 text-sm">
            Developed scalable server architectures and database solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechSkillsSection;
