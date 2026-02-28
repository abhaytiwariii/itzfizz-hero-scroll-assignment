import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
      <div className="text-xl font-bold tracking-widest text-white">
        ITZFIZZ
      </div>
      <div className="flex gap-6 text-sm text-gray-300">
        <a href="#services" className="hover:text-white transition-colors">
          Services
        </a>
        <a href="#contact" className="hover:text-accent transition-colors">
          Contact
        </a>
      </div>
    </nav>
  );
}
