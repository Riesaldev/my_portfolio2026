import React from "react";

type Variant = "primary" | "secondary" | "gradient" | "whiteGlass";
type Size = "sm" | "md" | "lg";

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-[#7b5cff]/20 border-[#7b5cff]/40 shadow-[#7b5cff]/40",
  secondary: "bg-[#00e0ff]/20 border-[#00e0ff]/40 shadow-[#00e0ff]/40",
  gradient:
    "bg-gradient-to-r from-[#7b5cff]/30 via-[#00e0ff]/30 to-[#ff7ce5]/30 border-white/20 shadow-white/20",
  whiteGlass: "bg-white/10 border-white/20 shadow-white/30",
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
}) => {
  return (
    <button
      className={`
        group relative overflow-hidden rounded-2xl font-semibold text-white
        backdrop-blur-xl border shadow-[0_0_15px_var(--tw-shadow-color)]
        transition-all duration-300 active:scale-95 cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {/* Shine */}
      <span
        className="
          absolute inset-0 w-[120%] h-full
          bg-linear-to-r from-transparent via-white/30 to-transparent
          opacity-0 group-hover:opacity-100
          group-hover:animate-shine
          pointer-events-none
        "
      />

      {/* Pulse hover */}
      <span className="group-hover:animate-pulse block">{children}</span>
    </button>
  );
};

export default GlassButton;
