"use client";

import { useState } from "react";
import Container from "@/app/components/common/Container";
import PortfolioCard from "@/app/components/molecules/PortfolioCard";

const industryOptions = [
  "All",
  "eCommerce & D2C",
  "Enterprise & B2B",
  "Real Estate",
  "Retail",
  "Lifestyle",
];

function FilterGroup({ label, options, active, onSelect }) {
  return (
    <div className="mb-7">
      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
        {label}
      </p>
      <ul className="space-y-1.5">
        {options.map((opt) => (
          <li key={opt}>
            <button
              onClick={() => onSelect(opt)}
              className={`flex items-center gap-2 text-sm transition-colors w-full text-left ${
                active === opt
                  ? "text-gray-900 font-medium"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                  active === opt ? "bg-gray-900" : "bg-transparent border border-gray-300"
                }`}
              />
              {opt}
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t border-gray-100" />
    </div>
  );
}

/**
 * SidebarFilterGrid — Figma-accurate layout with left sidebar filters + 3-col grid.
 * Used on the homepage and portfolio listing page.
 */
export default function SidebarFilterGrid({ items = [], showProblemFilter = true }) {
  const [activeCapability, setActiveCapability] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filtered = items.filter((item) => {
    const capOk = activeCapability === "All" || item.category === activeCapability;
    const indOk = activeIndustry === "All" || item.category === activeIndustry;
    return capOk && indOk;
  });

  return (
    <section className="bg-white pb-20">
      <Container>
        <div className="flex gap-12">
          {/* Sidebar */}
          <aside className="hidden lg:block w-44 flex-shrink-0 pt-1">
            <FilterGroup
              label="Capability"
              options={industryOptions}
              active={activeCapability}
              onSelect={(v) => { setActiveCapability(v); setActiveIndustry("All"); }}
            />
            {showProblemFilter && (
              <FilterGroup
                label="Industry"
                options={industryOptions}
                active={activeIndustry}
                onSelect={(v) => { setActiveIndustry(v); setActiveCapability("All"); }}
              />
            )}
          </aside>

          {/* Grid */}
          <div className="flex-1 min-w-0">
            {/* Mobile filter row */}
            <div className="flex lg:hidden flex-wrap gap-2 mb-6">
              {industryOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setActiveCapability(opt)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    activeCapability === opt
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {filtered.map((item, i) => (
                <PortfolioCard key={item.id} item={item} featured={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
