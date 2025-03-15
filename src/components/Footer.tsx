
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-africa-earth/5 py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-africa-earth mb-4">Laura Gachanja</h3>
            <p className="text-africa-coffee/80 mb-6 max-w-md">
              A computer science student passionate about African history and civilization, 
              documenting my academic journey and aspirations.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-africa-earth mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/course-details" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">Course Details</Link>
              </li>
              <li>
                <Link to="/personal-journey" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">Personal Journey</Link>
              </li>
              <li>
                <Link to="/aspirations" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">Aspirations</Link>
              </li>
              <li>
                <Link to="/contact" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-africa-earth mb-4">Course Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://en.wikipedia.org/wiki/Songhai_Empire" target="_blank" rel="noopener noreferrer" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">
                  Songhai Empire
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Philosophy_of_history" target="_blank" rel="noopener noreferrer" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">
                  Hegel's Philosophy
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/Colonisation_of_Africa" target="_blank" rel="noopener noreferrer" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">
                  European Colonization
                </a>
              </li>
              <li>
                <a href="https://en.wikipedia.org/wiki/History_of_Africa" target="_blank" rel="noopener noreferrer" className="text-africa-coffee/80 hover:text-africa-earth transition-colors">
                  African History
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-africa-sand/20">
          <p className="text-center text-sm text-africa-coffee/70">
            © {currentYear} Laura Gachanja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
