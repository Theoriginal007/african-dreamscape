
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProfileCard = () => {
  return (
    <div className="africa-card mb-8">
      <div className="mb-6 text-center">
        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-4 border-africa-sand">
          <img 
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Laura Gachanja"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-africa-earth">Laura Gachanja</h2>
        <p className="text-africa-coffee/80">Computer Science Student</p>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-africa-earth mb-2">About Me</h3>
          <p className="text-africa-coffee/90 text-sm leading-relaxed">
            I'm a final semester Computer Science student with a passion for software engineering and African history. I believe in technology's power to transform societies while remaining rooted in cultural understanding.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-africa-earth mb-2">Education</h3>
          <div className="space-y-2">
            <div className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-africa-gold mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-africa-coffee">Bachelor of Science in Computer Science</p>
                <p className="text-africa-coffee/70 text-sm">Expected Graduation: 2025</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-africa-gold mt-0.5 mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-africa-coffee">Foundations of African Civilization</p>
                <p className="text-africa-coffee/70 text-sm">Elective Course, 2025</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-africa-earth mb-2">Interests</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-africa-sand/30 text-africa-coffee rounded-full text-xs">Software Engineering</span>
            <span className="px-2 py-1 bg-africa-sand/30 text-africa-coffee rounded-full text-xs">Web Development</span>
            <span className="px-2 py-1 bg-africa-sand/30 text-africa-coffee rounded-full text-xs">AI & Machine Learning</span>
            <span className="px-2 py-1 bg-africa-sand/30 text-africa-coffee rounded-full text-xs">African History</span>
            <span className="px-2 py-1 bg-africa-sand/30 text-africa-coffee rounded-full text-xs">Technology Ethics</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
