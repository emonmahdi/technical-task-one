import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="text-gray-800 py-12">
      {/* Top Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Column 1: Logo + Socials */}
        <div className="md:col-span-3">
          <h2 className="font-inter font-bold text-[32px] leading-[100%] tracking-[-0.03em] mb-[28px]">
            Business Logo
          </h2>
          <div className="flex space-x-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-600">
              <FaTwitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-600">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div className="md:col-span-2">
          <h3 className="font-inter font-semibold text-[14px] leading-[24px] tracking-[0em] mb-[24px]">
            Our Services
          </h3>
          <ul className="space-y-2">
            {["Plumbing", "Drainage", "Bathrooms", "Commercial"].map(
              (item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="font-inter font-normal text-[14px] leading-[20px] tracking-[0em] text-[#2A2F32] hover:text-blue-600 transition-colors mb-[16px]"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="md:col-span-4">
          <h3 className="font-inter font-semibold text-[14px] leading-[24px] tracking-[0em] mb-[24px]">
            Useful Links
          </h3>
          <div className="grid grid-cols-2 gap-x-8">
            <ul className="space-y-2">
              {["Contact Us", "Updates", "About Us", "Rates"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="font-inter font-normal text-[14px] leading-[20px] tracking-[0em] text-[#2A2F32] hover:text-blue-600 transition-colors mb-[16px]"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
            <ul className="space-y-2">
              {["Customer Services", "Updates", "Locations", "Sitemap"].map(
                (link, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="font-inter font-normal text-[14px] leading-[20px] tracking-[0em] text-[#2A2F32] hover:text-blue-600 transition-colors mb-[16px]"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div className="md:col-span-3">
          <h3 className="font-inter font-semibold text-[14px] leading-[24px] tracking-[0em] mb-[24px]">
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <HiOutlineLocationMarker className="text-xl flex-shrink-0 mt-1" />
              <span className="font-inter font-semibold text-[14px] leading-[24px] tracking-[0em]">
                1 Sail Street, London, SE11 6NQ
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <HiOutlineMail className="text-xl flex-shrink-0 mt-1" />
              <a
                href="mailto:enquiries@PlumbingPros.com"
                className="font-inter font-semibold text-[14px] leading-[24px] tracking-[0em]"
              >
                enquiries@PlumbingPros.com
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <HiOutlinePhone className="text-xl flex-shrink-0 mt-1" />
              <a
                href="tel:+442045276474"
                className="font-inter font-semibold text-[14px] leading-[24px] tracking-[0em]"
              >
                020 4527 6474
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 mt-6 py-4 px-6 sm:px-8 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
        <p className="font-normal text-[#2A2F32] text-[14px] leading-[20px] tracking-[0]">
          © Plumbing Pros. All Rights Reserved
        </p>
        <p className="font-normal text-[#2A2F32] text-[14px] leading-[20px] tracking-[0]">
          Website by{" "}
          <a href="#" className="hover:text-blue-600 transition-colors">
            JH Adventure And Creative
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
