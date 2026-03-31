import Container from "../common/Container";

const awards = [
  "Awarded as Best Web Design Agency in Mumbai 2022 by LEA",
  "Ranked as Best Web Design Company in Mumbai by Hindustan Times",
  "Ranked in Top 5 Web Design Company in Mumbai by Your Story",
];

export default function Awards() {
  return (
    <section className="py-12 sm:py-16 bg-amber-500">
      <Container>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/60 text-center mb-6">
          Awards
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {awards.map((award) => (
            <div
              key={award}
              className="flex items-center gap-3 text-center sm:text-left"
            >
              <svg className="w-6 h-6 flex-shrink-0 text-black/70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-sm font-semibold text-black">
                {award}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
