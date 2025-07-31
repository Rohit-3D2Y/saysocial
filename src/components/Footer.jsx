import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#101b36] text-white px-6 py-12 md:px-20   rounded-t-3xl">
      <div className="max-w-screen-xl mx-auto">
        {/* Top Section - Logo & Links */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
          {/* Logo & CTA */}
          <div className="max-w-xl">
            <h1 className="text-6xl brico font-semibold text-[#e86294]">SaySocial</h1>
            <p className="mt-6 text-lg">
              The next big thing starts here—
              <br />
              drop us a line and let’s get creating!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-10 text-sm">
            {/* Left Column */}
            <div className="space-y-3">
              <p className="hover:text-[#e86294] cursor-pointer">Home</p>
              <p className="hover:text-[#e86294] cursor-pointer">Benefits</p>
              <p className="hover:text-[#e86294] cursor-pointer">Portfolio</p>
              <p className="hover:text-[#e86294] cursor-pointer">Reviews</p>
              <p className="hover:text-[#e86294] cursor-pointer">About</p>
            </div>
            {/* Right Column */}
            <div className="space-y-3">
              <p className="hover:text-[#e86294] cursor-pointer">LinkedIn</p>
              <p className="hover:text-[#e86294] cursor-pointer">Facebook</p>
              <p className="hover:text-[#e86294] cursor-pointer">Twitter</p>
              <p className="hover:text-[#e86294] cursor-pointer">Instagram</p>
              <p className="hover:text-[#e86294] cursor-pointer">YouTube</p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-10" />

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
          {/* Phone */}
          <div>
            <div className="flex items-center gap-2 text-[#e86294] font-semibold mb-2">
              <FaPhoneAlt />
              <span>PHONE</span>
            </div>
            <p>(+91) 8237006990</p>
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center gap-2 text-[#e86294] font-semibold mb-2">
              <FaEnvelope />
              <span>EMAIL</span>
            </div>
            <p>saysocial@email.com</p>
          </div>

          {/* Address */}
          <div>
            <div className="flex items-center gap-2 text-[#e86294] font-semibold mb-2">
              <FaMapMarkerAlt />
              <span>ADDRESS</span>
            </div>
            <p>
              123 Main Street, Suite 200, <br />
              Austin, TX 78701
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="flex items-center gap-2 text-[#e86294] font-semibold mb-2">
              <FaClock />
              <span>OPENING HOURS</span>
            </div>
            <p>Mon to Sat: 9.00am - 8.30pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        <hr className="border-gray-700 mt-10 mb-6" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs">
          <p>© Say Social - All rights reserved 2025</p>
          <p>Made with ❤️ by Nexacraft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
