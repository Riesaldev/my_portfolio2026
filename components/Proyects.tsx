"use client";

import { useEffect, useRef } from "react";
import ProjectCard from "./ui/ProjectCard";
import Projects from "@/data/projects.json";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    y: 400,
    scale: 0.9,
    opacity: 0,
    zIndex: -1, // 👈 invisible = no bloquea clics
  },
  {
    y: i * 40,
    scale: 1,
    opacity: 1,
    zIndex: i + 1, // 👈 visible = vuelve a su orden normal
    rotate: (i % 2 === 0 ? -1 : 1) * (2 + Math.random() * 2),
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

  return (
    <section className="relative w-screen bg-black">

      {/* Título */}
      <h1 className="text-4xl font-bold text-primary flex items-center justify-center my-8">
        Projects
      </h1>

      {/* Intro narrativa */}
      <section className="flex items-center justify-center pt-16 mx-auto">
        <p className="font-bold tracking-wide font-mono text-[#9ca3af]">
          <span className="font-playfair text-[#f5f5f5]">— Muy bien, Ricardo —</span><br />
          dice el entrevistador mientras gira la pantalla hacia ti.<br />
          <span className="font-playfair text-[#f5f5f5]">— Me gustaría ver algunos de tus proyectos...</span><br />
          Sonrío. Este es el momento donde mis ideas toman forma.<br />
          <span className="font-playfair text-[#f5f5f5]">— Claro —</span> respondo.
          <span className="font-playfair text-[#f5f5f5]"> — Estos son algunos de mis proyectos.</span>
        </p>
      </section>

      {/* ESCENA STICKY */}
      <section ref={containerRef} className="relative h-[400vh] w-full">

        <div className="sticky top-0 h-screen flex items-center justify-center">

          {/* Contenedor de las cards */}
          <div className="relative w-full max-w-5xl h-125">

            {Projects.map((p, i) => (
              <div
                key={i}
                ref={(el) => (wrappersRef.current[i] = el!)}
                className="absolute top-0 left-0 w-full h-full pointer-events-auto"
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

      {/* Outro narrativa */}
      <section className="flex items-center justify-center px-16 my-18 mt-60 w-1/2 mx-auto">
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
