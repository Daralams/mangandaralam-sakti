import React from "react";
import { Github, Play } from "lucide-react";
import projects from "../data/projects";

const ProjectsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 text-white">
      <h1 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0F172A] rounded-lg overflow-hidden shadow-md flex flex-col justify-between cursor-pointer transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">
              <p className="text-sm text-gray-400">{project.date}</p>
              <h3 className="text-lg font-bold mt-1 mb-2 hover:text-[#9407B1] cursor-pointer">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#1E293B] text-xs px-2 py-1 rounded-md text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1 text-sm border border-white rounded-md hover:bg-white hover:text-black transition"
                  >
                    <Play size={16} />
                    Demo
                  </a>
                )}
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1 text-sm border border-white rounded-md hover:bg-white hover:text-black transition"
                  >
                    <Github size={16} />
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
