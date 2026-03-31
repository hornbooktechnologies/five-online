import { cn } from "@/lib/utils/cn";

/**
 * Section — semantic <section> wrapper with background + padding variants.
 * Eliminates repetitive bg/padding Tailwind strings across every section component.
 *
 * @param {"white"|"gray"|"dark"|"darker"|"amber"} bg
 * @param {"sm"|"md"|"lg"|"none"} padding
 * @param {string} id  - section anchor id
 */
const bgMap = {
  white:  "bg-white",
  gray:   "bg-gray-50",
  dark:   "bg-zinc-950",
  darker: "bg-black",
  amber:  "bg-amber-500",
};

const paddingMap = {
  none: "",
  sm:   "py-12 sm:py-16",
  md:   "py-16 sm:py-24",
  lg:   "py-20 sm:py-28 lg:py-36",
};

export default function Section({
  children,
  bg = "white",
  padding = "lg",
  id,
  className = "",
}) {
  return (
    <section
      id={id}
      className={cn(bgMap[bg], paddingMap[padding], className)}
    >
      {children}
    </section>
  );
}
