'use client';
import React from 'react';
import Slider from 'react-slick';

export default function TrustedPartnersSection() {
  const [slidesToShow, setSlidesToShow] = React.useState(6);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesToShow(2);
      } else if (width < 768) {
        setSlidesToShow(3);
      } else if (width < 1024) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const brands = [
    'tcs.png', 'yasraj-films.png', 'shapoorji-pallonji.png', 'red-chillies.png', 'raymon-realty.png', 'neeta-lulla.png', 'lnt-realty.png', 'hdfc.png', 'garware.png', 'aditya-birla.png'
  ];

  return (
    <section className="p-0 py-16 lg:py-24 ">
      <div className="w-full">
        <div className="flex flex-wrap">
          <div className="w-full text-center mb-4 px-6 lg:px-[60px]">
            <h2 className="text-[3.375rem] leading-[4rem] font-display mb-8 text-black">Trusted by Ambitious Brands</h2>
            <p className="font-sans text-base mb-4">Delivering high-performance websites since 2005.</p>
          </div>
          <div className="w-full mt-10 overflow-hidden min-h-[50px]">
            {isMounted && (
              <Slider {...settings} key={`brands-slider-${slidesToShow}`}>
                {brands.map((brand, i) => (
                  <div key={i} className="outline-none focus:outline-none">
                    <div className="mx-4 md:mx-8">
                      <img src={`/images/fo-brands/${brand}`} alt={brand.replace('.png', '')} className="w-full object-contain" />
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
