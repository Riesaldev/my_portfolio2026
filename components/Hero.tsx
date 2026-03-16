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

    const onScroll = () => {
      if (window.scrollY === 0 && maskRef.current) {
        gsap.set(maskRef.current, { scale: 1 });
        ScrollTrigger.refresh();
      }
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", ScrollTrigger.refresh);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", ScrollTrigger.refresh);
    };
  }, []);

  return (
    <section label="Home Section" id="home" ref={containerRef} className="min-h-screen w-screen h-auto relative overflow-hidden">
      <video
        label="Video"
        src="/invideo.mp4"
        className="fixed inset-0 w-full h-full object-cover -z-10 md:scale-140 top-12"
        autoPlay
        loop
        muted
        loads="eager"
      />
      <div
        label="Mask"
        ref={maskRef}
        className="relative z-10 h-screen w-full flex flex-col items-center justify-center bg-white"
        style={{ mixBlendMode: "screen", willChange: "transform" }}
      >
        <h1 className="text-9xl font-bold tracking-wide font-playfair text-black relative right-3">
          RIESAL
        </h1>
        <div label="Scroll" className="absolute bottom-1/4 flex flex-col items-center opacity-80 animate-bounce pointer-events-none select-none">
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
            <path d="M12 16V4M12 16l-6-6M12 16l6-6" stroke="#222" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-zinc-700 mt-1 text-2xl font-black font-geistMono tracking-tight">Scroll</span>
        </div>
      </div>
    </section>
  );
}