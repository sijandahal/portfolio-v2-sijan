"use client";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import portfolioItems from "@/app/data/portfolioHome";
import Button from "../../Button/Button";
import { FaGlobe } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


import "./Portfolio.css";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    const items = gsap.utils.toArray('.portfolio-item'); // Get all portfolio items

    // Set initial state for each item
    items.forEach((item) => {
      gsap.set(item, { opacity: 0, y: 20 }); // Start with opacity 0 and translate down
    });

    // Create a scroll trigger animation
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,   // Start with opacity 0
          y: 20,        // Start 20 pixels below
        },
        {
          opacity: 1,   // Fade to full opacity
          y: 0,         // Move to the original position
          duration: 0.6, // Duration of the animation
          stagger: 0.3, // Stagger effect for each item
          ease: "power3.out", // Easing for smoothness
          scrollTrigger: {
            trigger: ".portfolio_wrapper", // Trigger when this section is in view
            start: "top 90%", // Start animation when the section is near the top of the viewport
            once: true, // Play the animation only once
          },
        }
      );
    });

    // Cleanup function to kill the scroll trigger when component unmounts
    return () => {
      ctx.revert(); // Revert any animations and triggers on unmount
    };
  }, []);

  return (
    <div className="portfolio_wrapper container !mt-16">
      <ul className="projects-grid grid  grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8">
      {portfolioItems.map((project, index) => (
        <li key={index} className="portfolio-item bg-gray-800 text-white transition-all duration-500 hover:!-translate-y-3">
          <div className="project-inner py-12 px-10 flex flex-col h-full justify-between">
          <div className="project--header"> 
              <div className="project-top flex w-full justify-between mb-8">
                
                <div className="project-links  h-9 flex text-right w-full justify-end">

                  <a href={project.links.external} aria-label="External Link" className="external" target="_blank" rel="noopener noreferrer"> 
                    
                <FaExternalLinkAlt className = "w-full h-full" />
                  </a>
                </div>
              </div>
              <h3 className="text-4xl mb-6">
                <a href={project.links.external} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h3>
              <div className="project-description  mb-8  text-white font-normal text-[17px] leading-10">
                <p>{project.description}</p>
              </div>
              </div>
              <div className="project--footer">
              <ul className="project-tech-list flex items-center gap-3 mt-5 text-[#ccd6f6] tracking-[0.5px]">
                {project.techList.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
             
              </div>
          </div>
        </li>
      ))}
    </ul>
  <div className="text-center mt-28">
    <Button element="link" link="/about" theme="secondary" className = "w-full">
              Show More
            </Button>

  </div>
    </div>
  );
};

export default Portfolio;
