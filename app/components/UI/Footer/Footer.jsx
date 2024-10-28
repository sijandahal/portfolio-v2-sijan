"use client";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer>
      <div className="max-w-4xl mx-auto py-10">
        <div className="text-center">
          <h3 className="text-display-large my-8">Let's Get Connected</h3>
        </div>
      
          
          <div className="order-1 md:order-2 flex items-center justify-center">
            <span className="px-2">About us</span>
            <span className="px-2">Contact us</span>
            <span className="px-2 ">Privacy Policy</span>
          </div>
          <p className="order-2 md:order-1 flex items-center justify-center mt-7">
          Made with <span className = "text-red">   &#10084; &#65039; </span> &copy; Sijan Dahal {currentYear}
          </p>
        </div>
    </footer>
  );
};

export default Footer;
