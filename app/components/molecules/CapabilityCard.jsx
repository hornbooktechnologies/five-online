import { cn } from "@/lib/utils/cn";

/**
 * CapabilityCard — icon + title + description card.
 * Used in inner page team/capability grids (light bg).
 * Distinct from homepage CoreCapabilities dark cards.
 *
 * @param {"amber"|"blue"|"green"|"purple"} color - icon accent color
 */
const colorMap = {
  amber:  "text-[#6abd45] bg-[#eaffdf]  group-hover:bg-[#eaffdf]/80",
  blue:   "text-blue-600  bg-blue-50   group-hover:bg-blue-100",
  green:  "text-[#6abd45] bg-[#eaffdf]  group-hover:bg-[#eaffdf]/80",
  purple: "text-purple-600 bg-purple-50 group-hover:bg-purple-100",
};

export default function CapabilityCard({
  icon,
  title,
  description,
  color = "amber",
  className = "",
}) {
  return (
    <div
      className={cn(
        "group flex flex-col gap-4 rounded-2xl border border-[#d7d7d7] bg-white p-6 sm:p-7",
        "hover:border-black hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div
        className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
          colorMap[color]
        )}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-black mb-1.5">
          {title}
        </h3>
        <p className="text-sm text-black/60 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
