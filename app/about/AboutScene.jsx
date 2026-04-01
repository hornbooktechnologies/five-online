"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { faqsByPage } from "@/lib/data/faqs";
import Button from '@/app/components/common/Button';
import { ArrowRightIcon } from "../components/icons";

const philosophyCards = [
  {
    icon: "/figma/about/philosophy-icon-1.png",
    title: "UX is mapped to buyer psychology",
  },
  {
    icon: "/figma/about/philosophy-icons-2.png",
    title: "Design reinforces brand positioning",
  },
  {
    icon: "/figma/about/philosophy-icon-3.png",
    title: "Engineering supports scalability",
  },
  {
    icon: "/figma/about/philosophy-icon-4.png",
    title: "Analytics validates every decision",
  },
];

const marketTiles = [
  { image: "/figma/about/industry-1.png", label: "eCommerce & D2C" },
  { image: "/figma/about/industry-2.png", label: "Enterprise & B2B" },
  { image: "/figma/about/industry-3.png", label: "Real Estate" },
  { image: "/figma/about/industry-4.png", label: "Retail" },
  { image: "/figma/about/industry-5.png", label: "Lifestyle" },
];

const capabilityPills = [
  {
    background: "#f4ffef",
    title: "Strategy & CRO",
    icon: "/figma/about/team-pill-1.png",
  },
  {
    background: "#e7ffdd",
    title: "MERN & Shopify Engineering",
    icon: "/figma/about/team-pill-2.png",
  },
  {
    background: "#d6ffc5",
    title: "Performance & Analytics",
    icon: "/figma/about/team-pill-3.png",
  },
  {
    background: "#beffa3",
    title: "Automation & AI Systems",
    icon: "/figma/about/team-pill-4.png",
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/fiveonline.in/",
    icon: "/figma/about/social-1.svg",
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/company/71971288/",
    icon: "/figma/about/social-2.png",
    label: "LinkedIn",
  },
  {
    href: "https://wa.me/919930265505",
    icon: "/figma/about/social-3.png",
    label: "WhatsApp",
  },
];


function HighlightChip({ children }) {
  return (
    <div className='inline-flex max-w-full items-center justify-center border border-[#6abd45] bg-[#eaffdf] px-5 py-2 text-center font-sans text-[15px] font-medium leading-6 text-black sm:text-[16px]'>
      {children}
    </div>
  );
}

function FaqItem({ faq, open, onToggle }) {
  return (
    <article className='border-b border-black'>
      <button
        type='button'
        onClick={onToggle}
        className='flex w-full items-start gap-6 py-6 text-left cursor-pointer'
      >
        <span className='flex-1 font-body text-[18px] font-medium leading-[30px] text-black sm:text-[20px]'>
          {faq.question}
        </span>
        <span className='flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full border border-black text-[20px] leading-none bg-black text-white'>
          {open ? "-" : "+"}
        </span>
      </button>

      {open ? (
        <p className='pb-6 pr-12 font-body text-[16px] leading-[28px] text-black'>
          {faq.answer}
        </p>
      ) : null}
    </article>
  );
}

