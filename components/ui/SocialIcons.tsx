"use client";

import React from "react";

const SocialIcons = () => {
  return (
    <div className="flex items-center justify-center gap-8 mt-8">
      {/* GitHub */}
      <a
        href="https://github.com/Riesaldev"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 transition-all duration-300 hover:text-white hover:bg-[#7b5cff]/20 hover:border-[#7b5cff]/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(123,92,255,0.3)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        <span className="absolute -bottom-8 scale-0 transition-all rounded bg-neutral-800 px-2 py-1 text-xs text-white group-hover:scale-100">GitHub</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ricardo-estupinan/"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/70 transition-all duration-300 hover:text-white hover:bg-[#00e0ff]/20 hover:border-[#00e0ff]/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,224,255,0.3)]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        <span className="absolute -bottom-8 scale-0 transition-all rounded bg-neutral-800 px-2 py-1 text-xs text-white group-hover:scale-100">LinkedIn</span>
      </a>
    </div>
  );
};

export default SocialIcons;
