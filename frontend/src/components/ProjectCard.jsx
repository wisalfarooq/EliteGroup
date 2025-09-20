import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      layout
      whileHover={{ scale: 1.02, y: -6 }}
      className="card-glass soft-shadow overflow-hidden rounded-2xl"
    >
      <Link to={`/project/${project.slug}`} className="block">
        <div className="h-56 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${project.hero})` }} />
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <div className="text-sm text-slate-400">{project.year}</div>
          </div>
          <p className="mt-3 text-slate-300 text-sm line-clamp-3">{project.excerpt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/4 text-slate-200">{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
