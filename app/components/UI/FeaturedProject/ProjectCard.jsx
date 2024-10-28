"use client";
// components/ProjectCard.js
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useState } from "react";
import "./FeaturedCard.css"
const ProjectCard = ({
  title,
  description,
  imageUrl,
  projectUrl,
  repoUrl,
  techStack,
  companyName,
  companyUrl,
  className,
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col sm:flex-row items-center  p-10 rounded-lg shadow-lg relative featured__wrapper"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="sm:w-1/3 relative h-[384px] hidden sm:block">
        <Image
          className="rounded-lg object-contain  w-full h-full"
          src={imageUrl}
          alt={title}
          width={500}
          height={200}
        />
      </div>
      <div className="sm:w-2/3 sm:ml-6 mt-6 md:mt-0 ">
        <h3 className=" text-green-400 mb-5 text-5xl font-bold">Featured Project</h3>
        <h2 className="mb-8 text-white text-3xl font-medium">{title}</h2>
        <p className=" mb-8  text-white font-normal text-3xl leading-10">{description}</p>
        <div className="flex flex-wrap mb-8 text-xl">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 leading-none flex items-center h-10 px-3 align-middle justify-center text-gray-300  font-semibold mr-2 rounded techStacks"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={repoUrl}
            aria-label="GitHub Repository"
            className="text-gray-300 hover:text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={projectUrl}
            aria-label="External Link"
            className="text-gray-300 hover:text-white"
          >
            <FaExternalLinkAlt size={24} />
          </a>
        </div>
        {companyName && (
          <p className="text-gray-400 mt-8 flex items-center gap-4">
            Created at:{" "}
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              {companyName}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
