import React, { useState } from "react";
import hero from "../assets/hero.png";
import money from "../assets/money.png";

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

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center relative">
            <h2 className="text-xl font-bold mb-4">Refer a Friend</h2>
            <p className="text-gray-600 mb-4">Enter details to refer your friend.</p>
            
            <input
              type="text"
              placeholder=" Name"
              className="w-full border p-2 rounded mb-3"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-2 rounded mb-3"
            />
             <input
              type="text"
              placeholder="Friend's Name"
              className="w-full border p-2 rounded mb-3"
            />
             <input
              type="email"
              placeholder="Friend's Email"
              className="w-full border p-2 rounded mb-3"
            />
             <input
              type="text"
              placeholder="Referral code"
              className="w-full border p-2 rounded mb-3"
            />
             <input
              type="text"
              placeholder="Course ID"
              className="w-full border p-2 rounded mb-3"
            />
             <input
              type="text"
              placeholder="Referral Message"
              className="w-full border p-2 rounded mb-3"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
              Submit
            </button>

            {/* Close Button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
