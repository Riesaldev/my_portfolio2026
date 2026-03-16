'use client';

import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "auto", block: "start" });
    }
  };

  return (
    <header label="Header" className="flex w-full py-6 px-6 md:px-16 items-center justify-between sticky top-0 z-30 bg-transparent backdrop-blur-sm rounded-2xl">
      <h1 label="Logo" className="text-2xl font-bold tracking-wide font-playfair text-white">
        RIESAL
      </h1>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {sections.map((section) => (
          <button
            label={section.label}
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`text-lg transition-colors duration-300 font-semibold px-2 py-1 rounded-lg ${
              activeSection === section.id
                ? "text-black bg-white/80"
                : "text-white hover:text-black hover:bg-white/30"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
      {/* Mobile menu button */}
      <button
        label="Menu"
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-40"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        <span
          className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-white rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>
      {/* Mobile nav */}
      <nav
        className={`fixed top-42 left-0 w-full h-full bg-black/80 backdrop-blur-lg flex flex-col items-center justify-center gap-2 transition-all duration-300 md:hidden z-30 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {sections.map((section) => (
          <button
            label={section.label}
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`text-2xl font-bold px-4 py-2 rounded-lg transition-colors duration-300 ${
              activeSection === section.id
                ? "text-black bg-white/80"
                : "text-white hover:text-black hover:bg-white/30"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  );
}