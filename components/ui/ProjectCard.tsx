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
  status?: "En progreso" | "MVP" | "Finalizado";
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
        label="Project Card"
        ref={ref}
        style={style} 
        className={cn(
          "relative w-full h-full rounded-xl overflow-hidden will-change-transform",
          "bg-card border-3 border-[#007483] shadow-xl flex py-4",
          className
        )}
      >
        {/* Número */}
        <div label="Project Number" className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-[#007483] border-2 border-white/50 text-white font-mono">
          Project {index + 1}
        </div>

        {/* Imagen */}
        <div label="Project Image" className="w-2/3 h-4/5 relative top-10 px-8 py-8 mx-4 my-2 rounded-2xl bg-gradient overflow-hidden">
          <Image
            src={image || "/placeholder.png"}
            width={600}
            height={400}
            alt={title}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 bg-linear-to-br from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Contenido */}
        <div label="Project Content" className="w-1/3 h-full  flex flex-col justify-around">
          <div className="border-b-2 border-[#00e0ff]/30 py-2 h-full flex flex-col justify-around gap-4 px-4">
            <h3 className="md:text-4xl text-2xl text-primary font-bold text-center">
              {title}
            </h3>
            <p className="text-neutral-400  leading-relaxed md:text-base text-sm">
              {description}
            </p>
            {tech.length > 0 && (
              <div label="Project Tech" className="flex flex-wrap gap-2 justify-end">
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
          <div className="flex items-center justify-around gap-4 mt-2">
            <div className="flex gap-4">
              {code && (
                <a
                  label="Project Code"
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer z-50 flex items-center gap-1"
                >
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                    </span>
                  Code
                </a>
              )}

              {live && (
                <a
                  label="Project Live"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={live}
                  className="text-green-400 hover:text-green-300 transition-colors cursor-pointer z-50 flex items-center gap-1"
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
                  label="Project Status"
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
