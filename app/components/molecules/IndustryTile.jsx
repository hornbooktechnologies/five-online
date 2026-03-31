import Image from "next/image";
import { cn } from "@/lib/utils/cn";

/**
 * IndustryTile — image tile with industry category label overlay.
 * Used in About Us / industry strip section.
 */
export default function IndustryTile({ label, image, className = "" }) {
  return (
    <div
      className={cn(
        "group relative aspect-[3/4] rounded-2xl overflow-hidden shrink-0",
        className
      )}
    >
      {/* Image */}
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 20vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-sm font-semibold text-white">{label}</p>
      </div>
    </div>
  );
}
