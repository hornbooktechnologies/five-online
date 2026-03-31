import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils/cn";

/**
 * PortfolioCard — matches Figma card design.
 * Shows image, title, description, tags. Optional arrow on featured card.
 */
export default function PortfolioCard({ item, featured = false, className = "" }) {
  const { title, description, thumbnail, url, tags } = item;

  return (
    <Link
      href={url || "#"}
      className={cn(
        "group block bg-white overflow-hidden",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden rounded-sm mb-3">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-103"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {featured && (
          <div className="absolute top-3 right-3">
            <span className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 7l-10 10M17 7H7m10 0v10" />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pb-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
        {description && (
          <p className="text-xs text-gray-500 leading-relaxed mb-2 line-clamp-2">{description}</p>
        )}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] text-gray-600 bg-gray-100 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
