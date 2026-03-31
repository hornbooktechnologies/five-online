import Container from "@/app/components/common/Container";
import SectionHeading from "@/app/components/common/SectionHeading";
import CapabilityCard from "@/app/components/molecules/CapabilityCard";
import ScrollReveal from "@/app/components/common/ScrollReveal";

/**
 * Icons — inline SVGs for each capability (avoids extra deps).
 */
const icons = {
  strategy: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  code: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  analytics: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  ai: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

/**
 * TeamGrid — "A Structured Growth Team" 4-column capability grid.
 * Used on the About Us page.
 */
export default function TeamGrid({ capabilities = [] }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="A Structured Growth Team"
            subtitle={["We operate through focused capability pods."]}
            mode="light"
          />
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map((cap) => (
              <CapabilityCard
                key={cap.title}
                icon={icons[cap.icon]}
                title={cap.title}
                description={cap.description}
                color={cap.color}
              />
            ))}
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
