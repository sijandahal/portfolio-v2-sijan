"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import navItems from '@/app/data/navItems';
import Button from '../Button/Button';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Logo from '../UI/Logo/Logo';
import "./Navigation.css"
const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    // Toggle the menu for mobile view
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="flex justify-between items-center relative">
        <Logo />
  
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-800 dark:text-gray-200 menu__btn"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
  
        {/* Navigation links */}
        <div className={`nav__wrapper w-full justify-center md:flex items-center ${isOpen ? 'open' : 'closed'}`}>
          <ul className="nav-links flex-col md:flex-row justify-center flex-1 space-y-4 md:space-y-0 md:space-x-4 md:flex md:gap-1 md:items-center">
            {navItems.map((item, index) => (
              <li key={index} className='text-2xl'>
                <Link href={item.href} className="flex items-center gap-[10px] px-9 py-10 hover:bg-[#f0f0f0] rounded-sm transition-all">
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button element="link" link="/about" theme="secondary">
            Contact
          </Button>
        </div>
  
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </nav>
    );
  };
  
  export default Navigation;