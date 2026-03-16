export default function Footer() {
  return (
    <footer className=" w-full overflow-hidden border-t border-white/5">
      {/* Gradient line separator */}
      <div className=" w-full h-px opacity-30" />
      
      <div className="w-full py-8 flex flex-col items-center justify-center gap-6 bg-black/40 backdrop-blur-sm text-center px-4">
        <div className="flex flex-col md:flex-row items-center gap-4 text-sm md:text-base text-[#9ca3af] font-mono">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="opacity-80 font-bold tracking-tighter">2026</span>
          </div>
          
          <p className="group">
            Designed & Developed by{" "}
            <span className="font-bold text-white text-lg group-hover:text-secondary transition-all duration-500 cursor-default relative">
              Riesal
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-secondary transition-all duration-500 group-hover:w-full" />
            </span>
          </p>

          <span className="flex items-center gap-3 bg-white/5 px-5 py-1.5 rounded-full border border-white/10 text-xs uppercase tracking-widest">
            with <span className="inline-block animate-pulse scale-200">☕</span> & <span className="inline-block animate-bounce scale-200">💻</span>
          </span>
        </div>
        <p className="text-[10px] text-[#9ca3af]/60 italic tracking-[0.3em] uppercase mt-2 select-none">Enjoy your stay!!</p>
      </div>
    </footer>
  );
}