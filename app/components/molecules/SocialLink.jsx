import { cn } from "@/lib/utils/cn";

/**
 * SocialLink — icon + accessible external link.
 * Used in Footer, CEO feature section, contact page.
 *
 * @param {"dark"|"light"} mode
 */
export default function SocialLink({ href, label, icon, mode = "dark", className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200",
        mode === "dark"
          ? "text-gray-400 hover:text-amber-500 hover:bg-white/10"
          : "text-gray-500 hover:text-amber-600 hover:bg-amber-50 border border-gray-200",
        className
      )}
    >
      {icon}
    </a>
  );
}
