
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import CourseSection from '../components/CourseSection';
import VideoPlayer from '../components/VideoPlayer';
import { BookOpen, User, Rocket } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection 
        title="Welcome to My Academic Journey" 
        subtitle="Join me, Laura Gachanja, as I share my experiences studying the Foundations of African Civilization and my path as a computer science student approaching graduation."
        backgroundImage="/lovable-uploads/d3fe8e15-3f71-462c-b3a7-35e16cbb4517.png"
      />
      
      <section className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-sm font-medium mb-4">
            E-Profile
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-africa-earth mb-4">Foundations of African Civilization</h2>
          <p className="text-africa-coffee/90 leading-relaxed">
            Exploring the rich history, diverse cultures, and profound impact of African civilizations on the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Link to="/course-details" className="africa-card group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-africa-sand/30 mb-4 group-hover:bg-africa-sand/50 transition-colors">
                <BookOpen className="w-8 h-8 text-africa-earth" />
              </div>
              <h3 className="text-xl font-bold text-africa-earth mb-2">Course Overview</h3>
              <p className="text-africa-coffee/80">Explore Hegel's view on Africa, the Songhai Empire, and the impacts of European colonization.</p>
            </div>
          </Link>
          
          <Link to="/personal-journey" className="africa-card group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-africa-sand/30 mb-4 group-hover:bg-africa-sand/50 transition-colors">
                <User className="w-8 h-8 text-africa-earth" />
              </div>
              <h3 className="text-xl font-bold text-africa-earth mb-2">Personal Journey</h3>
              <p className="text-africa-coffee/80">My experience as a computer science student approaching graduation.</p>
            </div>
          </Link>
          
          <Link to="/aspirations" className="africa-card group">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-africa-sand/30 mb-4 group-hover:bg-africa-sand/50 transition-colors">
                <Rocket className="w-8 h-8 text-africa-earth" />
              </div>
              <h3 className="text-xl font-bold text-africa-earth mb-2">Future Aspirations</h3>
              <p className="text-africa-coffee/80">My goals to work for leading tech companies and build my own tech firm.</p>
            </div>
          </Link>
        </div>
        
        <div className="appear-from-bottom" style={{ animationDelay: '300ms' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-africa-earth mb-8">Course Highlights</h2>
          
          <CourseSection 
            title="Hegel and Africa" 
            description="Examining Hegel's controversial perspectives on Africa and its place in world history, and how modern scholarship has challenged these views."
            image="/lovable-uploads/e45baccd-93e3-4f8e-8503-4f6c854e98bf.png"
            linkTo="/course-details"
            delay={100}
          />
          
          <CourseSection 
            title="The Songhai Empire" 
            description="Exploring one of Africa's largest and most powerful pre-colonial states that dominated West Africa in the 15th and 16th centuries."
            image="/lovable-uploads/e97f9e53-936d-4697-ad99-bdec49856f9e.png"
            linkTo="/course-details"
            delay={200}
          />
          
          <CourseSection 
            title="European Colonization" 
            description="Analyzing the profound impact of European colonization on African societies, economies, and cultures, and the legacy that continues today."
            image="/lovable-uploads/d5b3431d-6596-4a05-8763-6f6dbd2cab5a.png"
            linkTo="/course-details"
            delay={300}
          />
        </div>
      </section>
      
      <section className="bg-africa-sand/20 py-16">
        <div className="section-container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-africa-earth mb-4">Featured Content</h2>
            <p className="text-africa-coffee/90">Explore these videos to learn more about African history and civilization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="africa-card appear-from-bottom" style={{ animationDelay: '100ms' }}>
              <h3 className="text-xl font-bold text-africa-earth mb-4">The Songhai Empire</h3>
              <VideoPlayer videoId="8RhXSk0avhE" title="The Songhai Empire" />
              <p className="mt-4 text-africa-coffee/80">Learn about the rise and fall of the Songhai Empire, one of Africa's largest pre-colonial states.</p>
            </div>
            
            <div className="africa-card appear-from-bottom" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold text-africa-earth mb-4">The Scramble for Africa</h3>
              <VideoPlayer videoId="5uMF9j8FTtI" title="The Scramble for Africa" />
              <p className="mt-4 text-africa-coffee/80">Understand how European powers partitioned and colonized the African continent.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-africa-earth mb-4">Explore My Journey</h2>
          <p className="text-africa-coffee/90 max-w-3xl mx-auto mb-8">
            This e-profile showcases both my academic interests in African civilization and my professional path in computer science.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/course-details" className="btn-primary">
              Explore Course Details
            </Link>
            <Link to="/personal-journey" className="btn-secondary">
              Learn About My Journey
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
