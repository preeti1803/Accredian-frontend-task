import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for menu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-100 shadow-md p-3 rounded-[38px] sm:w-[450px] sm:h-[63px] mx-auto">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex justify-center space-x-8 text-gray-600 font-medium">
        <a href="#" className="hover:text-black">Refer</a>
        <a href="#" className="hover:text-black">Benefits</a>
        <a href="#" className="hover:text-black">FAQs</a>
        <a href="#" className="hover:text-black">Support</a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-between items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 text-2xl">
          {isOpen ? <FiX /> : <FiMenu />} {/* Toggle between menu & close icon */}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-lg rounded-lg p-4 mt-2">
          <a href="#" className="py-2 border-b" onClick={() => setIsOpen(false)}>Refer</a>
          <a href="#" className="py-2 border-b" onClick={() => setIsOpen(false)}>Benefits</a>
          <a href="#" className="py-2 border-b" onClick={() => setIsOpen(false)}>FAQs</a>
          <a href="#" className="py-2" onClick={() => setIsOpen(false)}>Support</a>
        </div>
      )}
    </header>
  );
};

export default Header;
