// components/ShareButtons.jsx

import React from 'react';
import './SocialIcons.css'; // Import CSS module for styling
import Link from 'next/link';
import socialLinks from '@/app/data/socialLinks';
// Array containing icon, label, and URL data


const ShareButtons = () => {
  return (
    <div className="shareButtons fixed block top-72 z-20 text-left transition-all right-0">
        {socialLinks.map(({ icon: Icon, label, href }, index) => (
          <button
            key={index}
            className="shareButton float-right clear-right transition ease-in duration-200 border-none block cursor-pointer  text-xl h-16 mb-0 opacity-100 overflow-hidden p-[10px] relative text-left align-top whitespace-nowrap w-16 color-white"
          >
            <Icon className="inline-block h-7 w-7"/>
            <Link href={href} className="inline-block">
              <span className="transition ease-in duration-200 text-white inline-block font-medium left-[-35px] tracking-wide opacity-0 px-1.5 relative align-middle ml-3">
                {label}
              </span>
            </Link>
          </button>
        ))}
    </div>
  );
};

export default ShareButtons;
