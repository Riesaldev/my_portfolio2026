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
        ref={ref}
        style={style} 
        className={cn(
          "relative w-full h-full rounded-xl overflow-hidden will-change-transform",
          "bg-card border-3 border-[#007483] shadow-xl flex py-4",
          className
        )}
      >
        {/* Número */}
        <div className="absolute top-4 left-4 z-20 px-4 py-2 rounded-full bg-[#007483] border-2 border-white/50 text-white font-mono">
          Project {index + 1}
        </div>

        {/* Imagen */}
        <div className="w-2/3 h-4/5 relative top-10 px-8 py-8 mx-4 my-2 rounded-2xl bg-gradient overflow-hidden">
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
        <div className="w-1/3 h-full  flex flex-col justify-around">
          <div className="border-b-2 border-[#00e0ff]/30 py-2 h-full flex flex-col justify-around gap-4 px-4">
            <h3 className="md:text-4xl text-2xl text-primary font-bold text-center">
              {title}
            </h3>
            <p className="text-neutral-400  leading-relaxed md:text-base text-sm">
              {description}
            </p>
            {tech.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-end">
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
                  href={code}
                  target="_blank"
                  className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer z-50"
                >
                  Code
                </a>
              )}

              {live && (
                <a
                  href={live}
                  target="_blank"
                  className="text-green-400 hover:text-green-300 transition-colors cursor-pointer z-50"
                >
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
