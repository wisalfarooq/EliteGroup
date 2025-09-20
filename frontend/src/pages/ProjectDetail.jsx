// src/pages/ProjectDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import PerformanceChart from "../components/PerformanceChart";
import PDFDownloadButton from "../components/PDFDownloadButton";
import { caseStudies } from "../data/caseStudies";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = caseStudies[projectId];

  if (!project) return <p className="text-center text-red-500">Project not found</p>;

  return (
    <div className="bg-[#0A192F] text-white min-h-screen px-8 py-20">
      {/* Hero */}
      <motion.div
        className="relative h-[60vh] mb-16 rounded-2xl overflow-hidden shadow-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center">
          <h1 className="text-6xl font-extrabold text-[#FFD700]">{project.title}</h1>
          <p className="text-lg mt-4 max-w-2xl text-center">{project.summary}</p>
        </div>
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-16">
        <section>
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Project Timeline</h2>
          <Timeline events={project.timeline} />
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Performance Metrics</h2>
          <PerformanceChart data={project.performance} />
        </section>

        <section>
          <h2 className="text-3xl font-bold text-[#FFD700] mb-6">Download Full Report</h2>
          <PDFDownloadButton file={project.pdf} />
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
