'use client';
import React from 'react';
import Slider from 'react-slick';

export default function TrustedPartnersSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } }
    ]
  };

  const brands = [
    'tcs.png', 'yasraj-films.png', 'shapoorji-pallonji.png', 'red-chillies.png', 'raymon-realty.png', 'neeta-lulla.png', 'lnt-realty.png', 'hdfc.png', 'garware.png', 'aditya-birla.png', 'yasraj-films.png'
  ];

  return (
    <section className="p-0 pt-20 pb-20 ">
      <div className="w-full">
        <div className="flex flex-wrap">
          <div className="w-full text-center mb-4 px-8 md:px-20 lg:px-[90px]">
            <h2 className="text-[3.375rem] leading-[4rem] font-display mb-8 text-black">Trusted by Ambitious Brands</h2>
            <p className="font-sans text-base mb-4">Delivering high-performance websites since 2005.</p>
          </div>
          <div className="w-full mt-10 overflow-hidden">
            <Slider {...settings}>
              {brands.map((brand, i) => (
                <div key={i} className="outline-none focus:outline-none">
                  <div className="mx-4 md:mx-8">
                    <img src={`/images/fo-brands/${brand}`} alt={brand.replace('.png', '')} className="w-full object-contain" />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
