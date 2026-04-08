'use client';
import React from 'react';

export default function CaseStudiesSection() {
  return (
    <section className="px-6 lg:px-[60px] py-12">
      <div className="max-w-[1140px] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full text-center">
            <h2 className="text-[3.375rem] font-display leading-[4rem] text-black mb-3">Proof. Not Promises.</h2>
            <p className="text-base text-[#212529]">See how we helped brands increase revenue, leads, and growth.</p>
          </div>

          <div className="w-full mt-4 border py-6">
            <div className="flex flex-wrap items-center px-2">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h3 className="text-2xl font-display text-black mb-3">Garware Hi-Tech</h3>
                <p className="text-[#212529]">Digital Platform Transformation for Enterprise Growth</p>
              </div>
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <div className="flex flex-wrap">
                  <div className="w-1/2">
                    <div className="growth-pointers">
                      <h4 className="text-3xl font-display font-bold text-black mb-2 flex items-center">+38%
                        <span className="ml-2 text-theme-blue">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </span>
                      </h4>
                      <p className="text-[#212529] text-sm">Product Page Engagement</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="growth-pointers">
                      <h4 className="text-3xl font-display font-bold text-black mb-2 flex items-center">+22%
                        <span className="ml-2 text-theme-blue">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </span>
                      </h4>
                      <p className="text-[#212529] text-sm">Enquiry Interaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap py-3 mt-4">
                <div className="w-full lg:w-9/12 hidden md:block pr-2">
                  <img src="/images/case-study-desk.png" className="w-full object-contain" alt="Case Study Desk" />
                </div>
                <div className="w-full lg:w-3/12 pl-2">
                  <img src="/images/case-study-mob.png" className="w-full object-contain mx-auto" alt="Case Study Mobile" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full border py-6 mt-4">
            <div className="flex flex-wrap items-center px-2">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h3 className="text-2xl font-display text-black mb-3">Buget Store</h3>
                <p className="text-[#212529]">Conversion-First Ecommerce Launch</p>
              </div>
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <div className="flex flex-wrap">
                  <div className="w-1/2">
                    <div className="growth-pointers">
                      <h4 className="mb-2"><img src="/images/24hour-icon.png" alt="24hr" className="h-10" /></h4>
                      <p className="text-[#212529] text-sm">Product Page Engagement</p>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="growth-pointers">
                      <h4 className="mb-2"><img src="/images/checkout-completion-icon.png" alt="Checkout completion" className="h-10" /></h4>
                      <p className="text-[#212529] text-sm">Enquiry Interaction</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-wrap py-3 mt-4">
                <div className="w-full lg:w-9/12 hidden md:block pr-2">
                  <img src="/images/case-study1-desk.png" className="w-full object-contain" alt="Case Study 1 Desk" />
                </div>
                <div className="w-full lg:w-3/12 pl-2">
                  <img src="/images/case-study1-mob.png" className="w-full object-contain mx-auto" alt="Case Study 1 Mobile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
