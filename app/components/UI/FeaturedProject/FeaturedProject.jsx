// pages/index.js
"use client";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Sajilo CV [Resume Builder]",
    description:
      "Worked on Sajilo CV's front end, a tool for making resumes. Made the website and CV builder look good and work well on different devices. Added cool features like previewing changes instantly and dragging sections around. Also, made sure everything loads fast and works smoothly. Tested it a lot to make sure it works on all popular web browsers.",
    imageUrl: "/project1.png",
    projectUrl: "https://sajilocv.com/",
    techStack: ["HTML", "CSS", "SASS", "JavaScript", "Vue JS", "PHP"],
    companyName: "CodeWing Solutions",
    companyUrl: "https://www.google.com",
  },
  // Add more projects as needed
];

export default function Project() {
  useEffect(() => {
    // Set the initial state for the featured section
    gsap.set(".featured", { opacity: 0, x: -100 }); // Start with opacity 0 and translate down

    // Create a scroll trigger for the project cards
    const cards = gsap.utils.toArray(".featured");
    
    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // Start animation when the card is near the top of the viewport
          toggleActions: "play reverse play reverse", // Play on enter, reverse on leave
          once: false, // Allow re-triggering when scrolling back
        },
        opacity: 1, // Fade to full opacity
        x: 0, // Move to the original position
        duration: 0.6, // Duration of the animation
        ease: "power3.out", // Easing for smoothness
      });
    });

    // Cleanup function to kill the scroll triggers when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="featured__project container mx-auto px-4 py-8">
      <h1 className="hero-title text-display-large ">Portfolio Projects</h1>
      <p className="mt-6 text-display-small">
        Every project is like a new little story: <br />
        unique starting points and tasks, but all with a happy end.
      </p>
      <div className="mt-16 featured">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            repoUrl={project.repoUrl}
            techStack={project.techStack}
            companyName={project.companyName}
            companyUrl={project.companyUrl}
          />
        ))}
      </div>
    </div>
  );
}
