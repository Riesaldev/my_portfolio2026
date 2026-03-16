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

  const aboutRefIntro = useAnimateText({ delay: 0.8, duration: 0.6, stagger: 0.008  });
  const aboutRefOutro = useAnimateText({ delay: 0.8, duration: 0.6, stagger: 0.008  });
  return (
    <section label="Projects Section"id="projects" className="relative w-screen bg-black">
      <section
      label="Intro Section"
      ref={aboutRefIntro}
      className="flex items-center justify-center px-16 my-18 mt-22 w-1/2 mx-auto">
        <p className="font-bold tracking-wide font-mono text-[#9ca3af]">
          <span className="font-playfair text-[#f5f5f5] text-lg">— Very well, Ricardo,</span><br />
          the interviewer says while turning the screen towards you.<br />
          <span className="font-playfair text-[#f5f5f5] text-lg">— I´d like to see some of your projects.</span><br />
          I smile. This is the moment where my ideas take shape.<br />
          <span className="font-playfair text-[#f5f5f5] text-lg">— Of course —</span> I reply.
          <span className="font-playfair text-[#f5f5f5] text-lg"> — These are some of my projects.</span>
        </p>
      </section>
      <section label="Projects" ref={containerRef} className="relative h-[500vh] w-full">
        <div className="sticky -top-12 h-screen flex items-center justify-center">
          <div label="Projects Wrapper" className="relative w-full max-w-5xl h-125">
            {Projects.map((p, i) => (
              <div
                key={i}
                ref={(el) => (wrappersRef.current[i] = el!)}
                className="absolute top-6 left-0 w-full h-full pointer-events-auto"
                style={{ zIndex: i + 1 }}
              >
                <ProjectCard
                  label={`Project ${i + 1}`}
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
      label="Outro Section"
      ref={aboutRefOutro}
      className="flex items-center justify-center px-16 my-18 mt-22 w-1/3 mx-auto">
        <p className="font-bold tracking-wide font-mono text-[#9ca3af]">
          The interviewer smiles, satisfied.<br/> 
          <span className="font-playfair text-[#f5f5f5] text-lg">— I see you have variety, but also coherence. You care about experience, detail, and functionality.</span><br />
          <span className="font-playfair text-[#f5f5f5] text-lg">— Yes, very much —</span> I reply. 
          <span className="font-playfair text-[#f5f5f5] text-lg">— For me, every project is an opportunity to learn something new and to create something that truly works for someone.</span>
        </p>
      </section>
    </section>
  );
}
