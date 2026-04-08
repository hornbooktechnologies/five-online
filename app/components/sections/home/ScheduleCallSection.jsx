'use client';
import React from 'react';
import ArrowRightIcon from '../../icons/ArrowRightIcon';
import Button from '../../common/Button';

export default function ScheduleCallSection() {
  return (
    <section className="px-6 lg:px-[60px] py-12" id="book-call">
      <div className="max-w-[1140px] mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-black rounded-[15px] px-2 py-4'>
          <div className='flex flex-col gap-3'>
            <div className='text-white'>
              <h5 className='text-[13px] font-mono'>Want to build a website with us?</h5>
              <h3 className='text-[28px]'>Schedule a 30-minute call to see if we are a good match.</h3>
            </div>
            <div className='bg-white rounded-[10px] p-4 flex flex-col items-start gap-3'>
              <img src="/images/nayan-img.png" className="w-14 h-14 rounded-full object-cover" alt="Nayan" />
              <p className='border border-dashed p-2 rounded-[10px] text-[13px] font-mono'>I am Nayan Khandor - CEO of Five Online, and together with our in-house team, we will work with you from start to finish. We work with a limited number of brands where we can create measurable impact — not just build websites.</p>
            </div>
            <div className='bg-white rounded-[10px] p-4 flex flex-col gap-3'>
              <h4 className='text-[24px]'> Best fit if you are: </h4>
              <ul className='text-[13px] font-mono list-disc ml-6'>
                <li>Running or launching a serious D2C / enterprise brand</li>
                <li>Focused on growth, not just design</li>
                <li>Ready to invest in performance-driven digital infrastructure</li>
                <li>Looking for long-term partnership</li>
              </ul>
            </div>
            <div className='bg-white rounded-[10px] p-4 flex flex-col gap-3'>
              <h4 className='text-[24px]'> Not ideal if: </h4>
              <ul className='text-[13px] font-mono list-disc ml-6'>
                <li>You are exploring low-cost options</li>
                <li>You only need basic website execution</li>
                <li>You are not yet ready to invest in growth</li>
              </ul>
            </div>
            <div className='bg-white rounded-[10px] p-4 flex flex-col gap-3'>
              <h4 className='text-[24px]'> What happens in the 30-min call: </h4>
              <ul className='text-[13px] font-mono list-disc ml-6'>
                <li>Growth gap diagnosis</li>
                <li>Website conversion audit direction</li>
                <li>Revenue opportunity mapping</li>
                <li>Clear next step recommendation</li>
              </ul>
              <div>
                <Button href="/contact#contact-form-panel" variant="primary" size="md">
                  Book Strategy Call
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <img src="/images/book-apt-calender.png" className="w-full rounded-[10px]" alt="Booking Calendar" loading="lazy" />
            <div className='bg-white rounded-[10px] p-4 flex flex-col gap-3 '>
              <p className="text-[13px] font-mono bg-[#ff000010] border border-dashed p-2 rounded-[10px]"><strong>DISCLAIMER:</strong> If your budget is under Rs.1 lac , this is NOT for you. Under this revenue, do NOT book since your call will be CANCELLED automatically.</p>
              <h6 className="text-[13px] font-mono">If you have a general inquiry, you can send it to our email : <a href="mailto:contact@fiveonline.in">contact@fiveonline.in</a></h6>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
