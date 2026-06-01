"use client";

import { contactInfo } from "@/data/company";
import { Mail, Phone } from "lucide-react";

const TopBar = () => {
  const handleCallNow = () => {
    if (contactInfo.phones?.[0]) {
      window.location.href = `tel:${contactInfo.phones[0]}`;
    }
  };

  const handleEmailNow = () => {
    if (contactInfo.email) {
      window.location.href = `mailto:${contactInfo.email}`;
    }
  };

  return (
    <div className="bg-primary text-white border-b border-line/10 py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center sm:text-left">
        {/* Email Touch Link */}
        <button
          onClick={handleEmailNow}
          className="flex items-center justify-center space-x-2 py-1 px-2 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors duration-150 group"
          aria-label={`Email us at ${contactInfo.email}`}
        >
          <Mail className="w-4 h-4 text-secondary/80 group-hover:scale-105 transition-transform" />
          <span className="text-xs md:text-sm font-medium tracking-wide">
            {contactInfo.email}
          </span>
        </button>

        {/* Phone / Call Now CTA Button */}
        <button
          onClick={handleCallNow}
          className="flex items-center justify-center space-x-2 py-1 px-3 rounded-lg hover:bg-white/5 active:bg-white/10 transition-colors duration-150 group"
          aria-label={`Call us at ${contactInfo.phones?.[0]}`}
        >
          <Phone className="w-4 h-4 text-secondary/80 group-hover:scale-105 transition-transform" />
          <span className="text-xs md:text-sm font-bold tracking-wider">
            {contactInfo.phones?.[0]}
          </span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
