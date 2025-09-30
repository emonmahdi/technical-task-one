import React from "react";
import { FiArrowRight } from "react-icons/fi";

const GetInTouch = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-[#0066FF] rounded-lg text-center py-14 px-6">
        <h2 className="font-inter font-bold tracking-[-0.03em] text-center text-white text-[24px] leading-[32px] sm:text-[32px] sm:leading-[40px] lg:text-[48px] lg:leading-[48px] mb-[16px] sm:mb-[24px] lg:mb-[32px]">
          Get In Touch
        </h2>
        <p className="font-inter font-normal tracking-[0em] text-center text-white/90 text-[14px] leading-[20px] sm:text-[14px] sm:leading-[20px] lg:text-[18px] lg:leading-[30px] max-w-2xl mx-auto mb-[16px] sm:mb-[24px] lg:mb-[32px]">
          Contact us now to enquire our plumbing services, whether you have a
          commercial project that requires support, or a domestic plumbing task
          that needs the attention of a trusted professional.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex items-center justify-center gap-[8px] bg-white text-[#0066FF] font-medium rounded-[8px] opacity-100 rotate-0 px-[20px] py-[10px] w-[260px] h-[40px] text-sm sm:px-[24px] sm:py-[10px] sm:w-[299px] sm:h-[50px] lg:px-[24px] lg:py-[10px] lg:w-[299px] lg:h-[62px] hover:bg-[#f1f5f9] transition-all duration-300">
            Book a Professional Plumber
            <FiArrowRight className="text-base" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
