import Container from "@/app/components/common/Container";
import SectionHeading from "@/app/components/common/SectionHeading";
import IndustryTile from "@/app/components/molecules/IndustryTile";
import ScrollReveal from "@/app/components/common/ScrollReveal";

/**
 * IndustryStrip — "Two Decades. Multiple Market Cycles." section.
 * Horizontal scrollable row of 5 industry image tiles.
 * Used on About Us page.
 */
export default function IndustryStrip({
  headline = "Two Decades. Multiple Market Cycles.",
  stats = { projects: "320+", industries: "25+" },
  industries = [],
}) {
  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <Container>
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <ScrollReveal>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight max-w-sm">
              {headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="max-w-sm">
              <p className="text-black/70 text-base leading-relaxed">
                Over {stats.projects} projects we have delivered across {stats.industries}+ industries — continuously adapting to algorithm shifts, platform changes and evolving buyer behaviour.
              </p>
              <p className="text-sm font-semibold text-[#6abd45] mt-3">
                Longevity is not about survival. It&apos;s about relevance.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Container>

      {/* Industry tiles — full bleed horizontal scroll on mobile */}
      <div className="px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24">
        <ScrollReveal stagger>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((ind) => (
              <IndustryTile
                key={ind.label}
                label={ind.label}
                image={ind.image}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
