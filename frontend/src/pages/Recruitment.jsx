import React from "react";
import { motion } from "framer-motion";

const Recruitment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold mb-6">
          Join <span className="text-yellow-400">Elite Group</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          We’re building the future. Explore exciting career opportunities and become part of projects that transform skylines, communities, and lives.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Structural Engineer",
            desc: "Work with cutting-edge tools to design skyscrapers and sustainable infrastructure.",
          },
          {
            title: "Project Manager",
            desc: "Lead multidisciplinary teams delivering high-value projects worldwide.",
          },
          {
            title: "Civil Technician",
            desc: "Support design and execution phases with precision and innovation.",
          },
        ].map((role, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-lg p-6 hover:scale-105 transform transition-all"
          >
            <h2 className="text-2xl font-semibold mb-4 text-yellow-300">
              {role.title}
            </h2>
            <p className="text-gray-400">{role.desc}</p>
            <button className="mt-6 px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-xl hover:bg-yellow-300 transition">
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
