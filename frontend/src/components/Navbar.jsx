// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#0A192F] text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-[#FFD700]">Elite Group</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-[#FFD700]">Home</Link>
        <Link to="/about" className="hover:text-[#FFD700]">About</Link>
        <Link to="/projects" className="hover:text-[#FFD700]">Projects</Link>
        <Link to="/recruitment" className="hover:text-[#FFD700]">Recruitment</Link>
        <Link to="/contact" className="hover:text-[#FFD700]">Contact</Link>
        <a
          href="https://elitedreamhomes.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FFD700]"
        >
          Elite Dream Homes
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
