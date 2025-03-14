import { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { ChevronLeft, Code, BookOpen, Globe, Server, CheckCircle2 } from 'lucide-react';

const PersonalJourney = () => {
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
          </div>
          
          {/* Right Column - Journey Content */}
          <div className="lg:col-span-2">
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
            
            <div className="africa-card">
              <h2 className="text-3xl font-bold text-africa-earth mb-6">Looking Forward</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-africa-coffee/90 leading-relaxed mb-4">
                  As I approach graduation, I'm excited to begin my professional journey in software engineering. I aim to join innovative companies like Microsoft or Google where I can contribute to technologies that positively impact millions of users while continuing to grow my technical expertise.
                </p>
                
                <p className="text-africa-coffee/90 leading-relaxed mb-4">
                  The knowledge I've gained from studying African civilizations will continue to inform my approach to technology development. I believe in creating inclusive technologies that recognize and respect diverse perspectives, histories, and needs—a value that will guide me throughout my career.
                </p>
                
                <p className="text-africa-coffee/90 leading-relaxed">
                  Beyond my immediate career goals, I'm laying the groundwork for eventually founding my own technology company. I envision a firm that not only creates cutting-edge solutions but also actively contributes to expanding access to technology education and opportunities in underserved communities.
                </p>
                
                <div className="flex justify-center mt-8">
                  <Link to="/aspirations" className="btn-primary">
                    Explore My Aspirations
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalJourney;
