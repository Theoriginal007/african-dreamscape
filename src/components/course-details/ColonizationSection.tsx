
import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import { Globe } from 'lucide-react';

interface ColonizationSectionProps {
  reference: React.RefObject<HTMLDivElement>;
}

const ColonizationSection = ({ reference }: ColonizationSectionProps) => {
  return (
    <section id="colonization" ref={reference} className="scroll-mt-24">
      <div className="africa-card">
        <div className="flex items-center mb-4">
          <span className="inline-block px-2 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-xs font-medium">
            Colonial History
          </span>
        </div>
        
        <h2 className="text-3xl font-bold text-africa-earth mb-6">European Colonization of Africa</h2>
        
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/d5b3431d-6596-4a05-8763-6f6dbd2cab5a.png" 
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
          <VideoPlayer videoId="CgzSnZidGuU" title="The Scramble for Africa" />
        </div>
      </div>
    </section>
  );
};

export default ColonizationSection;
