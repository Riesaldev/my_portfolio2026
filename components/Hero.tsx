"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const maskRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(maskRef.current, {
        scale: 300,
        scrollTrigger: {
          trigger: containerRef.current,
          scrub: 1,
          pin: true,
          start: "top top",
          end: "+=1000",
          ease: "none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen">
      <video
        src="/invideo.mp4"
        className="fixed inset-0 w-full h-full object-cover -z-10 scale-140 top-12"
        autoPlay
        loop
        muted
      />
      <div
        ref={maskRef}
        className="relative z-10 h-screen w-full flex flex-col items-center justify-center bg-white"
        style={{ mixBlendMode: "screen", willChange: "transform" }}
      >
        <h1 className="text-9xl font-bold tracking-wide font-display text-black relative top-2">
          RIESAL
        </h1>
        {/* Icono de scroll aquí */}
        <div className="absolute bottom-22 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-80 animate-bounce pointer-events-none select-none">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path d="M12 16V4M12 16l-6-6M12 16l6-6" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-zinc-700 mt-1">Scroll</span>
        </div>
      </div>
    </section>
  );
}