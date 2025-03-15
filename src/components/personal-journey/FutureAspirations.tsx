
import React from 'react';
import { Link } from 'react-router-dom';

const FutureAspirations = () => {
  return (
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
  );
};

export default FutureAspirations;
