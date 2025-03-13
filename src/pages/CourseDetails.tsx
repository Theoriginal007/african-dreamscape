
import { useEffect, useRef, useState } from 'react';
import HeroSection from '../components/HeroSection';
import VideoPlayer from '../components/VideoPlayer';
import { Link } from 'react-router-dom';
import { ChevronLeft, BookOpen, GraduationCap, Globe, MapPin, Coffee, Heart, Lightbulb } from 'lucide-react';

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
        backgroundImage="public/lovable-uploads/50d1a3f1-993d-4bd8-95ef-7f2fd6dc7ce8.png"
      />
      
      <div className="section-container">
        <Link to="/" className="inline-flex items-center text-africa-coffee hover:text-africa-gold transition-colors mb-8 group">
          <ChevronLeft className="mr-1 h-4 w-4 transform group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4 lg:sticky lg:top-24 lg:self-start">
            <div className="africa-card">
              <h3 className="text-xl font-bold text-africa-earth mb-4 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Course Topics
              </h3>
              
              <nav className="space-y-1">
                <button
                  onClick={() => scrollToSection('hegel')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeSection === 'hegel' 
                      ? 'bg-africa-sand/40 text-africa-earth' 
                      : 'text-africa-coffee hover:bg-africa-sand/20'
                  }`}
                >
                  Hegel's View on Africa
                </button>
                
                <button
                  onClick={() => scrollToSection('songhai')}
                  className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeSection === 'songhai' 
                      ? 'bg-africa-sand/40 text-africa-earth' 
                      : 'text-africa-coffee hover:bg-africa-sand/20'
                  }`}
                >
                  The Songhai Empire
                </button>
                
                <button
                  onClick={() => scrollToSection('colonization')}
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
          
          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="space-y-16">
              {/* Hegel Section */}
              <section id="hegel" ref={hegelRef} className="scroll-mt-24">
                <div className="africa-card">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-xs font-medium">
                      Philosophy & History
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-africa-earth mb-6">Hegel's View on Africa</h2>
                  
                  <div className="mb-8 overflow-hidden rounded-lg">
                    <img 
                      src="public/lovable-uploads/d3fe8e15-3f71-462c-b3a7-35e16cbb4517.png" 
                      alt="Traditional African warriors and cultural representation that Hegel failed to understand or appreciate"
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      G.W.F. Hegel, the influential German philosopher, presented a problematic and Eurocentric view of Africa in his work "The Philosophy of History." He controversially claimed that Africa was "no historical part of the world" and existed in what he called "the darkness of the night," outside his conception of world historical progress.
                    </p>
                    
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      Hegel's perspective exemplified the deeply flawed European intellectual tradition that denied Africa's rich history and diverse civilizations. He divided Africa into three regions and focused primarily on what he called "Africa proper" (sub-Saharan Africa), which he characterized as primitive and historically insignificant.
                    </p>
                    
                    <blockquote className="italic border-l-4 border-africa-gold pl-4 my-4 text-africa-coffee">
                      "At this point we leave Africa, not to mention it again. For it is no historical part of the World; it has no movement or development to exhibit." - G.W.F. Hegel
                    </blockquote>
                    
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      Modern scholarship has thoroughly dismantled Hegel's assertions. Archaeological, historical, and anthropological research has revealed the complex societies, political systems, technologies, and cultural achievements that flourished across Africa throughout history. These include the kingdoms of Ghana, Mali, and Songhai, the civilizations of Great Zimbabwe, Axum, and Kush, among countless others.
                    </p>
                    
                    <p className="text-africa-coffee/90 leading-relaxed">
                      Understanding Hegel's perspective is important not to perpetuate it, but to recognize how such Eurocentric philosophies shaped colonial attitudes and continue to influence perceptions of Africa. This critical examination allows us to appreciate the true depth and significance of African civilizations in world history.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-africa-earth mb-4">Scholarly Refutation</h3>
                    <VideoPlayer videoId="YWmGzq9uFAs" title="Unthinking Eurocentrism and Africa's History" />
                  </div>
                </div>
              </section>
              
              {/* Songhai Section */}
              <section id="songhai" ref={songhaiRef} className="scroll-mt-24">
                <div className="africa-card">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-xs font-medium">
                      Empire & Civilization
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-africa-earth mb-6">The Songhai Empire</h2>
                  
                  <div className="mb-8 overflow-hidden rounded-lg">
                    <img 
                      src="public/lovable-uploads/e97f9e53-936d-4697-ad99-bdec49856f9e.png" 
                      alt="Traditional African nobleman on horseback, reflecting the prestige and power of Songhai royalty"
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      The Songhai Empire stands as one of Africa's largest and most powerful pre-colonial states, dominating the western Sahel from the late 14th to the late 16th century. At its peak under Sonni Ali and Askia Mohammad I, it stretched across much of West Africa, encompassing parts of modern-day Mali, Niger, Nigeria, Senegal, Gambia, and Mauritania.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-6 my-6">
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold text-africa-earth mb-2">Political Structure</h3>
                        <p className="text-africa-coffee/90 text-sm leading-relaxed">
                          The empire was centrally governed from its capital at Gao, with a sophisticated administrative system that included provinces managed by appointed governors. The emperor (or Askia) controlled both military and civilian affairs, supported by a complex bureaucracy.
                        </p>
                      </div>
                      
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold text-africa-earth mb-2">Economic Prosperity</h3>
                        <p className="text-africa-coffee/90 text-sm leading-relaxed">
                          Songhai controlled crucial trans-Saharan trade routes, facilitating the exchange of gold, salt, textiles, and other goods. Its strategic location along the Niger River enhanced its economic power, allowing it to tax and regulate trade throughout the region.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      Timbuktu, one of the empire's major cities, flourished as a center of Islamic learning and scholarship. Its universities and libraries attracted scholars from across Africa and the Middle East, establishing it as an intellectual hub comparable to contemporary centers of learning in Europe and Asia.
                    </p>
                    
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      The fall of the Songhai Empire came in 1591 when it was defeated by a Moroccan expedition armed with firearms, technology that Songhai forces lacked. This defeat marked a turning point in West African history and gradually led to the fragmentation of the once-powerful empire into smaller states.
                    </p>
                    
                    <div className="bg-africa-sand/20 rounded-lg p-4 my-6">
                      <h3 className="text-lg font-semibold text-africa-earth mb-2 flex items-center">
                        <GraduationCap className="mr-2 h-5 w-5" />
                        Educational Significance
                      </h3>
                      <p className="text-africa-coffee/90 text-sm">
                        The University of Sankore in Timbuktu was one of the world's most important centers of learning during the 15th and 16th centuries. It housed an estimated 700,000 manuscripts on subjects ranging from astronomy and mathematics to philosophy and law.
                      </p>
                    </div>
                    
                    <p className="text-africa-coffee/90 leading-relaxed">
                      Studying the Songhai Empire provides a powerful counternarrative to Eurocentric histories that ignore Africa's sophisticated political, economic, and intellectual achievements. It demonstrates the continent's central role in global history and intercontinental exchange long before European colonization.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-africa-earth mb-4">The Songhai Empire: Historical Overview</h3>
                    <VideoPlayer videoId="TmCnIFH6fiE" title="The Songhai Empire" />
                  </div>
                </div>
              </section>
              
              {/* Colonization Section */}
              <section id="colonization" ref={colonizationRef} className="scroll-mt-24">
                <div className="africa-card">
                  <div className="flex items-center mb-4">
                    <span className="inline-block px-2 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-xs font-medium">
                      Colonial History
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-africa-earth mb-6">European Colonization of Africa</h2>
                  
                  <div className="mb-8 overflow-hidden rounded-lg">
                    <img 
                      src="public/lovable-uploads/5f5d5e2e-0cd6-496d-a760-4a2669b1c009.png" 
                      alt="Traditional African marketplace showing the vibrant economic activity that was later disrupted by colonization"
                      className="w-full h-64 object-cover object-center"
                    />
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      The European colonization of Africa, intensifying dramatically after the Berlin Conference of 1884-1885, represents one of history's most profound transformations of an entire continent. Within just a few decades, European powers partitioned nearly all of Africa, imposing foreign rule and dramatically reshaping societies, economies, and political structures that had evolved over millennia.
                    </p>
                    
                    <div className="bg-africa-sand/20 rounded-lg p-4 my-6">
                      <h3 className="text-lg font-semibold text-africa-earth mb-2 flex items-center">
                        <Globe className="mr-2 h-5 w-5" />
                        The Berlin Conference
                      </h3>
                      <p className="text-africa-coffee/90 text-sm">
                        In 1884-1885, European powers met in Berlin to negotiate their colonial claims in Africa. Remarkably, no African representatives were present at this conference that determined the continent's fate. The resulting "Scramble for Africa" led to arbitrary borders cutting across ethnic, cultural, and linguistic groups—boundaries that largely remain today.
                      </p>
                    </div>
                    
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      Colonial powers implemented various systems of rule, from direct administration in French colonies to indirect rule in British territories. These systems often exploited existing social divisions or created new hierarchies to facilitate control. Economic exploitation was central to colonialism, with African resources extracted to fuel European industrial growth while local development was neglected.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-6 my-6">
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold text-africa-earth mb-2">Cultural Impact</h3>
                        <p className="text-africa-coffee/90 text-sm leading-relaxed">
                          Colonialism profoundly disrupted indigenous cultural practices, religious beliefs, and social structures. Missionary activities spread Christianity, European languages became official in many regions, and traditional governance systems were undermined or abolished.
                        </p>
                      </div>
                      
                      <div className="md:w-1/2">
                        <h3 className="text-xl font-semibold text-africa-earth mb-2">Resistance Movements</h3>
                        <p className="text-africa-coffee/90 text-sm leading-relaxed">
                          African resistance to colonialism took many forms, from armed struggles like the Maji Maji Rebellion and the Ethiopian resistance to Italian invasion, to intellectual and cultural movements that preserved identity and laid foundations for later independence movements.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-africa-coffee/90 leading-relaxed mb-4">
                      The legacy of colonialism remains deeply embedded in contemporary Africa. Post-colonial states inherited artificial borders, extractive economic structures, and complex social divisions. The decades following independence in the mid-20th century brought new challenges as nations struggled to overcome colonial legacies while building unified societies.
                    </p>
                    
                    <blockquote className="italic border-l-4 border-africa-gold pl-4 my-4 text-africa-coffee">
                      "The tragedy of Africa is that the African has met the European in the wrong era of history, in the most predatory and untrustworthy of times." - Frantz Fanon
                    </blockquote>
                    
                    <p className="text-africa-coffee/90 leading-relaxed">
                      Understanding the history of European colonization is essential for comprehending contemporary African societies and their place in global systems. It reveals both the profound disruptions caused by colonial exploitation and the remarkable resilience of African peoples and cultures in the face of these challenges.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-africa-earth mb-4">The Scramble for Africa</h3>
                    <VideoPlayer videoId="RD3CSu8wJxw" title="The Scramble for Africa" />
                  </div>
                </div>
              </section>
              
              {/* What Appealed to Me */}
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
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
