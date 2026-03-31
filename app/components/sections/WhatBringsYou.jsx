"use client";

import { useState } from "react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const tabs = [
  {
    id: "new-business",
    title: "Need a fresh website for a new business",
    content:
      "Starting a new venture requires a website that builds trust instantly. Your website often becomes the first place where potential clients, investors, or customers evaluate your business. A weak first impression can cost opportunities before conversations even begin. We help new businesses launch websites that establish credibility from day one.",
  },
  {
    id: "revamp",
    title: "Want to revamp your existing website",
    content:
      "Your current website may be outdated, slow, or simply not converting visitors into customers. A strategic website revamp can transform your digital presence, improve user experience, and drive more conversions — all while maintaining your brand identity.",
  },
  {
    id: "ecommerce",
    title: "Looking to grow your D2C ecommerce brand",
    content:
      "Scaling a D2C brand requires more than just listing products online. We build conversion-focused ecommerce experiences that drive sales, improve average order value, and create loyal customers through strategic design and UX optimisation.",
  },
];

export default function WhatBringsYou() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <section className="py-20 sm:py-28 bg-zinc-950">
      <Container>
        <SectionHeading
          title="What brings you here today?"

        />
        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-5 py-4 rounded-xl text-sm sm:text-base font-medium text-left transition-all ${
                  activeTab === tab.id
                    ? "bg-amber-500 text-black"
                    : "bg-zinc-900 text-gray-300 hover:bg-zinc-800 border border-zinc-800"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-10">
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
              {activeTabData.content}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#capabilities" variant="primary">
                Explore Capabilities
              </Button>
              <Button href="#book-call" variant="secondary">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
