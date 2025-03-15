
import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Heart, Lightbulb } from 'lucide-react';

const CourseReflection = () => {
  return (
    <section className="africa-card">
      <h2 className="text-3xl font-bold text-africa-earth mb-6">What Appealed to Me Most</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-africa-coffee/90 leading-relaxed mb-4">
          Studying the Foundations of African Civilization profoundly changed my understanding of world history. What resonated most with me was discovering the depth and sophistication of African civilizations that have been systematically overlooked in traditional education.
        </p>
        
        <div className="bg-africa-sand/10 p-6 rounded-lg my-6 border-l-4 border-africa-gold">
          <h3 className="text-xl font-semibold text-africa-earth mb-3 flex items-center">
            <Coffee className="mr-2 h-5 w-5" /> 
            My "Wait, What?!" Moments
          </h3>
          
          <p className="text-africa-coffee/90 mb-4">When I tell people I've taken a course on African Civilization, they usually assume I'm talking about mud huts and tribal dances. The look on their faces when I mention the University of Sankore's 700,000 manuscripts is PRICELESS! 😂</p>
          
          <p className="text-africa-coffee/90 mb-4">I still laugh thinking about how Hegel, considered one of history's great philosophical minds, confidently wrote Africa off as having "no historical part of the World"... meanwhile, Mansa Musa was casually being the richest person in human history. Talk about missing the memo! 🤦‍♀️</p>
          
          <p className="text-africa-coffee/90">And let's be honest - European colonizers drawing random lines across a continent they barely understood is basically the geopolitical equivalent of a toddler scribbling on a map. "This part's mine!" "No, I want that bit!" History's most consequential tantrum. 😅</p>
        </div>
        
        <p className="text-africa-coffee/90 leading-relaxed mb-4">
          Learning about the Songhai Empire's remarkable achievements—its universities, libraries, and complex governance structures—challenged everything I had previously understood about pre-colonial Africa. The juxtaposition of these realities against Hegel's dismissive views highlighted how history has been filtered through Eurocentric lenses.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 my-6 bg-africa-sand/10 p-4 rounded-lg">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-africa-earth mb-2 flex items-center">
              <Heart className="mr-2 h-5 w-5" />
              Why You Should Care
            </h3>
            <p className="text-africa-coffee/90 text-sm leading-relaxed">
              For my fellow Gen Z friends: Understanding African history isn't just about dusty old facts—it's about questioning the narratives we've been fed. And let's be real, if we can spend hours analyzing Marvel timelines, we can definitely appreciate the epic saga of actual empires and kingdoms! #RealWorldBuilding
            </p>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold text-africa-earth mb-2 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5" />
              Mind = Blown Fact
            </h3>
            <p className="text-africa-coffee/90 text-sm leading-relaxed">
              While Europeans were still figuring out basic sanitation during the Middle Ages, Timbuktu had street lighting, public libraries, and universities with international students. Yeah, that Timbuktu—the same place sometimes used as slang for "middle of nowhere." The irony is too much! 🔥
            </p>
          </div>
        </div>
        
        <p className="text-africa-coffee/90 leading-relaxed mb-4">
          The course's examination of colonization's profound impacts gave me a deeper understanding of contemporary global inequalities and the resilience of African societies. It connected historical events to present realities in ways that felt immediately relevant and important.
        </p>
        
        <p className="text-africa-coffee/90 leading-relaxed">
          As someone studying computer science, this course broadened my perspective beyond technical fields. It reminded me that technological advancement must be paired with cultural understanding and historical awareness—a lesson I'll carry into my career as I work to create technology that respects and serves diverse communities. And who knows? Maybe my future tech company will help preserve and digitize those 700,000 manuscripts from Timbuktu that still need protection!
        </p>
      </div>
      
      <div className="flex justify-center mt-8">
        <Link to="/personal-journey" className="btn-primary">
          Explore My Personal Journey
        </Link>
      </div>
    </section>
  );
};

export default CourseReflection;