export default function AboutScene() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className='bg-white text-black'>
      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-6 lg:py-20'>
        <div className='mx-auto max-w-[1120px] text-center'>
          <h1 className='font-display text-[48px] leading-[0.96] text-black sm:text-[68px] lg:text-[96px] lg:leading-[100px]'>
            India&apos;s Revenue-First Web Design Company
          </h1>

          <p className='mx-auto mt-8 max-w-[760px] font-sans text-[18px] leading-[28px] text-black'>
            We design and build high-performance websites that directly
            contribute to business growth.
          </p>

          <div className='mx-auto mt-6 max-w-[820px] space-y-1 font-sans text-[20px] leading-[32px] text-black sm:text-[22px] sm:leading-[34px] lg:text-[24px] lg:leading-[36px]'>
            <p>Built in India. Trusted globally.</p>
            <p>
              20+ years of experience across enterprises, D2C brands and agency
              partners.
            </p>
          </div>

          <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
            <Button href="/case-studies" variant="primary" size="md">
              Explore Case Studies
              <ArrowRightIcon />
            </Button>
            <Button href="/contact" variant="secondary" size="md">
              Book a Strategy Call
              <ArrowRightIcon color="black" />
            </Button>
          </div>
        </div>
      </section>

      <section className='bg-[#f8f8f8]'>
        <div className='mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center px-6 lg:px-[60px] py-16 lg:py-24'>
          <div>
            <h2 className='max-w-[660px] whitespace-pre-line font-display text-[42px] leading-[1.08] text-black sm:text-[48px] lg:text-[54px] lg:leading-[64px]'>
              {"We Don't Build Websites.\nWe Engineer Growth Systems."}
            </h2>

            <div className='mt-10 space-y-4 font-sans text-[18px] leading-[30px] text-black'>
              <div className='flex items-start gap-3'>
                <Image
                  src='/figma/about/icon-x-circle.svg'
                  alt=''
                  width={24}
                  height={24}
                  className='mt-[3px] shrink-0'
                />
                <p>Most agencies focus on aesthetics.</p>
              </div>
              <div className='flex items-start gap-3'>
                <Image
                  src='/figma/about/icon-check.svg'
                  alt=''
                  width={24}
                  height={24}
                  className='mt-[3px] shrink-0'
                />
                <p>We focus on outcomes.</p>
              </div>
            </div>

            <p className='mt-8 font-body text-[16px] leading-[32px] text-black'>
              Every engagement begins with one question:
            </p>

            <div className='mt-4 bg-[#e6ffd9] px-6 py-7'>
              <h3 className='font-sans text-[20px] font-semibold leading-[32px] text-black'>
                How will this website contribute to measurable revenue growth?
              </h3>
              <p className='mt-2 font-sans text-[16px] leading-[30px] text-black'>
                Our model is consultant-led, structured and
                performance-oriented. We don&apos;t execute briefs. We challenge
                assumptions.
              </p>
            </div>
          </div>

          <div className='relative aspect-[526/582] overflow-hidden bg-white'>
            <Image
              src='/figma/about/hero-team.jpg'
              alt='Five Online team'
              fill
              className='object-cover'
              sizes='(min-width: 1024px) 42vw, 100vw'
              priority
            />
          </div>
        </div>
      </section>

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-16 lg:py-24'>
        <div className='mx-auto max-w-[1120px] text-center'>
          <h2 className='font-display text-[42px] leading-[1.08] text-black sm:text-[48px] lg:text-[54px] lg:leading-[64px]'>
            Our Revenue Philosophy
          </h2>
          <div className='mt-8 space-y-1 font-sans text-[18px] leading-[28px] text-black'>
            <p>Design without strategy is decoration.</p>
            <p>Technology without performance tracking is risk.</p>
          </div>
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4'>
          {philosophyCards.map((card) => (
            <article
              key={card.title}
              className='flex min-h-[284px] flex-col border border-black bg-white px-6 py-8'
            >
              <Image
                src={card.icon}
                alt=''
                width={60}
                height={60}
                className='h-[60px] w-[60px]'
              />
              <h3 className='mt-auto pt-14 font-body text-[20px] font-semibold leading-[30px] text-black'>
                {card.title}
              </h3>
            </article>
          ))}
        </div>

        <div className='mt-10 text-center'>
          <HighlightChip>
            Websites are not digital brochures. They are revenue assets.
          </HighlightChip>
        </div>
      </section>

      <section className='mx-auto w-full py-16 lg:py-24'>
        <div className='w-full max-w-[1440px] grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start px-6 lg:px-[60px]'>
          <div>
            <h2 className='max-w-[620px] whitespace-pre-line font-display text-[42px] leading-[1.08] text-black sm:text-[48px] lg:text-[54px] lg:leading-[64px]'>
              {"Two Decades.\nMultiple Market Cycles."}
            </h2>
          </div>

          <div>
            <p className='max-w-[620px] font-sans text-[16px] leading-[30px] text-black'>
              Over 20+ years, we have delivered 500+ projects across 25+
              industries, continuously adapting to algorithm shifts, platform
              changes and evolving buyer behavior.
            </p>
            <div className='mt-8'>
              <HighlightChip>
                Longevity is not about survival. It&apos;s about relevance.
              </HighlightChip>
            </div>
          </div>
        </div>

        <div className='mt-12 overflow-hidden mx-[-12px] px-2'>
          <Slider
            dots={false}
            infinite={true}
            speed={500}
            slidesToShow={4}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            arrows={false}
            responsive={[
              { breakpoint: 1280, settings: { slidesToShow: 3 } },
              { breakpoint: 1024, settings: { slidesToShow: 2 } },
              { breakpoint: 640, settings: { slidesToShow: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1 } }
            ]}
          >
            {marketTiles.map((tile, index) => (
              <div key={`${tile.label}-${index}`} className="outline-none px-3">
                <article>
                  <div className='relative aspect-[295/375] overflow-hidden bg-[#f4f4f4]'>
                    <Image
                      src={tile.image}
                      alt={tile.label}
                      fill
                      className='object-cover'
                      sizes='(min-width: 1280px) 19vw, (min-width: 640px) 50vw, 100vw'
                    />
                  </div>
                  <h3 className='mt-4 font-sans text-[18px] font-semibold leading-[30px] text-black'>
                    {tile.label}
                  </h3>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className='relative isolate overflow-hidden bg-black text-white'>
        <Image
          src='/figma/about/founder-background.jpg'
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-black/45' />

        <div className='relative mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-8 lg:px-[60px] lg:py-28'>
          <div className='grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,632px)] lg:items-end'>
            <div></div>

            <div className='bg-black/90 px-8 py-10'>
              <h3 className='font-display text-[40px] leading-[44px] text-white sm:text-[48px]'>
                Nayan Khandor
              </h3>
              <div className='mt-6 border-l border-[#6ABD45] pl-6'>
                <p className='font-sans text-[18px] leading-[28px] text-white'>
                  Five Online is led by Nayan Khandor, CEO and Growth
                  Strategist. He believes Web design should sit inside the
                  revenue conversation — not outside it.
                </p>

                <div className='mt-8 flex items-center gap-5'>
                  {socialLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={link.label}
                    >
                      <Image
                        src={link.icon}
                        alt=''
                        width={38}
                        height={38}
                        className='h-[34px] w-[34px] object-contain'
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-16 lg:py-24'>
        <div className='mx-auto max-w-[1120px] text-center'>
          <h2 className='font-display text-[42px] leading-[1.08] text-black sm:text-[48px] lg:text-[54px] lg:leading-[64px]'>
            A Structured Growth Team
          </h2>
          <div className='mt-8 space-y-1 font-sans text-[18px] leading-[28px] text-black'>
            <p>We are not a design studio.</p>
            <p>We operate through focused capability pods:</p>
          </div>
        </div>

        <div className='mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {capabilityPills.map((pill) => (
            <article
              key={pill.title}
              className='flex min-h-[100px] items-center gap-5 rounded-full border border-[#ebebeb] px-6 py-5'
              style={{ backgroundColor: pill.background }}
            >
              <Image
                src={pill.icon}
                alt=''
                width={60}
                height={60}
                className='h-[56px] w-auto shrink-0 object-contain'
              />
              <h3 className='font-body text-[20px] font-medium leading-[28px] text-black'>
                {pill.title}
              </h3>
            </article>
          ))}
        </div>
      </section>


      <section className='relative overflow-hidden bg-[#f8f8f8]'>
        <img
          src='/figma/about/trust-decoration.png'
          className="absolute right-[-160px] top-0 object-cover object-left h-full"
        />

        <div className='relative mx-auto w-full max-w-[1440px] text-center px-6 lg:px-[60px] py-16 lg:py-24'>
          <h2 className='font-display text-[52px] leading-[0.98] text-black sm:text-[72px] lg:text-[96px] lg:leading-[100px]'>
            <span className='block'>Built in India.</span>
            <span className='block'>Trusted Globally.</span>
          </h2>

          <div className='mx-auto mt-10 max-w-[560px] space-y-1 font-sans text-[20px] leading-[32px] text-black sm:text-[22px] sm:leading-[34px] lg:text-[24px] lg:leading-[36px]'>
            <p>India gives us engineering depth.</p>
            <p>Global exposure gives us perspective.</p>
          </div>

          <p className='mx-auto mt-8 max-w-[820px] font-sans text-[18px] leading-[28px] text-black'>
            We combine strategic thinking with execution efficiency, delivering
            enterprise-level thinking with long-term partnership models.
          </p>

          <div className='mt-10'>
            <Button href="/contact" variant="primary" size="md">
              Book A Call
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </section>

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-16 lg:py-24'>
        <div className='grid gap-10 lg:grid-cols-[320px_minmax(0,1fr)]'>
          <div>
            <h2 className='font-body text-[40px] font-bold leading-[1.2] text-black sm:text-[48px]'>
              The Answer Stack
              <span className='align-top text-[0.42em]'>TM</span>
            </h2>
            <p className='mt-6 max-w-[340px] font-body text-[18px] leading-[30px] text-black'>
              Structured answers that remove doubt and improve conversion
              clarity.
            </p>
          </div>

          <div>
            {faqsByPage.about.map((faq, index) => (
              <FaqItem
                key={faq.question}
                faq={faq}
                open={openFaq === index}
                onToggle={() =>
                  setOpenFaq((current) => (current === index ? -1 : index))
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className='relative isolate overflow-hidden bg-black text-white'>
        <Image
          src='/figma/case-studies/cta-bg.png'
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-black/60' />

        <div className='relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-16 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-[60px] lg:py-20'>
          <h2 className='max-w-[910px] font-display text-[42px] leading-[1.08] text-white sm:text-[48px] lg:text-[54px] lg:leading-[64px]'>
            Schedule a 30-minute call with CEO to see if we are a good match.
          </h2>

          <Button href="/contact" variant="outline" size="md">
            Book a Strategy Call
            <ArrowRightIcon />
          </Button>
        </div>
      </section>
    </main>
  );
}
