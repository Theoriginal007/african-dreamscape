
import React from 'react';
import { BookOpen } from 'lucide-react';
import TechSkillsSection from './TechSkillsSection';

const JourneyStory = () => {
  return (
    <div className="africa-card mb-8">
      <div className="flex items-center mb-4">
        <span className="inline-block px-2 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-xs font-medium">
          My Story
        </span>
      </div>
      
      <h2 className="text-3xl font-bold text-africa-earth mb-6">The Convergence of Technology and Culture</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-africa-coffee/90 leading-relaxed mb-4">
          As I approach the culmination of my Computer Science degree, I find myself reflecting on the unexpected intersections of my technical education and cultural studies. Taking the Foundations of African Civilization course alongside my programming and software engineering classes created a unique perspective that will shape my future career.
        </p>
        
        <p className="text-africa-coffee/90 leading-relaxed mb-4">
          My journey in computer science began with a fascination for solving problems and building systems. I've developed proficiency in multiple programming languages, frameworks, and development methodologies. Throughout my studies, I've particularly excelled in web development, database management, and algorithm design.
        </p>
        
        <TechSkillsSection />
        
        <p className="text-africa-coffee/90 leading-relaxed mb-4">
          In my final year, I've concentrated on preparing for a career in software engineering, with a particular focus on companies like Microsoft and Google that are at the forefront of technological innovation. I've completed internships that provided hands-on experience with industry-standard development practices and collaborative coding environments.
        </p>
        
        <h3 className="text-xl font-bold text-africa-earth mt-8 mb-4">The Impact of African Studies</h3>
        
        <p className="text-africa-coffee/90 leading-relaxed mb-4">
          Taking the Foundations of African Civilization course broadened my horizons beyond technical subjects. Learning about historical African empires like Songhai, with their remarkable achievements in scholarship, governance, and commerce, challenged me to think more deeply about the global history of innovation.
        </p>
        
        <p className="text-africa-coffee/90 leading-relaxed mb-4">
          This course helped me understand that technological advancement doesn't exist in a vacuum. The ways in which technologies are developed, deployed, and accessed are deeply influenced by historical contexts and cultural perspectives. Understanding Hegel's dismissive view of Africa and its contrast with historical reality highlighted for me how biases can become embedded in knowledge systems—a lesson directly applicable to the ethical challenges in technology today, from algorithmic bias to digital divide issues.
        </p>
        
        <div className="bg-africa-sand/20 rounded-lg p-4 my-6">
          <h3 className="text-lg font-semibold text-africa-earth mb-2 flex items-center">
            <BookOpen className="mr-2 h-5 w-5" />
            Key Learning
          </h3>
          <p className="text-africa-coffee/90 text-sm">
            Studying both computer science and African history has taught me that the most powerful innovations emerge when technology is developed with deep understanding of diverse human experiences and historical contexts. This interdisciplinary perspective will be invaluable as I pursue a career in an increasingly global tech industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default JourneyStory;
