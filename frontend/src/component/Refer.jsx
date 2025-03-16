
import React, { useState } from "react";
import refer from "../assets/middle.png";
import  PopupForm  from "../component/PopupForm";

export  function Refer() {
   
    const [isPopupOpen,setIsPopupOpen] = useState('false')
    
    return (
      <div className="bg-[#EAF1FF] py-9 px-4 md:px-10 text-center mt-20">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          How Do I <span className="text-blue-500">Refer?</span>
        </h2>
  
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
            <img src = {refer} className="sm:w-[600px] sm:h-[200px]">
            </img>
            </div>
    
        
        <button className="bg-blue-500 text-white px-6 py-3 mt-8 rounded-md shadow-md hover:bg-blue-600" onClick={() => setIsPopupOpen(true)}>
          Refer Now
        </button>
        {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
      </div>
    );
  }
export default Refer;