import Container from "@/app/components/common/Container";

const notForItems = [
  "One-page brochure websites",
  "Just make it look good projects",
  "₹30–50K website requests",
  "Urgent 7-day builds without strategy",
];

/**
 * WhoNotForSection — "Who We're Not For" section from Contact page Figma.
 * Pill tags layout + "We focus on long-term revenue impact." label.
 */
export default function WhoNotForSection() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <Container>
        <h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Who We&apos;re Not For
        </h2>

        {/* Pill tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {notForItems.map((item) => (
            <span
              key={item}
              className="px-5 py-2.5 rounded-full border border-gray-200 text-sm text-gray-700 bg-white"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Focus note */}
        <div className="flex justify-center">
          <span className="px-5 py-2 rounded-full border border-green-300 text-sm text-green-700 bg-green-50">
            We focus on long-term revenue impact.
          </span>
        </div>
      </Container>
    </section>
  );
}
