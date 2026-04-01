'use client';
import React, { useState } from 'react';

export default function AwardsSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const awardVideoUrl = "https://fiveonline-bucket.s3.ap-south-1.amazonaws.com/Five+Online+-+Best+Web+Design+Agency+Mumbai+Award.mp4";

  return (
    <>
      <div className="mb-20 relative" id="section08">
        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="w-full lg:w-5/12 relative">
            <div className="w-full h-full">
              <img src="/images/awards-pic.jpg" className="w-full h-full object-cover block" loading="lazy" alt="Awards" />
            </div>
            <div className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="inline-block relative cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                <div className="bg-black rounded-full w-[84px] h-[84px] flex items-center justify-center relative">
                  <div className="bg-black rounded-full absolute inset-0 animate-ping opacity-30"></div>
                  <svg height="30" width="30" fill="#fff" className="ml-1 relative z-10">
                    <polygon points="5,0 30,15 5,30" className="fill-white"></polygon>
                  </svg>
                </div>
              </span>
            </div>
          </div>
          <div className="w-full lg:w-7/12 bg-[var(--color-surface)] relative overflow-hidden flex items-center">
            {/* Vertical AWARDS watermark */}
            <div className="absolute left-0 top-0 h-full hidden lg:flex items-center pointer-events-none">
              <span className="text-[115px] tracking-[10px] text-[#d8d8d899] font-display uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>AWARDS</span>
            </div>
            <div className="p-12 lg:p-20 relative z-10 w-full md:!pl-[150px]">
              <div className="space-y-0">
                <div className="py-6">
                  <p className="text-black font-sans font-bold text-lg uppercase tracking-wide">AWARDED AS BEST WEB DESIGN AGENCY IN MUMBAI 2022 BY LEA</p>
                  <div className="w-[100px] h-[3px] bg-green-500 mt-6"></div>
                </div>
                <div className="py-6">
                  <p className="text-black font-sans font-bold text-lg uppercase tracking-wide">RANKED AS BEST WEB DESIGN COMPANY IN MUMBAI BY HINDUSTAN TIMES</p>
                  <div className="w-[100px] h-[3px] bg-green-500 mt-6"></div>
                </div>
                <div className="py-6">
                  <p className="text-black font-sans font-bold text-lg uppercase tracking-wide">RANKED IN TOP 5 WEB DESIGN COMPANY IN MUMBAI BY YOUR STORY</p>
                  <div className="w-[100px] h-[3px] bg-green-500 mt-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg shadow-2xl overflow-hidden aspect-video">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 w-10 h-10 flex items-center justify-center rounded-full"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
            <video
              width="100%"
              height="100%"
              controls
              autoPlay
              className="w-full h-full object-contain"
            >
              <source src={awardVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
