"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "./ui/ProjectCard";
import Projects from "@/data/projects.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAnimateText } from '../hooks/useAnimateText';


gsap.registerPlugin(ScrollTrigger);

export default function Proyects() {
  const wrappersRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    wrappersRef.current.forEach((wrapper, i) => {
      if (!wrapper) return;

      gsap.fromTo(
  wrapper,
  {
    y: 5000, 
    scale: 0.8,
    opacity: 1,
    zIndex: 5,
  },
  {
    y: i * 20,
    scale: 1,
    opacity: 1,
    zIndex: i + 1,
    rotate: (i % 1.5 === 0 ? -0.8 : 1.8) * (0.5 + Math.random() * 1.8),
    ease: "power3.out",
    force3D: true,
    scrollTrigger: {
      trigger: container,
      start: `top+=${i * 500} center`,
      end: `top+=${i * 500 + 300} center`,
      scrub: true
    }
  }
);

    });
  }, []);

  const aboutRefIntro = useAnimateText({ delay: 0.5, duration: 0.3, stagger: 0.002 });
  const aboutRefOutro = useAnimateText({ delay: 0.5, duration: 0.3, stagger: 0.002 });
  return (
    <section id="projects" className="relative w-screen bg-black">
      <section
      ref={aboutRefIntro}
      className="flex items-center justify-center px-16 my-18 mt-22 w-1/2 mx-auto">
        <p className="font-bold tracking-wide font-mono text-[#9ca3af]">
          <span className="font-playfair text-[#f5f5f5]">— Muy bien, Ricardo —</span><br />
          dice el entrevistador mientras gira la pantalla hacia ti.<br />
          <span className="font-playfair text-[#f5f5f5]">— Me gustaría ver algunos de tus proyectos...</span><br />
          Sonrío. Este es el momento donde mis ideas toman forma.<br />
          <span className="font-playfair text-[#f5f5f5]">— Claro —</span> respondo.
          <span className="font-playfair text-[#f5f5f5]"> — Estos son algunos de mis proyectos.</span>
        </p>
      </section>
      <section ref={containerRef} className="relative h-[500vh] w-full">
        <div className="sticky -top-12 h-screen flex items-center justify-center">
          <div className="relative w-full max-w-5xl h-125">
            {Projects.map((p, i) => (
              <div
                key={i}
                ref={(el) => (wrappersRef.current[i] = el!)}
                className="absolute top-6 left-0 w-full h-full pointer-events-auto"
                style={{ zIndex: i + 1 }}
              >
                <ProjectCard
                  index={i}
                  title={p.title}
                  description={p.description}
                  tech={p.tech}
                  code={p.code}
                  live={p.live}
                  status={p.status}
                  image={p.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section 
      ref={aboutRefOutro}
      className="flex items-center justify-center px-16 my-18 mt-22 w-1/3 mx-auto">
        <p className="font-bold tracking-wide font-mono text-[#9ca3af]">
          El entrevistador sonríe, satisfecho.<br/> 
          <span className="font-playfair text-[#f5f5f5]">— Veo que tienes variedad, pero también coherencia. Te importa la experiencia, el detalle y la funcionalidad.</span><br />
          <span className="font-playfair text-[#f5f5f5]">— Mucho —</span> respondo. 
          <span className="font-playfair text-[#f5f5f5]">— Para mí, cada proyecto es una oportunidad de aprender algo nuevo y de crear algo que realmente funcione para alguien.</span>
        </p>
      </section>
    </section>
  );
}
