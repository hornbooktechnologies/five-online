import Link from "next/link";
import Container from "@/app/components/common/Container";
import ScrollReveal from "@/app/components/common/ScrollReveal";
import { cn } from "@/lib/utils/cn";
import { ArrowRightIcon } from "../icons";

/**
 * PageHero — Inner page hero section. Exact Figma match.
 *
 * Figma specs (About page frame 57:11):
 *  H1:      Reckless Neue (→Fraunces) 400  96px  lh=100px  color=#000
 *  subline: Season Sans (→DM Sans)    400  18px  lh=22px   color=#000
 *  subline2:Season Sans (→DM Sans)    400  24px  lh=36px   color=#000
 *  btn solid: bg=#000  text=#fff  pill r=50  w=253 h=52  Poppins 400 18px + arrow white
 *  btn outline: bg=#fff  stroke=#000 1px  pill r=50  w=268 h=54  DM Sans 400 18px + arrow black
 *
 * @param {string}   headline   - H1 text
 * @param {string}   subline    - paragraph 1, smaller (18px DM Sans)
 * @param {string}   subline2   - paragraph 2, larger (24px DM Sans)
 * @param {Array}    ctas       - [{label, href, variant: "solid"|"dark"|"outline"}]
 * @param {Array}    meta       - [{text}] small grey items below CTAs
 * @param {"center"|"left"} align
 */
export default function PageHero({
  headline,
  subline,
  subline2,
  ctas = [],
  meta = [],
  align = "center",
  className = "",
}) {
  const isCenter = align === "center";

  return (
    <section
      className={cn("bg-white", className)}
      style={{ paddingTop: "130px", paddingBottom: "80px" }}  /* Figma: H1 at y=158, frame top=14, header≈88px */
    >
      <Container>
        <div className={cn(isCenter ? "text-center" : "")}>

          {/* H1 — Figma: Reckless Neue 400 96px lh=100px, centered, 1103px wide on 1440 canvas */}
          <ScrollReveal>
            <h1
              className="font-display font-normal text-black mb-4"
              style={{
                fontSize: "clamp(48px, 6.67vw, 96px)",
                lineHeight: "1.05",
              }}
            >
              {headline}
            </h1>
          </ScrollReveal>

          {/* Subline 1 — Figma: Season Sans 400 18px lh=22px — gap after H1: ~16px */}
          {subline && (
            <ScrollReveal delay={0.08}>
              <p
                className={cn("font-sans text-black", subline2 ? "mb-4" : "mb-10", isCenter ? "mx-auto" : "")}
                style={{
                  fontSize: "18px",
                  lineHeight: "22px",
                  maxWidth: "740px",
                }}
              >
                {subline}
              </p>
            </ScrollReveal>
          )}

          {/* Subline 2 — Figma: Season Sans 400 24px lh=36px — gap between subtexts: ~25px */}
          {subline2 && (
            <ScrollReveal delay={0.12}>
              <p
                className={cn("font-sans text-black mb-12", isCenter ? "mx-auto" : "")}
                style={{
                  fontSize: "24px",
                  lineHeight: "36px",
                  maxWidth: "800px",
                }}
              >
                {subline2}
              </p>
            </ScrollReveal>
          )}

          {/* CTAs — Figma: two pills, gap=30px, solid black + outline black */}
          {ctas.length > 0 && (
            <ScrollReveal delay={0.18}>
              <div className={cn("flex flex-col sm:flex-row gap-8", isCenter ? "justify-center" : "")}
                style={{ gap: "30px" }}
              >
                {ctas.map((cta) => {
                  const isSolid = cta.variant === "solid" || cta.variant === "dark";
                  return (
                    <Link
                      key={cta.label}
                      href={cta.href}
                      className="font-body inline-flex items-center gap-2.5 rounded-full transition-opacity hover:opacity-80"
                      style={{
                        /* Figma solid: w=253 h=52 | outline: w=268 h=54 */
                        height: isSolid ? "52px" : "54px",
                        padding: "0 32px",
                        backgroundColor: isSolid ? "#000000" : "#ffffff",
                        border: isSolid ? "none" : "1px solid #000000",
                        color: isSolid ? "#ffffff" : "#000000",
                        fontSize: "18px",
                        lineHeight: "27px",
                      }}
                    >
                      {cta.label}
                      <ArrowRightIcon color={isSolid ? "#ffffff" : "#000000"} />
                    </Link>
                  );
                })}
              </div>
            </ScrollReveal>
          )}

          {/* Meta items */}
          {meta.length > 0 && (
            <ScrollReveal delay={0.24}>
              <div className={cn("flex flex-wrap gap-x-6 gap-y-2 mt-8", isCenter ? "justify-center" : "")}>
                {meta.map((m) => (
                  <span key={m.text} className="font-body text-sm text-zinc-500">
                    {m.text}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </Container>
    </section>
  );
}

