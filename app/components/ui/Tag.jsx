import { cn } from "@/lib/utils/cn";

/**
 * Tag — amber pill for highlighted phrases and callout text.
 * Prominent accent element visible in inner page hero sections.
 */
export default function Tag({ children, className = "" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-sm font-semibold text-amber-600",
        className
      )}
    >
      {children}
    </span>
  );
}
