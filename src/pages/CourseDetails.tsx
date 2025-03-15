
import React, { useState, useRef, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import CourseTopicsSidebar from '../components/course-details/CourseTopicsSidebar';
import HegelSection from '../components/course-details/HegelSection';
import SonghaiSection from '../components/course-details/SonghaiSection';
import ColonizationSection from '../components/course-details/ColonizationSection';
import CourseReflection from '../components/course-details/CourseReflection';

const CourseDetails = () => {
  const [activeSection, setActiveSection] = useState('hegel');
  
  const hegelRef = useRef<HTMLDivElement>(null);
  const songhaiRef = useRef<HTMLDivElement>(null);
  const colonizationRef = useRef<HTMLDivElement>(null);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Header offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      if (hegelRef.current && scrollPosition >= hegelRef.current.offsetTop && 
          songhaiRef.current && scrollPosition < songhaiRef.current.offsetTop) {
        setActiveSection('hegel');
      } else if (songhaiRef.current && scrollPosition >= songhaiRef.current.offsetTop && 
                colonizationRef.current && scrollPosition < colonizationRef.current.offsetTop) {
        setActiveSection('songhai');
      } else if (colonizationRef.current && scrollPosition >= colonizationRef.current.offsetTop) {
        setActiveSection('colonization');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        title="Foundations of African Civilization" 
        subtitle="Detailed exploration of key course topics that shaped my understanding of African history"
        backgroundImage="/lovable-uploads/50d1a3f1-993d-4bd8-95ef-7f2fd6dc7ce8.png"
      />
      
      <div className="section-container">
        <Link to="/" className="inline-flex items-center text-africa-coffee hover:text-africa-gold transition-colors mb-8 group">
          <ChevronLeft className="mr-1 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <CourseTopicsSidebar activeSection={activeSection} onSectionClick={scrollToSection} />
          
          <main className="lg:w-3/4">
            <div className="space-y-16">
              <HegelSection reference={hegelRef} />
              <SonghaiSection reference={songhaiRef} />
              <ColonizationSection reference={colonizationRef} />
              <CourseReflection />
            </div>
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;
