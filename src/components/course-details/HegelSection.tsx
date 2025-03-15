
import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';

interface HegelSectionProps {
  reference: React.RefObject<HTMLDivElement>;
}

const HegelSection = ({ reference }: HegelSectionProps) => {
  return (
    <section id="hegel" ref={reference} className="scroll-mt-24">
      <div className="africa-card">
        <div className="flex items-center mb-4">
          <span className="inline-block px-2 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-xs font-medium">
            Philosophy & History
          </span>
        </div>
        
        <h2 className="text-3xl font-bold text-africa-earth mb-6">Hegel's View on Africa</h2>
        
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/e45baccd-93e3-4f8e-8503-4f6c854e98bf.png" 
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
          <VideoPlayer videoId="dNeSOyZjWF0" title="Unthinking Eurocentrism and Africa's History" />
        </div>
      </div>
    </section>
  );
};

export default HegelSection;
