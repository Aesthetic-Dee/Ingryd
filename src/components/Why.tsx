import React, { useState } from 'react';
import WhyBG from '../assets/whyAssets/Why-bg.avif';

const Why: React.FC = () => {
  return (
    <section className="font-Montserrat relative bg-cover bg-center py-16" style={{backgroundImage: `url(${WhyBG})`}}>
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-white text-center mb-4">Why INGRYD?</h2>
        <p className="text-xl text-white text-center mb-12">Unearthing the immense benefits of our programs.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <BenefitCard 
            title="For Tech Professionals" 
            description="Opportunities to learn in-demand & borderless tech skills and get employed post-training."
          />
          <BenefitCard 
            title="For the Organization" 
            description="Elite talent solutions for smooth onboarding and cost-effective recruitment."
          />
          <BenefitCard 
            title="For the Ecosystem" 
            description="Expand talent pipeline, drive corporate growth, enhance economic stability via strategic collaborations."
          />
        </div>
      </div>
    </section>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`rounded-lg p-6 shadow-lg transition-all duration-1000 ease-in-out
                  ${isHovered ? 'bg-blue-900 text-white' : 'bg-white text-gray-800'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Why;