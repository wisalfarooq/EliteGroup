import React from "react";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(90deg,#020617,#07102a)] border-t border-white/4 py-10">
      <div className="container-max mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-white font-bold">EG</div>
          <div>
            <div className="text-white font-semibold">Elite Group</div>
            <div className="text-slate-400 text-sm">Design • Build • Inspire</div>
          </div>
        </div>

        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Elite Group — Crafted with care.
        </div>

        <div className="flex items-center gap-3">
          <a href="#" aria-label="LinkedIn" className="p-2 rounded-md bg-white/3 text-white"><FaLinkedin /></a>
          <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/3 text-white"><FaInstagram /></a>
          <a href="mailto:info@elitegroup.example" aria-label="Email" className="p-2 rounded-md bg-white/3 text-white"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}
