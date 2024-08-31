import React from 'react';
import Facebook from '../assets/footerAssets/facebook.avif';
import FooterLogo from '../assets/footerAssets/footer-logo.avif';
import Insta from '../assets/footerAssets/insta.avif';
import LinkedIn from '../assets/footerAssets/linkedIn.avif';
import Twitter from '../assets/footerAssets/twitter.avif';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-5 px-4 font-Montserrat">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <img src={FooterLogo} alt="INGRYD" className="w-44" />
          <p className="text-xl font-light">4A Akiogun Street, New Market Road,<br />Oniru, Lagos State.</p>
          <p className="text-xl font-light pb-3">09039831126</p>
          <a href="mailto:support@ingrydacademy.com" className="text-xl font-light text-fuchsia-500 hover:underline">
            support@ingrydacademy.com
          </a>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-fuchsia-500"><img src={Insta} alt="Intagram Logo" /></a>
            <a href="#" className="text-white hover:text-fuchsia-500"><img src={Facebook} alt="Facebook Logo" /></a>
            <a href="#" className="text-white hover:text-fuchsia-500"><img src={Twitter} alt="Twitter Logo" /></a>
            <a href="#" className="text-white hover:text-fuchsia-500"><img src={LinkedIn} alt="LinkedIn Logo" /></a>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-xl font-light hover:text-fuchsia-500">Scholarships</a></li>
            <li><a href="#" className="text-xl font-light hover:text-fuchsia-500">Contact us</a></li>
            <li><a href="#" className="text-xl font-light hover:text-fuchsia-500">FAQS</a></li>
          </ul>
        </div>

        {/* Legals */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Legals</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-xl font-light hover:text-fuchsia-500">Privacy</a></li>
            <li><a href="#" className="text-xl font-light hover:text-fuchsia-500">Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Empty column for layout balance */}
        <div></div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8">
        <p className='text-xl font-light'>&copy; 2024 INGRYD | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;