// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Recruitment from "./pages/Recruitment";
import Contact from "./pages/Contact";
import Proposal from "./pages/Proposal";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      {/* ===== NAVBAR ===== */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl shadow-lg">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="text-2xl font-extrabold text-yellow-400 tracking-wide"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              EliteBuild
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-x-6 hidden md:flex"
          >
            <Link to="/" className="hover:text-yellow-400 transition font-semibold">Home</Link>
            <Link to="/about" className="hover:text-yellow-400 transition font-semibold">About</Link>
            <Link to="/projects" className="hover:text-yellow-400 transition font-semibold">Projects</Link>
            <Link to="/proposal" className="hover:text-yellow-400 transition font-semibold">Proposal</Link>
            <Link to="/recruitment" className="hover:text-yellow-400 transition font-semibold">Recruitment</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition font-semibold">Contact</Link>
          </motion.div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-4 space-y-4 border-t border-gray-800"
            >
              <Link
                to="/"
                className="block text-lg font-semibold hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-lg font-semibold hover:text-yellow-400"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/projects"
                className="block text-lg font-semibold hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <Link
                to="/proposal"
                className="block text-lg font-semibold hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Proposal
              </Link>
              <Link
                to="/recruitment"
                className="block text-lg font-semibold hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Recruitment
              </Link>
              <Link
                to="/contact"
                className="block text-lg font-semibold hover:text-yellow-400"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ===== PAGE CONTENT ===== */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black/80 backdrop-blur-xl py-8 mt-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} EliteBuild Inc. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
