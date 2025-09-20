// src/pages/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "skyline-towers",
    title: "Skyline Towers",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    desc: "Luxury high-rise redefining urban skylines.",
  },
  {
    id: "harbor-bridge",
    title: "Harbor Bridge",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    desc: "Engineering marvel connecting cities.",
  },
  {
    id: "green-horizon",
    title: "Green Horizon",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
    desc: "Sustainable community for the future.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white px-8 py-20">
      <motion.h2
        className="text-5xl font-bold text-center mb-16 text-[#FFD700]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.id}
            className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-lg shadow-lg hover:scale-105 transition cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Link to={`/projects/${p.id}`}>
              <img src={p.img} alt={p.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-300">{p.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
