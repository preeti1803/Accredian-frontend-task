import React, { useState } from "react";

const Customer = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-8">
      {/* FAQ Container */}
      <div className="w-full max-w-5xl border rounded-lg p-6 shadow-md">
        <h2 className="text-center text-2xl font-semibold">
          Frequently Asked <span className="text-blue-500">Questions</span>
        </h2>

        <div className="flex mt-4">
          {/* Sidebar */}
          <div className="w-1/4 space-y-2">
            <button className="w-full text-left px-4 py-2 bg-white border rounded-md font-semibold shadow">
              Eligibility
            </button>
            <button className="w-full text-left px-4 py-2 border rounded-md shadow">
              How To Use?
            </button>
            <button className="w-full text-left px-4 py-2 border rounded-md shadow">
              Terms & Conditions
            </button>
          </div>

          {/* FAQ Content */}
          <div className="w-3/4 pl-6">
            {/* FAQ Item 1 */}
            <div className="border-b py-3">
              <button
                onClick={() => toggleFAQ(1)}
                className="w-full text-left text-black-500 font-medium"
              >
                Do I need prior Product Management experience?
              </button>
              {openFAQ === 1 && (
                <p className="mt-2 text-gray-700">
                  No, this program is designed for all levels, covering basics
                  and advanced topics suitable for individuals from any field.
                </p>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b py-3">
              <button
                onClick={() => toggleFAQ(2)}
                className="w-full text-left font-semibold"
              >
                What is the minimum system configuration required?
              </button>
              {openFAQ === 2 && (
                <p className="mt-2 text-gray-700">
                  A laptop with at least 4GB RAM, a modern web browser, and a
                  stable internet connection is required.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full max-w-5xl bg-blue-600 text-white rounded-lg p-6 shadow-lg flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">
            Want to delve deeper into the program?
          </h3>
          <p className="text-sm">
            Share your details to receive expert insights from our program team!
          </p>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-medium hover:bg-gray-200">
          Get in touch →
        </button>
      </div>
    </div>
  );
};

export default Customer;
