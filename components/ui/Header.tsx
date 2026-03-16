'use client';

import { useState, useEffect } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let current = "about";
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);

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
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header 
      label="Header" 
      className={`flex w-full py-4 px-6 md:px-16 items-center justify-between fixed top-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/5 transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <h1 label="Logo" className="text-2xl font-bold tracking-tighter font-playfair text-white hover:scale-105 transition-transform cursor-pointer" onClick={() => handleNavClick("about")}>
        RIESAL
      </h1>
      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8">
        {sections.map((section) => (
          <button
            label={section.label}
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`text-sm uppercase tracking-widest transition-all duration-300 font-medium relative group ${
              activeSection === section.id
                ? "text-secondary"
                : "text-white/70 hover:text-white"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
      {/* Mobile menu button */}
      <button
        label="Menu"
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-50"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>
      {/* Mobile nav */}
      <nav
        className={`fixed inset-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden z-40 ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {sections.map((section) => (
          <button
            label={section.label}
            key={section.id}
            onClick={() => handleNavClick(section.id)}
            className={`text-3xl font-playfair tracking-wider transition-colors duration-300 ${
              activeSection === section.id
                ? "text-secondary"
                : "text-white/50"
            }`}
          >
            {section.label}
          </button>
        ))}
      </nav>
    </header>
  );
}