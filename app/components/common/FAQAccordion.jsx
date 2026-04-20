"use client";

import React, { useState } from "react";

export default function FAQAccordion({
  title = "",
  description = "",
  faqs = [],
  initialOpen = 1,
  className = "",
}) {
  const [openFaq, setOpenFaq] = useState(initialOpen);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`px-6 py-12 lg:px-[60px] ${className}`}>
      <div className="mx-auto max-w-[1140px]">
        <div className="flex flex-wrap">
          <div className="mb-8 w-full pr-0 text-left lg:mb-0 lg:w-5/12 lg:pr-12">
            <div className="section-title">
              <h2 className="mb-3 text-[3rem] leading-tight text-black">{title}</h2>
              {description ? (
                <p className="text-base text-[#212529]">{description}</p>
              ) : null}
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <div className="faq-accordion">
              {faqs.map((faq, i) => {
                const index = i + 1;
                const question = faq.q || faq.question;
                const answer = faq.a || faq.answer;
                const isOpen = openFaq === index;

                return (
                  <div key={question || index} className="border-b border-gray-200">
                    <button
                      className="flex w-full cursor-pointer items-center justify-between px-0 py-5 text-left text-[18px] text-black"
                      onClick={() => toggleFaq(index)}
                      type="button"
                      aria-expanded={isOpen}
                    >
                      <span className="flex-1 pr-4">{question}</span>
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-black">
                        <span className="text-lg font-bold leading-none text-white">{isOpen ? "-" : "+"}</span>
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden text-sm text-[#212529] transition-all duration-300 ${isOpen ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      {answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
