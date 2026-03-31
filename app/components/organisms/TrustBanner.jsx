import Container from "@/app/components/common/Container";
import Button from "@/app/components/common/Button";
import ScrollReveal from "@/app/components/common/ScrollReveal";

/**
 * TrustBanner — "Built in India. Trusted Globally." dark section.
 * Used on About Us page between TeamGrid and FAQ.
 */
export default function TrustBanner({
  headline = "Built in India. Trusted Globally.",
  subline = "India gives us engineering depth. Global exposure gives us perspective.",
  description = "We combine strategic thinking with execution efficiency — delivering enterprise-level thinking with long-term partnership models.",
  ctaLabel = "Book A Call",
  ctaHref = "/contact",
}) {
  return (
    <section className="bg-[#f8f8f8] py-20 sm:py-28">
      <Container className="text-center">
        <ScrollReveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-tight mb-6">
            {headline}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-lg text-black/70 font-normal mb-4">{subline}</p>
          <p className="text-black/60 max-w-2xl mx-auto text-base leading-relaxed mb-10">
            {description}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18}>
          <Button href={ctaHref} variant="dark" size="lg">{ctaLabel}</Button>
        </ScrollReveal>
      </Container>
    </section>
  );
}
