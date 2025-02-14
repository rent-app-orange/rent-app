import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaEnvelope, FaGlobe } from "react-icons/fa";

function Footer() {
  const [language, setLanguage] = useState("English (US)");

  const toggleLanguage = () => {
    setLanguage(language === "English (US)" ? "العربية" : "English (US)");
  };

  return (
    <footer className="bg-orange-400 text-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-3 text-lg">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-300">AirCover</a></li>
              <li><a href="#" className="hover:text-gray-300">Cancellation options</a></li>
              <li><a href="#" className="hover:text-gray-300">Report issue</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-lg">Hosting</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">List your property</a></li>
              <li><a href="#" className="hover:text-gray-300">Host resources</a></li>
              <li><a href="#" className="hover:text-gray-300">Community forum</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-lg">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">About Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              <li><a href="#" className="hover:text-gray-300">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-lg">Contact</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={toggleLanguage} 
                  className="hover:text-gray-300 flex items-center focus:outline-none"
                >
                  <FaGlobe className="mr-2"/> {language}
                </button>
              </li>
              <li><a href="#" className="hover:text-gray-300 flex items-center"><FaEnvelope className="mr-2"/> Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-300 pt-6">
          <p className="text-sm">© {new Date().getFullYear()} Your Rental Platform. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white hover:text-gray-300 text-lg"><FaFacebookF /></a>
            <a href="#" className="text-white hover:text-gray-300 text-lg"><FaInstagram /></a>
            <a href="#" className="text-white hover:text-gray-300 text-lg"><FaEnvelope /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
