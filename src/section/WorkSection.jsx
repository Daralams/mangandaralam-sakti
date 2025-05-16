import React from "react";
import workItems from "../data/workItems";

const WorkSection = () => {
  return (
    <section className="flex flex-col items-center px-4 py-6 md:px-10 max-w-4xl mx-auto text-white">
      <div className="w-full max-w-2xl text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Work Experience
        </h1>
      </div>
      <div className="mt-4 max-w-2xl w-full">
        <div className="relative border-l border-gray-700">
          {workItems.map((item, index) => (
            <div key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-white rounded-full -left-1.5 border border-[#9407B1]" />
              <p className="text-sm text-gray-400">{item.date}</p>
              <h3 className="text-lg font-semibold mt-1 hover:text-[#9407B1] transition cursor-pointer">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
