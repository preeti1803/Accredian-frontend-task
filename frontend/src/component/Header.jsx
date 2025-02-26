import React from "react";

const Headers=() =>{
  return (
    <div className="flex justify-center items-center bg-blue-100 p-1 rounded-[38px]  sm:w-[450px] sm:h-[63px] mx-auto">
      <nav className="flex space-x-8 text-gray-600 font-medium">
      <a href="#" className="hover:text-black">Refer</a>
        <a href="#" className="hover:text-black">Benefits</a>
        <a href="#" className="hover:text-black">FAQs</a>
        <a href="#" className="hover:text-black">Support</a>
      </nav>
    </div>
  );
};

export default Headers
