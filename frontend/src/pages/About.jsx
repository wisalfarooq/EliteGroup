// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white px-8 py-20">
      <motion.h2
        className="text-5xl font-bold text-center mb-12 text-[#FFD700]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        About Us
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
          alt="About Elite Group"
          className="rounded-2xl shadow-lg"
        />

        {/* Text */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            At Elite Group, we transform skylines and redefine urban living.
            With decades of expertise, we deliver projects that stand as testaments to
            innovation, sustainability, and excellence.
          </p>
          <p className="text-gray-300 leading-relaxed">
            From high-rise towers to eco-friendly communities, our work reflects
            passion, precision, and purpose.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
