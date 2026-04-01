'use client';
import React from 'react';
import Slider from 'react-slick';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import Button from '../../common/Button';

export default function OurPortfolioSection() {
  const portfolioItems = [
    { img: "aditya-birla.png", logo: "aditya-birla-logo.png", category: "Corporate" },
    { img: "garware.png", logo: "garware-logo.png", category: "Corporate" },
    { img: "neeta-lulla.png", logo: "neeta-lulla-logo.png", category: "Fashion" },
    { img: "hdfc.png", logo: "hdfc-bank-logo.png", category: "Banking" },
    { img: "lnt.png", logo: "lnt-logo.png", category: "Real Estate" },
    { img: "raymond.png", logo: "raymond-logo.png", category: "Real Estate" },
    { img: "sanjeev.png", logo: "sanjeev-kapoor-logo.png", category: "eCommerce" },
    { img: "redchillies.png", logo: "red-chillies-logo.png", category: "Entertainment" },
    { img: "shapoorji.png", logo: "shapoorji-paloonji-logo.png", category: "Corporate" }
  ];

  return (
    <section className="py-16 lg:py-24 relative">
      <div className="max-w-[1320px] mx-auto mb-8 px-4">
        <div className="w-full text-center">
          <h2 className="text-[3.375rem] font-display leading-[4rem] text-black mb-4">Our Portfolio</h2>
          <p className="font-sans text-base mb-4">A glimpse into some of the websites we&apos;ve designed for brands across industries.</p>
        </div>
      </div>

      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        arrows={false}
        className="portfolio-slider"
        responsive={[
          { breakpoint: 1400, settings: { slidesToShow: 4 } },
          { breakpoint: 1024, settings: { slidesToShow: 3 } },
          { breakpoint: 768, settings: { slidesToShow: 2 } },
          { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]}
      >
        {portfolioItems.map((work, i) => (
          <div key={i} className="outline-none">
            <div className="relative group overflow-hidden">
              <img src={`/images/fo-work/${work.img}`} className="w-full h-auto block" alt={work.category} />

              {/* Category badge top-left */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-[#00000059] text-white text-xs font-sans px-4 py-1.5 rounded-[8px] border border-[#fff9]">{work.category}</span>
              </div>

              {/* Bottom gradient overlay for logo visibility */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none"></div>

              {/* Brand white logo centered at bottom */}
              <div className="absolute bottom-4 left-0 right-0 text-center z-20">
                <img src={`/images/fo-work/${work.logo}`} alt="Logo" className="max-h-[40px] mx-auto object-contain relative z-20" />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <div className="w-full text-center mt-8">
        <Button href="#" variant="primary" size="md">
          View Portfolio
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}
