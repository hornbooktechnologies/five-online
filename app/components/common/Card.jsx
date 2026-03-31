import { cn } from "@/lib/utils/cn";

/**
 * Card — surface container with visual variants for dark and light pages.
 *
 * Variants:
 *  default        — white bg, light shadow (light pages)
 *  light-bordered — white bg, visible border (light pages, grid cards)
 *  gray           — gray-50 bg (light pages, subtle)
 *  dark           — zinc-900 bg, zinc-800 border (dark/homepage)
 *  glass          — white/5 blur (dark pages, overlays)
 */
const variantClasses = {
  default:        "bg-white border border-gray-100 shadow-sm",
  "light-bordered": "bg-white border border-gray-200 shadow-sm",
  gray:           "bg-gray-50 border border-gray-100",
  dark:           "bg-zinc-900 border border-zinc-800",
  glass:          "bg-white/5 border border-white/10 backdrop-blur-sm",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  padding = true,
}) {
  return (
    <div
      className={cn(
        "rounded-2xl",
        padding ? "p-6 sm:p-8" : "",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
