import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, Menu, X} from 'lucide-react';
import logo from '../assets/headerAssets/Ingryd-logo.avif';

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsHovered(true), 200); // 200ms delay
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setIsHovered(false), 200); // 200ms delay
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <li 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="flex items-center hover:text-[#8637ff] transition-colors duration-200">
        {title} {isHovered ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div 
        className={`absolute top-full left-0 bg-[#0f0629] text-white text-sm shadow-md rounded-md py-2 w-48 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 -translate-y-2 pointer-events-none z-0'
        }`}
      >
        {items.map((item, index) => (
          <a 
            key={index} 
            href="#" 
            className="block px-2 py-2 hover:text-pink-500 hover:text-lg hover:font-semibold transition-colors duration-200"
          >
            {item}
          </a>
        ))}
      </div>
    </li>
  );
};

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-[#0f0629] text-white py-0 font-Montserrat relative z-30">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <img className='w-24 md:w-36' src={logo} alt="Ingryd logo icon" />
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="sm:hidden">
          <ul className="flex items-center space-x-6 xl:space-x-10 text-base lg:text-xl">
            <li><a href="#" className="hover:text-pink-500 transition-colors duration-200">About us</a></li>
            <Dropdown 
              title="Techies" 
              items={['For Training', 'Find Jobs']} 
            />
            <Dropdown 
              title="Employers" 
              items={['Request Training', 'Request Staffing']} 
            />
            <li><a href="#" className="hover:text-pink-500 transition-colors duration-200">Scholarships</a></li>
            <Dropdown 
              title="Courses" 
              items={['Cybersecurity', 'Java and Spring Boot', 'Data Science', 'React.js', 'Node.js', 'Linux', 'DevOps', 'Product Management', 'IT Solution Sales']} 
            />
          </ul>
        </nav>

        {/* Navbar Button */}
        <div className="sm:hidden flex items-center space-x-4">
          <button className="border border-[#8637ff] text-[#8637ff] px-4 py-2 rounded-lg hover:bg-[#8637ff] hover:text-white transition-all duration-300">
            Sign In
          </button>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300">
            Sign up
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'} absolute top-full left-0 right-0 bg-[#0f0629] px-4 py-2`}>
          <ul className="space-y-2">
            <li><a href="#" className="block py-2 hover:text-pink-500 transition-colors duration-200">About us</a></li>
            <Dropdown title="Techies" items={['For Training', 'Find Jobs', 'Item 3']} />
            <Dropdown title="Employers" items={['Request Training', 'Request Staffing']} />
            <li><a href="#" className="block py-2 hover:text-pink-500 transition-colors duration-200">Scholarships</a></li>
            <Dropdown 
              title="Courses" 
              items={['Cybersecurity', 'Java and Spring Boot', 'Data Science', 'React.js', 'Node.js', 'Linux', 'DevOps', 'Product Management', 'IT Solution Sales']} 
            />
          </ul>
          <div className="mt-4 space-y-2">
            <button className="w-full border border-[#8637ff] text-[#8637ff] px-4 py-2 rounded-lg hover:bg-[#8637ff] hover:text-white transition-all duration-300">
              Sign In
            </button>
            <button className="w-full bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-all duration-300">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;