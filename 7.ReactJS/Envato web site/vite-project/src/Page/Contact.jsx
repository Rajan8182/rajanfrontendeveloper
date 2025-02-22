import React, { useState } from "react";
import CrisRayaan from "./CrisRayaan";
import Faqs from "./Faqs";
import MapComponent from "./MapComponent";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mx-auto py-10 font-['Bricolage Grotesque', sans-serif]">
      <div className="flex flex-col md:flex-row gap-3">
        <CrisRayaan />

        <div className="w-[870px] p-6 bg-white dark:bg-gray-800 text-black dark:text-white shadow-lg rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800">
            Let's 👋 <span className="text-blue-600">Work</span> Together
          </h2>
          <p className="text-gray-600 mt-4">
            I'm here to help if you're searching for a product designer to bring
            your idea to life or a design partner to help take your business to
            the next level.
          </p>

          <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-md mt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block dark:text-white text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border dark:bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block dark:text-white text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 border dark:bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block dark:text-white text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-2 border dark:bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div>
                  <label className="block dark:text-white text-gray-700">
                    Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-2 border dark:bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    required
                  >
                    <option value="">Select budget...</option>
                    <option value="low">Less than $500</option>
                    <option value="medium">$500 - $2000</option>
                    <option value="high">More than $2000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block dark:text-white text-gray-700">
                  Comment
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  className="w-full p-2 border dark:bg-gray-700 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Type details about your inquiry"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg text-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <MapComponent />
          <Faqs />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
