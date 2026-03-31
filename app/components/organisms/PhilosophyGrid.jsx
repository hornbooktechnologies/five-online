import Container from "@/app/components/common/Container";
import SectionHeading from "@/app/components/common/SectionHeading";
import ScrollReveal from "@/app/components/common/ScrollReveal";

/**
 * PhilosophyGrid — "Our Revenue Philosophy" 4-card icon grid.
 * Light background, gray-50 cards, amber icon circles.
 * Used on About Us page.
 */
const iconMap = {
  brain: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
    </svg>
  ),
  target: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.974 7.974 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
  layers: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  "bar-chart": (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

export default function PhilosophyGrid({
  title,
  subtitle = [],
  mode,
  cards = [] }) {
  return (
    <section className="">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={title}
            subtitle={subtitle}
            mode={mode}
          />
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {cards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col justify-between gap-10 border px-[26px] py-[35px]"
              >
                <div className="w-11 h-11 rounded-xl bg-[#eaffdf] text-[#6abd45] flex items-center justify-center mb-4">
                  {iconMap[card.icon]}
                </div>
                <h3 className="text-base font-semibold text-black mb-2">{card.title}</h3>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="text-center">
            <p className="inline-block text-sm font-semibold text-black bg-[#eaffdf] border border-[#6abd45] rounded-full px-5 py-2">
              Websites are not digital brochures. They are revenue assets.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
