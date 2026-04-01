'use client';
import React, { useState } from 'react';
import Button from "@/app/components/common/Button";

export default function AssistSection() {
  const [assistKey, setAssistKey] = useState("newbusiness");
  const assistData = {
    newbusiness: {
      title: "Need a fresh website for a new business",
      desc: "Starting a new venture requires a website that builds trust instantly. Your website often becomes the first place where potential clients, investors, or customers evaluate your business. A weak first impression can cost opportunities before conversations even begin. We help new businesses launch websites that establish credibility from day one.",
      img: "/images/fresh-wedesign.jpg"
    },
    websiteredesign: {
      title: "Corporate website redesign",
      desc: "As businesses grow, their website often becomes outdated. An old website can unintentionally signal that the company hasn't evolved — even when the business itself has grown significantly. We redesign corporate websites to reflect credibility, leadership, and modern digital presence, helping companies present themselves with confidence.",
      img: "/images/corporate-webdesign.jpg"
    },
    d2cbrand: {
      title: "Launching a D2C brand",
      desc: "Launching a D2C brand is exciting — but building a store is the easy part. Building a store that actually converts visitors into customers is where the real challenge begins. We help founders launch D2C websites that are designed for conversions, not just aesthetics, with the right structure, product storytelling, and growth-ready setup.",
      img: "/images/launch-d2c-brand.jpg"
    },
    roasconversions: {
      title: "Fixing low conversions / ROAS",
      desc: "If traffic is coming but sales are not, the problem is rarely the ads alone. Many websites unintentionally create friction — unclear messaging, weak product pages, confusing checkout flows, or missing trust signals. These small leaks quietly destroy conversions. We analyze the entire customer journey and redesign the experience to improve conversions and maximize the return on your marketing spend.",
      img: "/images/roas.jpg"
    },
    performanceissue: {
      title: "Website maintenance & performance issues",
      desc: "Many businesses launch a website and assume the work is done. Over time the website slowly starts breaking — plugins become outdated, pages load slower, security risks increase, and small issues quietly impact performance. Without proper maintenance, websites gradually lose reliability, speed, and search visibility. We provide ongoing website maintenance to keep your site secure, updated, optimized, and performing at its best.",
      img: "/images/website-maintenance.jpg"
    },
    aisearch: {
      title: "Improving AI visibility",
      desc: "Today people discover businesses not only through Google search but also through AI assistants, answer engines, and conversational platforms. If your website isn't structured for these systems, your brand may simply not appear in these new discovery channels. We optimize websites for AI-driven discovery, structured data, and answer engine visibility, helping your brand stay visible in the next generation of search.",
      img: "/images/ai-search.jpg"
    },
  };

  return (
    <section className="p-0 mt-20 mb-20 bg-[#f3f3f3]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-[75%] mx-auto py-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-[3rem] font-display leading-[4rem] text-black">What brings you here today?</h2>
          </div>
          <div className="relative">
            <select
              id="capabilities"
              className="w-full py-4 pl-5 pr-12 rounded-none border-0 border-b border-[#888] bg-white text-base cursor-pointer focus:outline-none font-sans appearance-none"
              value={assistKey}
              onChange={(e) => setAssistKey(e.target.value)}
            >
              <option value="newbusiness">Need a fresh website for a new business</option>
              <option value="websiteredesign">Corporate website redesign</option>
              <option value="d2cbrand">Launching a D2C brand</option>
              <option value="roasconversions">Fixing low conversions / ROAS</option>
              <option value="performanceissue">Website maintenance & performance issues</option>
              <option value="aisearch">Making our website visible in AI search</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-black">
              <svg className="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-center relative transition-all duration-500 ease-in-out p-4 md:p-12 block md:flex justify-center items-centers"
          style={{ backgroundImage: `url('${assistData[assistKey].img}')` }}
        >
          <div className="bg-white/70 backdrop-blur-[20px] p-4 md:p-[25px] md:p-10 rounded-[25px] w-full md:w-4/5">
            <h3 className="mb-4 font-display text-[28px] text-black">{assistData[assistKey].title}</h3>
            <p className="mb-5 text-sm font-sans text-black">{assistData[assistKey].desc}</p>
            <div className="flex gap-2 flex-wrap">
              <Button href="#" variant="primary" size="sm">
                Explore Capabilities
              </Button>
              <Button href="#" variant="primary" size="sm">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
