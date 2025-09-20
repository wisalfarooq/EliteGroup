import React from "react";

const Timeline = ({ milestones }) => {
  return (
    <div className="relative border-l-4 border-[#FFD700] ml-6">
      {milestones.map((m, i) => (
        <div key={i} className="mb-10 ml-4">
          <div className="absolute w-6 h-6 bg-[#FFD700] rounded-full -left-3"></div>
          <h3 className="text-2xl font-semibold">{m.year}</h3>
          <p className="text-gray-400">{m.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
