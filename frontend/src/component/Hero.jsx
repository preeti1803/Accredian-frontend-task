import React, { useState } from "react";
import hero from "../assets/hero.png";
import money from "../assets/money.png";
import PopupForm from "./PopupForm"; // Import the PopupForm component

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="relative flex flex-col md:flex-row items-center bg-[#F8FAFF] px-6 md:px-16 py-5 md:py-20 rounded-3xl border shadow-lg w-[900px] h-[500px] justify-center mx-auto mt-8">
      {/* Left Side: Text Content */}
      <div className="max-w-lg text-left">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight">
          Let's Learn & Earn
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Get a chance to win up to <span className="text-blue-600 font-bold">Rs. 15,000</span>
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 transition"
        >
          Refer Now
        </button>
      </div>

      {/* Right Side: Image Content */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <img src={money} alt="Money" className="absolute -top-8 -left-8 w-16" />
        <img src={money} alt="Money" className="absolute top-0 right-4 w-16" />
        <img src={hero} alt="People with phone" className="w-full max-w-md drop-shadow-lg" />
        <img src={money} alt="Money" className="absolute bottom-0 left-4 w-16" />
      </div>

      {/* Show Popup if Open */}
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default Hero;
