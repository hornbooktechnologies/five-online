import Container from "@/app/components/common/Container";

const cards = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect width="48" height="48" rx="24" fill="#18181b"/>
        <rect x="10" y="18" width="28" height="20" rx="2" stroke="white" strokeWidth="1.8"/>
        <path d="M16 18V14a8 8 0 0116 0v4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="24" cy="28" r="3" stroke="white" strokeWidth="1.8"/>
      </svg>
    ),
    title: "CORPORATES",
    body: "Complex websites. Multiple stakeholders. Long-term scalability. We operate as digital consultants — not execution vendors.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect width="48" height="48" rx="24" fill="#18181b"/>
        <path d="M12 20h24M12 28h24M20 12v24M28 12v24" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="12" y="12" width="24" height="24" rx="2" stroke="white" strokeWidth="1.8"/>
      </svg>
    ),
    title: "D2C BRANDS (SHOPIFY-FIRST)",
    body: "Scaling brands spending on performance marketing. If ROAS matters to you, we're aligned.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect width="48" height="48" rx="24" fill="#18181b"/>
        <path d="M16 28s1-4 8-4 8 4 8 4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="20" r="4" stroke="white" strokeWidth="1.8"/>
        <circle cx="28" cy="20" r="4" stroke="white" strokeWidth="1.8"/>
      </svg>
    ),
    title: "AGENCY PARTNERS",
    body: "Speed, security, and structured ongoing improvements.",
  },
];

/**
 * WhoForSection — "Who We're Best Suited For" section from Contact page Figma.
 * 3 green-tinted cards with dark icon circles.
 */
export default function WhoForSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <h2
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-14"
        >
          Who We&apos;re Best Suited For
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#f0fdf4] rounded-2xl p-8 flex flex-col gap-5"
            >
              {card.icon}
              <div>
                <h3 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
