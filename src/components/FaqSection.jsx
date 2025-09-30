import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Do plumbers deal with heating?",
    answer:
      "Some of our local plumbers are also gas registered and experienced working on heating systems, bathrooms and kitchens.",
  },
  {
    question: "Do you charge a call out fee?",
    answer:
      "Yes, there may be a small call out fee depending on your location and the type of work required.",
  },
  {
    question: "How quickly can your company send out an engineer?",
    answer:
      "We usually send an engineer on the same day, or within 24 hours in most cases.",
  },
  {
    question: "What should I do if I get a water leak?",
    answer:
      "Turn off your main water supply immediately and call us as soon as possible so we can dispatch an engineer quickly.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-20">
      {/* Heading */}
      <h2
        className="font-inter font-bold tracking-[-0.03em] text-center text-[#1B1743] 
                     text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] 
                     lg:text-[48px] lg:leading-[48px] max-w-[1360px] w-full mx-auto mb-[40px]"
      >
        Frequently asked questions
      </h2>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto divide-y divide-gray-200 border-t border-b border-gray-200">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="py-5">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span
                  className="font-inter font-semibold tracking-[-0.03em] text-[#1B1743] cursor-pointer
                                 text-[16px] leading-[24px] sm:text-[20px] sm:leading-[28px] 
                                 lg:text-[28px] lg:leading-[40px]"
                >
                  {faq.question}
                </span>

                <span className="ml-4 text-xl text-gray-600">
                  {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
              </button>

              {/* Answer */}
              {isOpen && (
                <p
                  className="mt-3 font-inter font-normal tracking-[0em] text-[#2A2F32]
                              text-[14px] leading-[20px] sm:text-[14px] sm:leading-[20px] 
                              lg:text-[18px] lg:leading-[30px]"
                >
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
