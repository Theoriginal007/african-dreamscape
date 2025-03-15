
import React from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import { GraduationCap } from 'lucide-react';

interface SonghaiSectionProps {
  reference: React.RefObject<HTMLDivElement>;
}

const SonghaiSection = ({ reference }: SonghaiSectionProps) => {
  return (
    <section id="songhai" ref={reference} className="scroll-mt-24">
      <div className="africa-card">
        <div className="flex items-center mb-4">
          <span className="inline-block px-2 py-1 rounded-full bg-africa-sand/30 text-africa-coffee text-xs font-medium">
            Empire & Civilization
          </span>
        </div>
        
        <h2 className="text-3xl font-bold text-africa-earth mb-6">The Songhai Empire</h2>
        
        <div className="mb-8 overflow-hidden rounded-lg">
          <img 
            src="/lovable-uploads/e97f9e53-936d-4697-ad99-bdec49856f9e.png" 
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
          <VideoPlayer videoId="GfUT6LhBBYs" title="The Songhai Empire" />
        </div>
      </div>
    </section>
  );
};

export default SonghaiSection;
