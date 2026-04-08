'use client';
import React from 'react';
import Slider from 'react-slick';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import Button from '../../common/Button';

export default function OurPortfolioSection() {
  const [slidesToShow, setSlidesToShow] = React.useState(5);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        setSlidesToShow(1);
      } else if (width < 768) {
        setSlidesToShow(2);
      } else if (width < 1024) {
        setSlidesToShow(3);
      } else if (width < 1400) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <section className="py-12 relative">
      <div className="max-w-[1320px] mx-auto mb-8 px-4">
        <div className="w-full text-center">
          <h2 className="text-[3.375rem] font-display leading-[4rem] text-black mb-4">Our Portfolio</h2>
          <p className="text-base mb-4">A glimpse into some of the websites we&apos;ve designed for brands across industries.</p>
        </div>
      </div>

      {isMounted && (
        <Slider
          dots={false}
          infinite={true}
          speed={400}
          slidesToShow={slidesToShow}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000}
          arrows={false}
          className="portfolio-slider"
          key={`portfolio-slider-${slidesToShow}`}
        >
          {portfolioItems.map((work, i) => (
            <div key={i} className="outline-none">
              <div className="relative group overflow-hidden">
                <img src={`/images/fo-work/${work.img}`} className="w-full h-auto block" alt={work.category} />

                {/* Category badge top-left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#00000059] text-white text-xs px-4 py-1.5 rounded-[8px] border border-[#fff9]">{work.category}</span>
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
      )}

      <div className="w-full text-center mt-8">
        <Button href="/portfolio" variant="primary" size="md">
          View Portfolio
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}
