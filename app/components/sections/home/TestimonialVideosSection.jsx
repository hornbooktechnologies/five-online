'use client';
import React from 'react';
import Slider from 'react-slick';

export default function TestimonialVideosSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <section className="px-6 lg:px-[60px] py-16 lg:py-24">
      <div className="w-full">
        <div className="flex flex-wrap text-center mb-10">
          <div className="w-full">
            <h2 className="text-[3.375rem] font-display leading-[4rem] text-black mb-3">Real Words. Real Wins.</h2>
            <p className="font-sans text-base text-gray-600">These stories reveal why brands choose Five Online</p>
          </div>
          <div className="w-full mt-10">
            <Slider {...settings}>
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
          </div>
        </div>
      </div>
    </section>
  );
}
