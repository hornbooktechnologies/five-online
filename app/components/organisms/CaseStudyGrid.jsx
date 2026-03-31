"use client";

import { useState } from "react";
import Container from "@/app/components/common/Container";
import SectionHeading from "@/app/components/common/SectionHeading";
import CaseStudyCard from "@/app/components/molecules/CaseStudyCard";
import ScrollReveal from "@/app/components/common/ScrollReveal";

const CATEGORIES = ["All", "Enterprise & B2B", "D2C Ecommerce", "Corporate"];

/**
 * CaseStudyGrid — filterable grid of CaseStudyCards.
 * Used on Case Studies listing page.
 */
export default function CaseStudyGrid({ caseStudies = [] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? caseStudies
    : caseStudies.filter((cs) => cs.category === active);

  const availableCategories = ["All", ...new Set(caseStudies.map((cs) => cs.category))];

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Case Studies"
            subtitle={["Real results from real engagements. No fabrications, no guesses."]}
            mode="light"
          />
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.06}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {availableCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${active === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cs, i) => (
            <ScrollReveal key={cs.slug} delay={i * 0.07}>
              <CaseStudyCard caseStudy={cs} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
