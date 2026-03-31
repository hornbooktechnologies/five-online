import { cn } from "@/lib/utils/cn";

/**
 * Badge — small colored label chip.
 * Used for category tags, status indicators, service labels.
 *
 * @param {"amber"|"green"|"blue"|"red"|"gray"|"dark"} variant
 * @param {"sm"|"md"} size
 */
const variants = {
  amber: "bg-amber-100 text-amber-800 border border-amber-200",
  green: "bg-green-100 text-green-800 border border-green-200",
  blue:  "bg-blue-100  text-blue-800  border border-blue-200",
  red:   "bg-red-100   text-red-800   border border-red-200",
  gray:  "bg-gray-100  text-gray-600  border border-gray-200",
  dark:  "bg-zinc-800  text-zinc-300  border border-zinc-700",
};

const sizes = {
  sm: "text-xs px-2.5 py-0.5",
  md: "text-sm px-3 py-1",
};

export default function Badge({
  children,
  variant = "amber",
  size = "sm",
  className = "",
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
