import React from "react";
import { ArrowRight } from 'lucide-react';
import custom from "../assets/customAssets/custom-image.avif";
import training from "../assets/customAssets/custom-training-icon.svg";
import outsourcing from "../assets/customAssets/custom-outsourcing-icon.svg";

const Custom: React.FC = () => {
    return (
      <div className="flex flex-col h-[550px] md:flex-row bg-gray-100 font-Montserrat">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2">
          <img 
            src={custom} 
            alt="Office workspace" 
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Right side - Content */}
        <div className="w-full md:w-1/2 bg-[#0f0629] text-white p-8 flex flex-col justify-center">
          
          {/* Custom Training Section */}
          <div className="mb-8 flex items-start">
            <div className="bg-pink-500 p-3 rounded-lg mr-4">
              <img className="w-28 h-12" src={training} alt="training icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Get Custom Training</h3>
              <p className="text-gray-300 mb-2">
                Whether you seek to upskill or expand your workforce, our custom tailored training programs deliver tangible, impactful results you desire
              </p>
              <a href="#" className="text-white text-pink-500 hover:text-pink-400 underline inline-flex items-center group">
                Learn More{' '}
                <ArrowRight size={20} className="ml-1 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2"/>
              </a>
            </div>
          </div>
  
          {/* Outsourcing Section */}
          <div className="flex items-start">
            <div className="bg-pink-500 p-3 rounded-lg mr-4">
              <img className="w-36 h-12" src={outsourcing} alt="outsourcing icon" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Outsourcing Simplified</h3>
              <p className="text-gray-300 mb-2">
                Seeking top-tier software engineers? Access our network of meticulously vetted professionals, available for flexible 3-6 months contracts or full-time employment tailored to your precise needs.
              </p>
              <a href="#" className="text-white text-pink-500 hover:text-pink-400 underline inline-flex items-center group">
                Learn More{' '}
                <ArrowRight size={20} className="ml-1 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Custom;