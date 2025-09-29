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
    <footer className="bg-gray-100 text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Column 1: Logo + Socials */}
        <div className="md:col-span-3">
          <h2 className="text-xl font-bold mb-4">Business Logo</h2>
          <p className="mb-4 text-gray-600">
            Leading plumbing solutions for your home and business.
          </p>
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
          <h3 className="font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Plumbing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Drainage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Bathrooms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Commercial
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div className="md:col-span-4">
          <h3 className="font-semibold text-lg mb-4">Useful Links</h3>
          <div className="grid grid-cols-2 gap-x-8">
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Rates
                </a>
              </li>
            </ul>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Customer Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div className="md:col-span-3">
          <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <HiOutlineLocationMarker className="text-xl flex-shrink-0 mt-1" />
              <span>1 Sail Street, London, SE11 6NQ</span>
            </li>
            <li className="flex items-start space-x-3">
              <HiOutlineMail className="text-xl flex-shrink-0 mt-1" />
              <a
                href="mailto:enquiries@PlumbingPros.com"
                className="hover:text-blue-600 transition-colors"
              >
                enquiries@PlumbingPros.com
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <HiOutlinePhone className="text-xl flex-shrink-0 mt-1" />
              <a
                href="tel:+442045276474"
                className="hover:text-blue-600 transition-colors"
              >
                020 4527 6474
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-6 py-4 px-20 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© Plumbing Pros. All Rights Reserved</p>
        <p>
          Website by{" "}
          <a href="#" className="hover:text-blue-600">
            JH Adventure And Creative
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
