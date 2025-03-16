import React, { useState } from "react";

const PopupForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    friendName: "",
    friendEmail: "",
    referralCode: "",
    courseId: "",
    referralMessage: "",
  });

  const [errors, setErrors] = useState({});

  // Function to validate email format
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }
    if (!isValidEmail(formData.friendEmail)) {
      validationErrors.friendEmail = "Invalid friend's email format";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Referral Submitted Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] text-center relative">
        <h2 className="text-xl font-bold mb-4">Refer a Friend</h2>
        <p className="text-gray-600 mb-4">Enter details to refer your friend.</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="text"
            name="friendName"
            placeholder="Friend's Name"
            className="w-full border p-2 rounded"
            value={formData.friendName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="friendEmail"
            placeholder="Friend's Email"
            className="w-full border p-2 rounded"
            value={formData.friendEmail}
            onChange={handleChange}
            required
          />
          {errors.friendEmail && <p className="text-red-500 text-sm">{errors.friendEmail}</p>}

          <input
            type="text"
            name="referralCode"
            placeholder="Referral Code"
            className="w-full border p-2 rounded"
            value={formData.referralCode}
            onChange={handleChange}
          />
          <input
            type="text"
            name="courseId"
            placeholder="Course ID"
            className="w-full border p-2 rounded"
            value={formData.courseId}
            onChange={handleChange}
          />
          <textarea
            name="referralMessage"
            placeholder="Referral Message"
            className="w-full border p-2 rounded"
            value={formData.referralMessage}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
