import React from "react";
import "../index.css";






const Footer = () => {
    return (
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 border-t border-gray-600 pt-6">
          {/* Logo Section */}
          <div>
            <h2 className="text-xl font-bold">accredian</h2>
            <p className="text-gray-400 text-sm">credentials that matter</p>
          </div>
  
          {/* Programs Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Programs</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                "Data Science & AI",
                "Product Management",
                "Business Analytics",
                "Digital Transformation",
                "Business Management",
                "Project Management",
                "Strategy & Leadership",
                "Senior Management",
                "Fintech",
              ].map((program) => (
                <li key={program} className="flex justify-between hover:text-white cursor-pointer">
                  {program} <span>+</span>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              Email us (For Data Science Queries): <a href="mailto:admissions@accredian.com" className="text-blue-400 hover:underline">admissions@accredian.com</a>
            </p>
            <p className="text-gray-400 text-sm">
              Email us (For Product Management Queries): <a href="mailto:pm@accredian.com" className="text-blue-400 hover:underline">pm@accredian.com</a>
            </p>
            <p className="text-gray-400 text-sm">
              Data Science Admission Helpline: <span className="text-white">+91 9076365922</span>
            </p>
            <p className="text-gray-400 text-sm">
              Product Management Admission Helpline: <span className="text-white">+91 9625811095</span>
            </p>
            <p className="text-gray-400 text-sm">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana 122015
            </p>
          </div>
  
          {/* Accredian Section */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Accredian</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["About", "Career", "Blog", "Admission Policy", "Referral Policy", "Privacy Policy", "Terms Of Service", "Master FAQs"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm mt-6 border-t border-gray-600 pt-4">
          <p>© 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  