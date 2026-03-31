"use client";

import { useState } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const faqs = [
  {
    question: "Can a website directly improve business revenue?",
    answer:
      "Yes. A strategically structured website improves lead quality, conversion rates, and customer trust. When aligned with marketing efforts, website optimisation directly impacts revenue growth and marketing efficiency.",
  },
  {
    question: "How much does a professional website cost in India?",
    answer:
      "Professional website costs in India vary based on complexity, features, and the agency you work with. A high-performance, conversion-focused website from Five Online starts at ₹1 lakh and can go higher depending on the scope, integrations, and scale of the project.",
  },
  {
    question:
      "I'm starting a new business. How can I generate more leads and sales online?",
    answer:
      "Start with a conversion-focused website that establishes credibility and guides visitors towards action. Combine it with SEO, content marketing, and targeted advertising. We help new businesses build digital foundations that generate leads from day one.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-black">
      <Container>
        <SectionHeading
          title="The Answer Stack"
          subtitle={["Straight answers to common business questions about websites, growth, and digital presence."]}

        />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-zinc-800 rounded-xl overflow-hidden"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? -1 : index)
                }
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-zinc-900 hover:bg-zinc-800/80 transition-colors"
              >
                <span className="text-base sm:text-lg font-medium text-white">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-amber-500 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 bg-zinc-900">
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
