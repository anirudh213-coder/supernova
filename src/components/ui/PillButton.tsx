// src/components/ui/PillButton.tsx
import type { PillButtonProps } from "../../types";

export default function PillButton({
  label,
  variant = "primary",
  onClick,
  href,
  icon,
  className = "",
  disabled = false,
  type = "button",
  alwaysShowLabel = false,
}: PillButtonProps) {
  const baseStyles = `
    group inline-flex items-center justify-center
    gap-3 sm:gap-0 sm:group-hover:gap-3
    p-3 sm:p-3.5
    rounded-full
    font-bold text-sm sm:text-base
    transition-all duration-300 ease-out
    focus:outline-none
    disabled:opacity-50
    disabled:pointer-events-none
    select-none
    overflow-hidden
  `;

  const variants = {
    primary:
      "bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:pr-6",

    secondary:
      "bg-slate-900/80 text-slate-200 hover:bg-slate-800 hover:text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:pr-6",

    outline:
      "bg-transparent text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 hover:pr-6",

    ghost:
      "bg-transparent text-slate-400 hover:text-cyan-400 hover:bg-slate-800/40 hover:pr-6",
  };

  const combinedClasses =
    `${baseStyles} ${variants[variant]} ${className}`.trim();

  const content = (
    <>
      {icon && (
        <span className="flex items-center justify-center flex-shrink-0">
          {icon}
        </span>
      )}

      <span
        className={
          alwaysShowLabel
            ? "whitespace-nowrap opacity-100 sm:max-w-0 sm:opacity-0 sm:overflow-hidden sm:transition-all sm:duration-300 sm:ease-out sm:group-hover:max-w-xs sm:group-hover:opacity-100"
            : "max-w-0 opacity-0 whitespace-nowrap overflow-hidden transition-all duration-300 ease-out group-hover:max-w-xs group-hover:opacity-100"
        }
      >
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
}