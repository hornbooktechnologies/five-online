import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Card from "../common/Card";

const caseStudies = [
  {
    brand: "Garware Hi-Tech",
    tagline: "Digital Platform Transformation for Enterprise Growth",
    stats: [
      { value: "+38%", label: "Product Page Engagement" },
      { value: "+22%", label: "Enquiry Interaction" },
    ],
  },
  {
    brand: "Budget Store",
    tagline: "Conversion-First Ecommerce Launch",
    stats: [
      { value: "+45%", label: "Product Page Engagement" },
      { value: "+30%", label: "Enquiry Interaction" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 sm:py-28 bg-zinc-950">
      <Container>
        <SectionHeading
          title="Proof. Not Promises."
          subtitle={["See how we helped brands increase revenue, leads, and growth."]}

        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <Card key={study.brand} variant="dark" className="hover:border-amber-500/30 transition-colors">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                {study.brand}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {study.tagline}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {study.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-zinc-800/50 rounded-xl p-4 text-center"
                  >
                    <p className="text-2xl sm:text-3xl font-bold text-amber-500">
                      {stat.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
