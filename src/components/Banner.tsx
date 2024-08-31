import React, { useState, useEffect } from 'react';
import BannerImageOne from '../assets/bannerAssets/banner-image-one.avif';
import BannerImageTwo from '../assets/bannerAssets/banner-image-two.avif';
import BannerImageThree from '../assets/bannerAssets/banner-image-three.avif';

interface BannerData {
  title: string;
  subtitle: string;
  backgroundImage: string;
  highlightWord?: string;
}

const bannerData: BannerData[] = [
  {
    title: "Request custom training for your organization",
    subtitle: "Tap into our extensive database of ready tech experts to reinforce your staff and drive cutting-edge innovations",
    backgroundImage: BannerImageOne,
  },
  {
    title: "Revolutionise Your Business with Tailored Tech Solutions",
    subtitle: "Stay ahead of the growth curve in your industry. Leverage on our advanced IT solutions for growth and expansion.",
    backgroundImage: BannerImageTwo,
  },
  {
    title: "Building the next generation of Africa's most competitive Talent",
    subtitle: "We raise tech stars and connect them to a world of opportunities",
    backgroundImage: BannerImageThree,
    highlightWord: "Talent",
  },
];

const Banner: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
        setIsAnimating(false);
      }, 500); // This should match the animation duration
    }, 5000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerData[currentBannerIndex];

  const renderTitle = (title: string, highlightWord?: string) => {
    if (!highlightWord) return title;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-pink-500">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden font-Montserrat">
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{ backgroundImage: `url(${currentBanner.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        <h1 
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-2 sm:mb-4 transition-opacity duration-500 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {renderTitle(currentBanner.title, currentBanner.highlightWord)}
        </h1>
        <p 
          className={`text-base sm:text-lg md:text-xl text-center mb-4 sm:mb-6 md:mb-8 transition-all duration-500 transform ${
            isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
        >
          {currentBanner.subtitle}
        </p>
        <button className="bg-pink-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-base sm:text-lg transition-all duration-500 ease-in-out hover:bg-slate-800 hover:text-pink-500 hover:border-2 hover:border-pink-500 hover:scale-105">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Banner;