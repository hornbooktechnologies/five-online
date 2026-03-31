import Link from "next/link";
import { cn } from "@/lib/utils/cn";

/**
 * Button — two variants matching Figma exactly.
 *
 * solid / dark  — #000000 fill, white text  (Figma: bg=#000 pill r=50 h=52)
 * outline       — white bg, #000 border 1px (Figma: bg=#fff stroke=#000 h=54)
 * ghost         — no border, subtle hover
 */
const variants = {
  solid: "bg-black text-white hover:bg-zinc-800 transition-colors",
  dark: "bg-black text-white hover:bg-zinc-800 transition-colors",
  outline: "bg-white border border-black text-black hover:bg-zinc-50 transition-colors",
  ghost: "bg-transparent text-black hover:bg-zinc-100 transition-colors",
  primary: "bg-black text-white hover:bg-zinc-800 transition-colors",
  secondary: "bg-white border border-black text-black hover:bg-zinc-50 transition-colors",
};

const sizes = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-2.5 text-base",
  lg: "px-[21px] py-[9px] text-[19px]",
};

export default function Button({
  children,
  href,
  variant = "solid",
  size = "md",
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const baseClasses = cn(
    "inline-flex items-center justify-center gap-2 rounded-full",
    "leading-[27px] tracking-[0] font-normal",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
}
