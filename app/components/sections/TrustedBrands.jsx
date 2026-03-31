"use client";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const brands = [
  "Garware Hi-Tech",
  "Budget Store",
  "Brand Co.",
  "Zeal Aqua",
  "Nexus Corp",
  "Urban Edge",
  "Prime Trust",
  "Blue Horizon",
];

export default function TrustedBrands() {
  return (
    <section className="py-20 sm:py-28 bg-black">
      <Container>
        <SectionHeading
          title="Trusted by Ambitious Brands"
          subtitle="Delivering high-performance websites since 2005."

        />
        {/* Logo marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
          <div className="flex animate-marquee gap-12 py-4">
            {[...brands, ...brands].map((brand, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center justify-center w-44 h-20 rounded-xl bg-zinc-900/60 border border-zinc-800 px-6"
              >
                <span className="text-gray-400 font-semibold text-sm whitespace-nowrap">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
