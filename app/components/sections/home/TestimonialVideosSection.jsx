'use client';
import React from 'react';
import Slider from 'react-slick';

export default function TestimonialVideosSection() {
  const [slidesToShow, setSlidesToShow] = React.useState(3);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(1);
      } else if (width < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="px-6 lg:px-[60px] py-16 lg:py-24">
      <div className="w-full">
        <div className="flex flex-wrap text-center mb-10">
          <div className="w-full">
            <h2 className="text-[3.375rem] font-display leading-[4rem] text-black mb-3">Real Words. Real Wins.</h2>
            <p className="font-sans text-base text-[#212529]">These stories reveal why brands choose Five Online</p>
          </div>
          <div className="w-full mt-10">
            {isMounted && (
              <Slider {...settings} key={`testimonial-slider-${slidesToShow}`}>
                <div className="px-3 outline-none">
                  <a className="block overflow-hidden rounded-xl" href="https://www.youtube.com/embed/LOZ_JA8RPyY?rel=0" target="_blank" rel="noopener noreferrer">
                    <img src="/images/youtube1.webp" className="w-full h-auto mb-3 hover:scale-105 transition-transform duration-300" alt="Testimonial 1" />
                  </a>
                </div>
                <div className="px-3 outline-none">
                  <a className="block overflow-hidden rounded-xl" href="https://www.youtube.com/embed/4npzSxlU6nI?rel=0" target="_blank" rel="noopener noreferrer">
                    <img src="/images/youtube2.webp" className="w-full h-auto mb-3 hover:scale-105 transition-transform duration-300" alt="Testimonial 2" />
                  </a>
                </div>
                <div className="px-3 outline-none">
                  <a className="block overflow-hidden rounded-xl" href="https://www.youtube.com/embed/aipV7u2Da3s?si=YRasukfYzTvlmjVn?rel=0" target="_blank" rel="noopener noreferrer">
                    <img src="/images/youtube3.webp" className="w-full h-auto mb-3 hover:scale-105 transition-transform duration-300" alt="Testimonial 3" />
                  </a>
                </div>
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
