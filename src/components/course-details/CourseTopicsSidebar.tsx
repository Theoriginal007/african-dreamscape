
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface CourseTopicsSidebarProps {
  activeSection: string;
  onSectionClick: (id: string) => void;
}

const CourseTopicsSidebar = ({ activeSection, onSectionClick }: CourseTopicsSidebarProps) => {
  return (
    <aside className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
      <div className="africa-card">
        <h3 className="text-xl font-bold text-africa-earth mb-4 flex items-center">
          <BookOpen className="mr-2 h-5 w-5" />
          Course Topics
        </h3>
        
        <nav className="space-y-1">
          <button
            onClick={() => onSectionClick('hegel')}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
              activeSection === 'hegel' 
                ? 'bg-africa-sand/40 text-africa-earth' 
                : 'text-africa-coffee hover:bg-africa-sand/20'
            }`}
          >
            Hegel's View on Africa
          </button>
          
          <button
            onClick={() => onSectionClick('songhai')}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
              activeSection === 'songhai' 
                ? 'bg-africa-sand/40 text-africa-earth' 
                : 'text-africa-coffee hover:bg-africa-sand/20'
            }`}
          >
            The Songhai Empire
          </button>
          
          <button
            onClick={() => onSectionClick('colonization')}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
              activeSection === 'colonization' 
                ? 'bg-africa-sand/40 text-africa-earth' 
                : 'text-africa-coffee hover:bg-africa-sand/20'
            }`}
          >
            European Colonization
          </button>
        </nav>
        
        <div className="mt-6 pt-6 border-t border-africa-sand/40">
          <h4 className="text-lg font-semibold text-africa-earth mb-2">What I Learned</h4>
          <p className="text-africa-coffee/80 text-sm">
            This course transformed my understanding of African history and challenged many misconceptions about the continent's past. The topics explored here were eye-opening and deeply influential in my academic development.
          </p>
          
          <Link to="/personal-journey" className="btn-secondary w-full mt-4 justify-center">
            My Personal Journey
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default CourseTopicsSidebar;
