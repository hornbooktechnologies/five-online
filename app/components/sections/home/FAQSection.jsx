'use client';
import React, { useState } from 'react';

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(1);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: "Can a website directly improve business revenue?", a: "Yes. A strategically structured website improves lead quality, conversion rates, and customer trust. When aligned with marketing efforts, website optimisation directly impacts revenue growth and marketing efficiency." },
    { q: "How much does a professional website cost in India?", a: "The cost of a professional website in India varies based on scope, complexity, and business goals. A basic website may cost less, but a revenue-focused website built for lead generation or ecommerce performance requires strategic planning, UX design, technical optimisation, and ongoing performance thinking. The investment should be evaluated based on business impact, not just initial price." },
    { q: "I'm starting a new business. How can I generate more leads and sales online?", a: "For a new business, your website is the foundation of digital growth. It shapes first impressions, builds credibility, and converts visitors into enquiries or customers. While marketing channels drive traffic, a strategically structured website ensures that traffic turns into measurable leads and revenue." }
  ];

  return (
    <section className="px-6 lg:px-[60px] py-16 lg:py-24">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 mb-8 lg:mb-0 pr-0 lg:pr-12 text-left">
            <div className="section-title">
              <h2 className="text-[3rem] font-display leading-tight text-black mb-3">The Answer Stack</h2>
              <p className="font-sans text-base text-[#212529]">Straight answers to common business questions about websites, growth, and digital presence.</p>
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <div className="faq-accordion">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200">
                  <button
                    className="w-full text-left px-0 py-5 font-sans text-[18px] flex justify-between items-center text-black cursor-pointer"
                    onClick={() => toggleFaq(i + 1)}
                  >
                    <span className="flex-1 pr-4">{faq.q}</span>
                    <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold leading-none">{openFaq === i + 1 ? '−' : '+'}</span>
                    </span>
                  </button>
                  <div className={`font-sans text-[#212529] text-sm overflow-hidden transition-all duration-300 ${openFaq === i + 1 ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'}`}>
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
