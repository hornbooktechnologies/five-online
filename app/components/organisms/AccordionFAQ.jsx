import Container from "@/app/components/common/Container";
import SectionHeading from "@/app/components/common/SectionHeading";
import AccordionItem from "@/app/components/molecules/AccordionItem";
import ScrollReveal from "@/app/components/common/ScrollReveal";

/**
 * AccordionFAQ — full FAQ section with heading + accordion list.
 * Accepts faqs array: [{question, answer}]
 *
 * @param {"light"|"dark"} mode
 */
export default function AccordionFAQ({
  title = "The Answer Stack™",
  subtitle = ["Straight answers to common business questions."],
  label,
  faqs = [],
  mode = "light",
  firstOpen = true,
}) {
  return (
    <section className={mode === "dark" ? "bg-zinc-950 py-20 sm:py-28" : "bg-[#f8f8f8] py-20 sm:py-28"}>
      <Container>
        <ScrollReveal>
          <SectionHeading
            title={title}
            subtitle={subtitle}
            label={label}
            mode={mode}
          />
        </ScrollReveal>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <AccordionItem
                question={faq.question}
                answer={faq.answer}
                defaultOpen={firstOpen && i === 0}
                mode={mode}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
