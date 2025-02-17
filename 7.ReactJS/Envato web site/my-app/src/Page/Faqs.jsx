import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqsData = [
  {
    question: "What skills does a product designer need?",
    answer:
      "A product designer should have expertise in UI/UX design, wireframing, prototyping, and collaboration with developers and stakeholders.",
  },
  {
    question: "How do I get started with product design?",
    answer:
      "Start by learning design principles, user research, and tools like Figma or Adobe XD. Practical experience through projects is key!",
  },
  {
    question: "Do product designers need to code?",
    answer:
      "While not mandatory, understanding HTML, CSS, and JavaScript can help designers collaborate better with developers.",
  },
  {
    question: "What is the difference between UX and UI design?",
    answer:
      "UX focuses on the overall user experience, while UI is about designing the look and feel of a product interface.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-10 max-w-2xl mx-auto  bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>

      <div className="space-y-4 w-[700px]">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className={`border dark:border-gray-700 p-5 rounded-lg transition-all duration-300 ${
              openIndex === index ? "bg-white dark:bg-gray-800 shadow-lg" : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <button className="p-2 rounded-lg text-blue-800 dark:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </button>
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-700 dark:text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
