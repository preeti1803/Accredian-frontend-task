import React, {useState}from "react";
import PopupForm from "./PopupForm";

const ReferralBenefits = () => {
     const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="flex flex-col items-center p-6 bg-white-100 min-h-screen">
      {/* Header */}
      <h2 className="text-xl font-semibold text-center">
        What Are The <span className="text-blue-500">Referral Benefits?</span>
      </h2>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row mt-6 w-full max-w-5xl bg-white p-4 rounded-lg shadow-lg">
        {/* Sidebar Menu */}
        <div className="w-full md:w-1/3 bg-white-200 rounded-lg p-4">
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded flex justify-between items-center">
            ALL PROGRAMS <span>&#9654;</span>
          </button>
          <ul className="mt-4 space-y-2">
            {[
              "PRODUCT MANAGEMENT",
              "STRATEGY & LEADERSHIP",
              "BUSINESS MANAGEMENT",
              "FINTECH",
              "SENIOR MANAGEMENT",
              "DATA SCIENCE",
              "DIGITAL TRANSFORMATION",
              "BUSINESS ANALYTICS",
            ].map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 px-4 bg-white rounded cursor-pointer hover:bg-gray-100"
              >
                {item} <span>&#9654;</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs Table */}
        <div className="w-full md:w-2/3 p-4">
          <table className="w-full border-collapse rounded-lg overflow-hidden shadow-md">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3 text-left">Programs</th>
                <th className="p-3">Referrer Bonus</th>
                <th className="p-3">Referee Bonus</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {[
                { program: "Professional Certificate Program in Product Management", referrer: "₹ 7,000", referee: "₹ 9,000" },
                { program: "PG Certificate Program in Strategic Product Management", referrer: "₹ 9,000", referee: "₹ 11,000" },
                { program: "Executive Program in Data Driven Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
                { program: "Executive Program in Product Management and Digital Transformation", referrer: "₹ 10,000", referee: "₹ 10,000" },
                { program: "Executive Program in Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
                { program: "Advanced Certification in Product Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
                { program: "Executive Program in Product Management and Project Management", referrer: "₹ 10,000", referee: "₹ 10,000" },
              ].map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3 flex items-center space-x-2">
                    <span className="text-blue-500">📘</span> {/* Icon Placeholder */}
                    <span>{item.program}</span>
                  </td>
                  <td className="p-3 text-center">{item.referrer}</td>
                  <td className="p-3 text-center">{item.referee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Call to Action */}
      <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg text-lg shadow-md" onClick={() => setIsPopupOpen(true)}>
        Refer Now
      </button>
      {isPopupOpen && <PopupForm onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default ReferralBenefits;
