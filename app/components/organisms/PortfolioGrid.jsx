"use client";

import { useState } from "react";
import Container from "@/app/components/common/Container";
import SectionHeading from "@/app/components/common/SectionHeading";
import PortfolioCard from "@/app/components/molecules/PortfolioCard";
import ScrollReveal from "@/app/components/common/ScrollReveal";
import { portfolioCategories } from "@/lib/data/portfolio";

/**
 * PortfolioGrid — filterable grid of PortfolioCards.
 * Used on Portfolio listing page.
 */
export default function PortfolioGrid({ items = [] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? items
    : items.filter((item) => item.category === active);

  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Our Portfolio"
            subtitle={["A glimpse into some of the websites we've designed for brands across industries."]}
            mode="light"
          />
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.06}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {portfolioCategories.map((cat) => (
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
          {filtered.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.06}>
              <PortfolioCard item={item} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
