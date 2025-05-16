import React from "react";
import techStack from "../data/techstack";

const TechstackSection = () => {
  return (
    <section className="flex flex-col items-center px-4 py-6 text-white">
      <div className="w-full max-w-2xl text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Tech Stack
        </h1>
        <p className="mt-2 text-sm text-gray-300">
          I build software using a diverse range of programming languages and
          frameworks. I’m passionate about exploring modern technologies and
          constantly expanding my toolkit to craft innovative and efficient
          solutions.
        </p>
      </div>

      <div
        className="mt-3 max-w-2xl w-full border rounded-md p-4"
        style={{ borderColor: "#9407B1" }}
      >
        <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#9407B1] scrollbar-track-transparent pb-2">
          {techStack.map((tech) => (
            <img
              key={tech.id}
              src={tech.icon}
              alt={tech.name}
              className="w-8 h-8 shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechstackSection;
