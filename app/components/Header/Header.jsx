"use client";
import React, { useState, useEffect } from 'react';
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [isVisible, setIsVisible] = useState(true); // Track visibility of the header

  const controlHeader = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      // If scrolling down and past 100px, hide the header
      setIsVisible(false);
    } else {
      // If scrolling up, show the header
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header className={` fixed top-0 left-0 w-full z-50  shadow-md backdrop-blur-md transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto p-5">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
