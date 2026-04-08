'use client';
import React from 'react';

export default function HomeBannerSection() {
  return (
    <section
      className="h-auto md:h-screen bg-cover bg-center flex items-center mb-12 pb-12 px-[24px] md:px-[50px]"
      style={{ backgroundImage: "url('/images/bg-banner.png')" }}
    >
      <div className="w-full">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-3/4">
            <div className="text-left">
              <h2 className="text-[4rem] md:text-[10rem] lg:text-[12rem] font-display leading-none mb-8 text-black">Namaste.</h2>
              <h3 className="mb-4 text-2xl md:text-4xl lg:text-[40px] font-display font-normal leading-[1.35] text-black">We Are India&apos;s Revenue-First <br />Web Design Company.</h3>
              <p className="text-[17px] font-normal text-black mb-0">Five Online is a premium web design company helping enterprises and D2C brands <br className="hidden lg:block" />increase leads, sales, and ROAS through conversion-driven websites.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
