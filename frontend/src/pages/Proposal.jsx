import React, { useState } from "react";
import { motion } from "framer-motion";

const Proposal = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectTitle: "",
    description: "",
    budget: "",
    timeline: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Proposal submitted! (Here you’d integrate with backend/database)");
    setForm({
      name: "",
      email: "",
      projectTitle: "",
      description: "",
      budget: "",
      timeline: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-extrabold mb-6">
          Submit Your <span className="text-yellow-400">Project Proposal</span>
        </h1>
        <p className="text-lg text-gray-300 mb-12">
          Do you have a groundbreaking idea? Partner with us to make it a reality.
        </p>
      </motion.div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-xl p-10 rounded-2xl shadow-xl space-y-6"
      >
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400"
          required
        />
        <input
          type="text"
          name="projectTitle"
          value={form.projectTitle}
          onChange={handleChange}
          placeholder="Project Title"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Project Description"
          rows="6"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400"
          required
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="budget"
            value={form.budget}
            onChange={handleChange}
            placeholder="Estimated Budget"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400"
            required
          />
          <input
            type="text"
            name="timeline"
            value={form.timeline}
            onChange={handleChange}
            placeholder="Estimated Timeline"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg hover:bg-yellow-300 transition"
        >
          Submit Proposal
        </button>
      </form>
    </div>
  );
};

export default Proposal;
