"use client";

import { ArrowUpRight } from "lucide-react";

/**
 * Reusable Button component
 * variant: "primary" | "outline" | "cta-circle"
 */
export default function Button({
  href = "#",
  children,
  variant = "primary",
  onClick,
  className = "",
  icon = false,
}) {
  const base =
    "inline-flex items-center gap-2 font-semibold transition-all duration-300 ease-out cursor-pointer select-none focus:outline-none";

  const variants = {
    primary:
      "bg-[#093cad] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 shadow-sm hover:shadow-md",
    outline:
      "border border-zinc-200 text-zinc-800 px-5 py-2 rounded-full text-sm hover:border-brand-blue hover:text-brand-blue",
  };

  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {children}
        {icon && <ArrowUpRight className="w-4 h-4" />}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls}>
      {children}
      {icon && <ArrowUpRight className="w-4 h-4" />}
    </button>
  );
}
