
'use client';
import dynamic from "next/dynamic";
const IconCloud = dynamic(() => import("./IconCloud"), { ssr: false });

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "astro",
  "mysql",
  "mongodb",
  "tailwindcss",
  "vuedotjs",
  "i18next",
  "gatsby",
  "angular",
  "shadcnui",
  "bootstrap",
  "nextdotjs",
  "blender",
  "threedotjs",
  "gsap",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "postman"
];

export default function IconGlobe() {
  return (
    <div className="relative flex max-w-screen items-center justify-center overflow-hidden rounded-lg  bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

