
import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProfileCard from '../components/personal-journey/ProfileCard';
import SkillsCard from '../components/personal-journey/SkillsCard';
import JourneyStory from '../components/personal-journey/JourneyStory';
import FutureAspirations from '../components/personal-journey/FutureAspirations';

const PersonalJourney = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        title="My Personal Journey" 
        subtitle="Laura Gachanja - Computer Science Student & African History Enthusiast"
        backgroundImage="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="section-container">
        <Link to="/" className="inline-flex items-center text-africa-coffee hover:text-africa-gold transition-colors mb-8 group">
          <ChevronLeft className="mr-1 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-1">
            <ProfileCard />
            <SkillsCard />
          </div>
          
          {/* Right Column - Journey Content */}
          <div className="lg:col-span-2">
            <JourneyStory />
            <FutureAspirations />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PersonalJourney;
