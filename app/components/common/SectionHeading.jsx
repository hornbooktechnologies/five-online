import { cn } from "@/lib/utils/cn";

/**
 * SectionHeading — reusable section title block.
 * Exact Figma specs:
 *  - H2: Fraunces 400 (not bold!) — matches Reckless Neue 400 54px from Figma
 *  - Label: Poppins 600 20px
 *  - Subtitle: DM Sans 400 18px
 *
 * @param {"light"|"dark"} mode  - "dark" bg sections → white text
 *                                  "light" (default) → black text
 * @param {"center"|"left"} align
 */
export default function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  mode = "light",
  className = "",
}) {
  const isDark = mode === "dark";
  const alignClass = align === "center" ? "text-center" : "text-left";
  const titleColor = isDark ? "text-white" : "text-black";
  const subColor = isDark ? "text-zinc-300" : "text-blacks";
  const labelColor = isDark ? "text-zinc-400" : "text-black";

  return (
    <div className={cn(alignClass, "mb-12", className)}>
      {label && (
        <p className={cn(
          "text-[20px] leading-[30px] font-semibold mb-3",
          "font-body",   /* Poppins */
          labelColor
        )}>
          {label}
        </p>
      )}
      {title && (
        <h2
          className={cn(
            "font-display text-[54px] leading-[64px] font-normal tracking-tight mb-4",
            titleColor
          )}
        >
          {title}
        </h2>
      )}
      {subtitle && subtitle.map((sub, index) => (
        <p key={index} className={cn(
          "mt-1 text-[18px] leading-[26px] font-normal",
          "font-sans",   /* Season Sans */
          subColor,
          align === "center" ? "max-w-2xl mx-auto" : "",
        )}>
          {sub}
        </p>
      ))}
    </div>
  );
}
