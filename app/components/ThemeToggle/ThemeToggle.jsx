"use client"
import React, { useEffect, useState } from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import "./ThemeToggle.css"


const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (darkThemeMq ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      data-theme-btn
      className="flex items-center rounded-md transition-colors duration-300 
                  "
    >
      {theme === 'light' ? (
        <MdLightMode className = "w-10 h-10"/>

      ) : (
        <MdDarkMode className = "w-10 h-10"/>

      )}
   
    </button>
  );
};

export default ThemeToggle;
