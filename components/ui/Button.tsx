import React, { useRef, useState } from "react";

type Variant = "primary" | "secondary" | "gradient" | "whiteGlass";
type Size = "sm" | "md" | "lg";

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-[#7b5cff]/10 border-[#7b5cff]/30 shadow-[#7b5cff]/20 hover:bg-[#7b5cff]/20",
  secondary: "bg-[#00e0ff]/10 border-[#00e0ff]/30 shadow-[#00e0ff]/20 hover:bg-[#00e0ff]/20",
  gradient:
    "bg-gradient-to-br from-[#7b5cff]/20 via-[#00e0ff]/10 to-[#ff7ce5]/20 border-white/10 shadow-white/10 hover:from-[#7b5cff]/30 hover:to-[#ff7ce5]/30",
  whiteGlass: "bg-white/5 border-white/10 shadow-white/20",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      type="submit"
      aria-label="Glass button"
      className={`group relative overflow-hidden rounded-2xl font-semibold text-white backdrop-blur-2xl border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_0_15px_var(--tw-shadow-color)] transition-all duration-500 active:scale-95 cursor-pointer hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_25px_var(--tw-shadow-color)] hover:-translate-y-0.5 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {/* Inner Glow/Depth */}
      <span className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent pointer-events-none" />
      
      {/* Cursor Follow Shine */}
      <span
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
        }}
        className={
          `absolute w-48 h-48 transition-opacity duration-500 pointer-events-none blur-2xl ` +
          (isHovered ? "opacity-100" : "opacity-0")
        }
      />

      {/* Content */}
      <span className="relative z-10 block transition-transform duration-300 group-hover:scale-105">{children}</span>
    </button>
  );
};

export default GlassButton;
