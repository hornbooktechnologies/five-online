import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

const capabilities = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 3" />
      </svg>
    ),
    title: "New Business Website Launch",
    description: "Launch-ready websites that build trust from day one.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16v16H4V4zm4 8h8m-8 4h5" />
      </svg>
    ),
    title: "Corporate Website Revamp",
    description: "Modern, credible websites designed for corporates and growing companies.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4m1.6 8l-1.35 5.4a1 1 0 00.97 1.2h11.76a1 1 0 00.97-1.2L17 13M9 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
      </svg>
    ),
    title: "D2C Ecommerce Launch",
    description: "Conversion-focused ecommerce stores built to scale.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Conversion & CRO Audit",
    description: "Identify leaks and turn traffic into enquiries or sales.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317A8 8 0 0121 12a8 8 0 01-11.675 7.683M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Website Maintenance & Performance",
    description: "Speed, security, updates, and ongoing optimisation.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Get Found in AI Search",
    description: "Optimise your website for ChatGPT, Google AI and answer engines.",
  },
];

export default function CoreCapabilities() {
  return (
    <section id="capabilities" className="py-20 sm:py-28 bg-zinc-950">
      <Container>
        <SectionHeading
          title="Core Capabilities"

        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <Card key={cap.title} variant="dark" className="group hover:border-amber-500/40 transition-all duration-300">
              <div className="text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {cap.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cap.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
