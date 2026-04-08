'use client';
import React from 'react';

export default function CoreCapabilitiesSection() {
  const capabilities = [
    { title: "New Business Website Launch", desc: "Launch-ready websites that build trust from day one.", img: "1.png" },
    { title: "Corporate Website Revamp", desc: "Modern, credible websites designed for corporates and growing companies.", img: "2.png" },
    { title: "D2C Ecommerce Launch", desc: "Conversion-focused ecommerce stores built to scale.", img: "3.png" },
    { title: "Conversion & CRO Audit", desc: "Identify leaks and turn traffic into enquiries or sales.", img: "4.png" },
    { title: "Website Maintenance & Performance", desc: "Speed, security, updates, and ongoing optimisation.", img: "5.png" },
    { title: "Get Found in AI Search", desc: "Optimise your website for ChatGPT, Google AI and answer engines.", img: "6.png" }
  ];

  return (
    <section className="px-6 lg:px-[60px] py-12">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 text-center mb-4">
            <h2 className="text-[3.375rem] leading-[4rem] text-black mb-8">Core Capabilities</h2>
          </div>

          {capabilities.map((cap, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 text-center shrink">
              <div className="relative rounded-[1.5rem] overflow-hidden group inline-block w-full">
                <div className="relative w-full overflow-hidden rounded-[1.5rem]">
                  <img src={`/images/core-capabilities/${cap.img}`} className="w-full aspect-[4/5] object-cover rounded-[1.5rem]" alt={cap.title} />
                  <div className="absolute inset-0 rounded-[1.5rem]" style={{ background: 'linear-gradient(to bottom, #00000000 20.77%, #000000)' }}></div>
                </div>
                <div className="absolute bottom-5 left-5 w-[90%] text-left z-10">
                  <h4 className="text-2xl text-white mb-4">{cap.title}</h4>
                  <p className="text-base text-white leading-6">{cap.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
