import Link from "next/link";
import Image from "next/image";
import Badge from "@/app/components/ui/Badge";
import StatCard from "@/app/components/molecules/StatCard";
import { cn } from "@/lib/utils/cn";

/**
 * CaseStudyCard — card for case studies listing/grid.
 * Shows thumbnail, client name, category badge, tagline, and key stats.
 */
export default function CaseStudyCard({ caseStudy, className = "" }) {
  const { slug, client, tagline, category, thumbnail, stats } = caseStudy;

  return (
    <Link
      href={`/case-studies/${slug}`}
      className={cn(
        "group flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white",
        "hover:shadow-lg hover:border-amber-300 transition-all duration-300",
        className
      )}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] bg-gray-100 overflow-hidden">
        <Image
          src={thumbnail}
          alt={client}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <Badge variant="amber" className="self-start mb-3">{category}</Badge>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{client}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{tagline}</p>

        {/* Stats row */}
        {stats?.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {stats.slice(0, 2).map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                label={stat.label}
                positive={stat.positive}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
