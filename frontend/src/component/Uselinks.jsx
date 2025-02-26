import React, { useState } from "react";
import "../index.css";
import logo from "../assets/logo.png";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-black text-sm py-7 px-4">
      <nav className="bg-white text-black text-sm py-2 px-4 flex justify-between items-center">
        {/* Logo & Courses Dropdown */}
        <div className="flex items-center space-x-6 absolute left-20">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <img src={logo} alt="Logo" className="h-8" />
          </a>
          
          {/* Courses Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-bold"
            >
              Courses ▼
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Web Development</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Data Science</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Cyber Security</a>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="absolute right-20 flex items-center space-x-4">
          <a href="#" className="text-black-900  font-bold hover:text-blue-500">Refer & Earn</a>
          <a href="#" className="text-black-900 font-bold  hover:text-blue-500">Resources</a>
          <a href="#" className="text-black-900 font-bold hover:text-blue-500">About Us</a>
          <a href="#" className="text-black-900 font-bold hover:text-blue-500">Login</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Try for free
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavLinks;
