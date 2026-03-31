"use client";

import { useState } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const categories = ["All", "Fashion", "Banking", "Corporate", "Ecommerce"];

const portfolioItems = [
  { id: 1, title: "Fashion Brand Store", category: "Fashion", color: "from-purple-600 to-pink-500" },
  { id: 2, title: "Banking Portal", category: "Banking", color: "from-blue-600 to-cyan-500" },
  { id: 3, title: "Corporate Website", category: "Corporate", color: "from-emerald-600 to-teal-500" },
  { id: 4, title: "D2C Ecommerce Platform", category: "Ecommerce", color: "from-orange-600 to-amber-500" },
  { id: 5, title: "Luxury Fashion Brand", category: "Fashion", color: "from-rose-600 to-pink-400" },
  { id: 6, title: "Enterprise Banking App", category: "Banking", color: "from-indigo-600 to-blue-400" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-black">
      <Container>
        <SectionHeading
          title="Our Portfolio"
          subtitle={["A glimpse into some of the websites we've designed for brands across industries."]}

        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                  ? "bg-amber-500 text-black"
                  : "bg-zinc-900 text-gray-400 border border-zinc-700 hover:border-amber-500/50 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`} />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button href="#" variant="outline">
            View Portfolio
          </Button>
        </div>
      </Container>
    </section>
  );
}
