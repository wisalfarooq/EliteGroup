// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0A192F] to-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Background Blur Circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#FFD700] rounded-full mix-blend-overlay filter blur-[200px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full mix-blend-overlay filter blur-[200px] opacity-20"></div>

      {/* Hero Content */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-[#FFD700]">Elite Group</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl max-w-2xl text-center text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Building world-class infrastructure, one project at a time. Discover our iconic projects, cutting-edge designs, and vision for a better future.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link
          to="/projects"
          className="px-8 py-3 bg-[#FFD700] text-black rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Explore Projects
        </Link>
        <Link
          to="/about"
          className="px-8 py-3 border-2 border-[#FFD700] text-[#FFD700] rounded-full font-semibold hover:bg-[#FFD700] hover:text-black transition"
        >
          Learn More
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
