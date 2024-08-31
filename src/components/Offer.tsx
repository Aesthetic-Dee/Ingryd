import React from 'react';
import { ArrowRight } from 'lucide-react';

import tech from '../assets/offerAssets/tech.avif';
import talent from '../assets/offerAssets/talent.avif';
import employee from '../assets/offerAssets/employee.avif';

interface OfferingProps {
  icon: string;
  title: string;
  description: string;
  ctaText: string;
  isComingSoon?: boolean;
}

const ActionLink: React.FC<{ text: string; isComingSoon?: boolean }> = ({ text, isComingSoon = false }) => (
  isComingSoon ? (
    <span className="text-pink-500 text-lg font-medium">{text}</span>
  ) : (
    <a href="#" className="flex gap-1 items-center text-pink-500 text-lg font-medium decoration-transparent underline group">
      {text}{' '}
      <ArrowRight size={20} className="ml-1 text-lg transition-transform duration-300 ease-in-out transform group-hover:translate-x-2"/>
    </a>
  )
);

const OfferingCard: React.FC<OfferingProps> = ({ icon, title, description, ctaText, isComingSoon = false }) => (
  <div className="text-base m-auto sm:m-0 w-[20rem] bg-white px-8 py-6 flex flex-col gap-1 rounded-lg shadow-xl transition-all duration-100 ease-in-out transform hover:shadow-lg group hover:animate-vibrate">
    <img src={icon} alt={title} className="w-12 h-8 mb-4" />
    <h3 className=" font-semibold mb-2">{title}</h3>
    <p className=" text-gray-600 mb-4">{description}</p>
    <ActionLink text={ctaText} isComingSoon={isComingSoon} />
  </div>
);

const Offer: React.FC = () => {
  const offerings = [
    {
      icon: talent,
      title: "Talent Outsourcing",
      description: "Access a flexible, cost-effective talent pool with tailored training for innovation through our tech staffing services.",
      ctaText: "Learn More",
    },
    {
      icon: tech,
      title: "Tech training",
      description: "High-quality custom training for mid-level tech professionals and company staff.",
      ctaText: "Learn More",
    },
    {
      icon: employee,
      title: "Employee Matching",
      description: "Our platform connects organizations with thousands of trained talents.",
      ctaText: "Coming soon!",
      isComingSoon: true,
    },
  ];

  return (
    <section className="font-Montserrat py-12 bg-gray-100 sm:mt-60">
      <div className="container lg:mx-auto lg:px-24 sm:px-9 ">
        <h2 className="hidden md:block text-4xl font-semibold text-center mb-12">What we offer</h2>
        <div className="grid grid-cols-1 sm:gap-5 md:grid-cols-3 ">
          {offerings.map((offering, index) => (
            <OfferingCard key={index} {...offering} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;