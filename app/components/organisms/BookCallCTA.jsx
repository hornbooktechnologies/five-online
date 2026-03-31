import Link from "next/link";
import Container from "@/app/components/common/Container";
import Button from "@/app/components/common/Button";
import ScrollReveal from "@/app/components/common/ScrollReveal";

/**
 * BookCallCTA — dark full-width CTA band.
 * Used at the bottom of every inner page before the footer.
 * Identical to the homepage "Book a Strategy Call" pattern.
 */
export default function BookCallCTA({
  heading = "Schedule a 30-minute call with CEO to see if we are a good match.",
  label = "Want to build a website with us?",
  ctaLabel = "Book a Strategy Call",
  ctaHref = "/contact",
}) {
  return (
    <section className="bg-[#000000] py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="text-[#6abd45] text-sm font-semibold uppercase tracking-widest mb-4">
              {label}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10">
              {heading}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.16}>
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaLabel}
            </Button>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
