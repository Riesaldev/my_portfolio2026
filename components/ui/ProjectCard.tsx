"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ProjectCardProps {
  index: number;
  title: string;
  description: string;
  tech?: string[];
  code?: string;
  live?: string;
  status?: string;
  image?: string;
  className?: string;
  style?: React.CSSProperties; // ← NECESARIO
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      index,
      title,
      description,
      tech = [],
      code,
      live,
      status,
      image,
      className,
      style
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={style} 
        className={cn(
          "relative w-11/12 h-full rounded-xl overflow-hidden will-change-transform flex-col md:flex-row",
          "bg-card border-3 border-[#007483] shadow-xl flex py-4 px-2 md:px-0",
          className
        )}
      >
        {/* Número */}
        <div className="absolute top-2 left-2 md:top-4 md:left-4 z-20 px-3 py-1 md:px-4 md:py-2 rounded-full bg-[#007483] border-2 border-white/50 text-white font-mono text-xs md:text-base">
          Project {index + 1}
        </div>

        {/* Imagen */}
        <div className="w-full md:w-2/3 h-48 md:h-4/5 relative md:top-10 px-4 md:px-8 py-4 md:py-8 md:mx-4 my-2 rounded-2xl bg-gradient overflow-hidden shrink-0">
          <Image
            src={image || "/placeholder.png"}
            width={800}
            height={400}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 800px"
          />

          <div className="absolute inset-0 bg-linear-to-br from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Contenido */}
        <div className="w-full md:w-1/3 h-full flex flex-col justify-between md:justify-around p-2 md:p-0">
          <div className="border-b-2 border-[#00e0ff]/30 py-2 flex flex-col gap-2 md:gap-4 px-2 md:px-4">
            <h3 className="md:text-4xl text-xl text-primary font-bold text-center md:text-left">
              {title}
            </h3>
            <p className="text-neutral-400 leading-relaxed md:text-base text-xs line-clamp-3 md:line-clamp-none">
              {description}
            </p>
            {tech.length > 0 && (
              <div className="flex flex-wrap gap-1 md:gap-2 justify-center md:justify-end">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs md:text-sm rounded-md bg-neutral-800 text-neutral-300 border border-neutral-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Botones */}
          <div className="flex items-center justify-between md:justify-around gap-2 mt-2 px-2">
            <div className="flex gap-3 md:gap-4">
              {code && (
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer z-50 flex items-center gap-1 text-sm md:text-base"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                    </span>
                  Code
                </a>
              )}

              {live && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={live}
                  className="text-green-400 hover:text-green-300 transition-colors cursor-pointer z-50 flex items-center gap-1 text-sm md:text-base"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"/><path strokeLinecap="round" strokeLinejoin="round" d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12s3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"/><path d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525z" clipRule="evenodd"/></g></svg>
                  </span>
                  Live
                </a>
              )}
            </div>

            {status && (
              <span
                  className={cn(
                    "px-2 py-1 text-xs md:text-sm rounded-md",
                    status === "MVP"
                      ? "bg-yellow-400 text-black"
                      : status === "En progreso"
                      ? "bg-blue-400 text-black"
                      : "bg-green-400 text-black"
                  )}
              >
                {status}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
export default ProjectCard;
