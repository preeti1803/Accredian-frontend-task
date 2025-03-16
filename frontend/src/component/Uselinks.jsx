import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu
import logo from "../assets/logo.png";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu

  return (
    <div className="bg-white text-black text-sm py-4 px-6 shadow-md">
      <nav className="flex justify-between items-center">
        {/* Logo & Mobile Menu Button */}
        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            <img src={logo} alt="Logo" className="h-8" />
          </a>

          {/* Desktop Courses Dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-bold"
            >
              Courses ▼
            </button>
            {isOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Web Development
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Data Science
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Cyber Security
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-black font-bold hover:text-blue-500">Refer & Earn</a>
          <a href="#" className="text-black font-bold hover:text-blue-500">Resources</a>
          <a href="#" className="text-black font-bold hover:text-blue-500">About Us</a>
          <a href="#" className="text-black font-bold hover:text-blue-500">Login</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Try for Free
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-lg p-4 space-y-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 font-bold"
          >
            Courses ▼
          </button>
          {isOpen && (
            <div className="bg-gray-100 rounded-md mt-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Web Development
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Data Science
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                Cyber Security
              </a>
            </div>
          )}
          <a href="#" className="block text-black font-bold hover:text-blue-500">Refer & Earn</a>
          <a href="#" className="block text-black font-bold hover:text-blue-500">Resources</a>
          <a href="#" className="block text-black font-bold hover:text-blue-500">About Us</a>
          <a href="#" className="block text-black font-bold hover:text-blue-500">Login</a>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700">
            Try for Free
          </button>
        </div>
      )}
    </div>
  );
};

export default NavLinks;
