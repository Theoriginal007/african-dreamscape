import React from 'react';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Rocket, Users, Code, Building, Award, Globe } from 'lucide-react';

const Aspirations = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        title="My Future Aspirations" 
        subtitle="Charting my path forward in technology and beyond"
        backgroundImage="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
      />
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-sm font-medium mb-4">
              Future Goals
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-africa-earth mb-4">Building My Technology Career</h2>
            <p className="text-africa-coffee/90 leading-relaxed">
              As I approach the completion of my computer science degree, I'm excited about the journey ahead and the impact I hope to make in the tech industry.
            </p>
          </div>
          
          {/* Career Aspirations */}
          <section className="africa-card mb-12">
            <h3 className="text-2xl font-bold text-africa-earth mb-6 flex items-center">
              <Rocket className="mr-3 h-6 w-6 text-africa-gold" />
              Career Aspirations
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-africa-coffee/90 leading-relaxed mb-4">
                My journey in computer science has prepared me for exciting challenges in software engineering. Upon graduation, I aim to join a leading technology company where I can apply my skills while continuing to learn and grow professionally.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-africa-sand/10 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Building className="h-5 w-5 text-africa-gold mr-2" />
                    <h4 className="text-lg font-semibold text-africa-earth">Microsoft</h4>
                  </div>
                  <p className="text-sm text-africa-coffee/80">
                    I'm drawn to Microsoft's innovative work in cloud computing, AI, and developer tools. Their commitment to accessibility and global impact aligns with my values.
                  </p>
                </div>
                
                <div className="bg-africa-sand/10 rounded-lg p-6">
                  <div className="flex items-center mb-3">
                    <Globe className="h-5 w-5 text-africa-gold mr-2" />
                    <h4 className="text-lg font-semibold text-africa-earth">Google</h4>
                  </div>
                  <p className="text-sm text-africa-coffee/80">
                    Google's culture of innovation and emphasis on solving complex problems at scale excites me. I'm particularly interested in their work on search technology and AI solutions.
                  </p>
                </div>
              </div>
              
              <p className="text-africa-coffee/90 leading-relaxed mb-4">
                Beyond joining an established company, I aspire to grow into leadership roles where I can mentor others and contribute to technical direction. I believe my background studying diverse cultures and histories gives me a unique perspective that can help build more inclusive and globally relevant technology.
              </p>
              
              <p className="text-africa-coffee/90 leading-relaxed">
                Throughout my career, I'll continue learning new technologies and methodologies, pursuing certifications, and potentially advanced degrees to deepen my expertise in specialized areas of computer science.
              </p>
            </div>
          </section>
          
          {/* Entrepreneurial Vision */}
          <section className="africa-card mb-12">
            <h3 className="text-2xl font-bold text-africa-earth mb-6 flex items-center">
              <Users className="mr-3 h-6 w-6 text-africa-gold" />
              Entrepreneurial Vision
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-africa-coffee/90 leading-relaxed mb-4">
                One of my long-term goals is to establish my own technology firm. I envision creating a company that develops innovative solutions with a focus on addressing challenges unique to Africa and other developing regions.
              </p>
              
              <div className="relative border-l-2 border-africa-sand/50 pl-6 my-8 py-2">
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-africa-earth">Year 1-3: Industry Experience</h4>
                    <p className="text-sm text-africa-coffee/80">
                      Gain valuable experience working at established tech companies, building my technical skills and understanding of industry best practices.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-africa-earth">Year 3-5: Idea Development</h4>
                    <p className="text-sm text-africa-coffee/80">
                      Begin developing my business concept while networking and identifying potential co-founders and mentors with complementary skills.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-africa-earth">Year 5+: Launch and Growth</h4>
                    <p className="text-sm text-africa-coffee/80">
                      Launch my technology firm focused on creating innovative solutions that address real-world problems, particularly those relevant to African contexts.
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-africa-coffee/90 leading-relaxed">
                I believe there's tremendous opportunity to develop technologies that consider the unique challenges and opportunities of diverse global contexts. My company will prioritize inclusive design, sustainability, and creating technologies that empower communities.
              </p>
            </div>
          </section>
          
          {/* Technology Focus */}
          <section className="africa-card mb-12">
            <h3 className="text-2xl font-bold text-africa-earth mb-6 flex items-center">
              <Code className="mr-3 h-6 w-6 text-africa-gold" />
              Technology Focus
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-africa-coffee/90 leading-relaxed mb-6">
                I'm particularly interested in these technology areas that I believe will be transformative in the coming years:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-africa-sand/10 rounded-lg p-4">
                  <h4 className="font-semibold text-africa-earth mb-2">AI and Machine Learning</h4>
                  <p className="text-sm text-africa-coffee/80">
                    Developing AI solutions that can work effectively with limited data and infrastructure, making these technologies more accessible globally.
                  </p>
                </div>
                
                <div className="bg-africa-sand/10 rounded-lg p-4">
                  <h4 className="font-semibold text-africa-earth mb-2">Mobile-First Development</h4>
                  <p className="text-sm text-africa-coffee/80">
                    Creating robust applications that perform well on a variety of devices, recognizing that mobile is the primary computing platform in many regions.
                  </p>
                </div>
                
                <div className="bg-africa-sand/10 rounded-lg p-4">
                  <h4 className="font-semibold text-africa-earth mb-2">Fintech Solutions</h4>
                  <p className="text-sm text-africa-coffee/80">
                    Exploring how technology can improve financial inclusion and services in underserved markets, building on innovations like mobile money.
                  </p>
                </div>
                
                <div className="bg-africa-sand/10 rounded-lg p-4">
                  <h4 className="font-semibold text-africa-earth mb-2">EdTech Platforms</h4>
                  <p className="text-sm text-africa-coffee/80">
                    Developing educational technology that respects diverse learning contexts and can function reliably in varying infrastructure conditions.
                  </p>
                </div>
              </div>
              
              <p className="text-africa-coffee/90 leading-relaxed">
                These technology areas align with my interests in creating impactful solutions that are globally relevant while addressing specific regional needs. My education in both computer science and African history gives me a unique perspective on developing technologies that are culturally informed and contextually appropriate.
              </p>
            </div>
          </section>
          
          {/* Personal Growth */}
          <section className="africa-card">
            <h3 className="text-2xl font-bold text-africa-earth mb-6 flex items-center">
              <Award className="mr-3 h-6 w-6 text-africa-gold" />
              Personal Growth
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-africa-coffee/90 leading-relaxed mb-4">
                Beyond my professional aspirations, I'm committed to personal growth and giving back to the community:
              </p>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="bg-africa-sand/30 text-africa-coffee rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-africa-coffee/90">
                    <strong className="text-africa-earth">Mentorship:</strong> I plan to mentor young women interested in STEM fields, helping to increase diversity in technology.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-africa-sand/30 text-africa-coffee rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-africa-coffee/90">
                    <strong className="text-africa-earth">Continuous Learning:</strong> Technology evolves rapidly, and I'm committed to lifelong learning to stay at the forefront of innovations.
                  </span>
                </li>
                
                <li className="flex items-start">
                  <span className="bg-africa-sand/30 text-africa-coffee rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-africa-coffee/90">
                    <strong className="text-africa-earth">Cultural Bridge:</strong> I hope to serve as a bridge between technology and cultural understanding, bringing diverse perspectives to tech development.
                  </span>
                </li>
              </ul>
              
              <p className="text-africa-coffee/90 leading-relaxed">
                My journey through university has taught me the value of combining technical expertise with cultural and historical understanding. As I move forward in my career, I'm excited to bring this interdisciplinary perspective to creating technology that is truly global in its outlook and impact.
              </p>
            </div>
            
            <div className="flex justify-center mt-8">
              <Link to="/personal-journey" className="btn-secondary mr-4">
                My Personal Journey
              </Link>
              <Link to="/course-details" className="btn-primary">
                Course Details
              </Link>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Aspirations;
