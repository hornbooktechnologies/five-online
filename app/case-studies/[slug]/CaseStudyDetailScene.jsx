import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Button from '@/app/components/common/Button';
import FAQAccordion from "@/app/components/common/FAQAccordion";

const aiSummaryIcons = [
  "/figma/case-study-detail/ai-summary-1.png",
  "/figma/case-study-detail/ai-summary-2.png",
  "/figma/case-study-detail/ai-summary-3.png",
  "/figma/case-study-detail/ai-summary-4.png",
];

function getSceneContent(cs) {
  return cs;
}

function StatStrip({ stats }) {
  if (!stats) return null;

  // We repeat the stats array multiple times for a seamless marquee effect
  const marqueeStats = [...stats, ...stats, ...stats, ...stats];

  return (
    <div className='relative overflow-hidden'>
      <Image
        src='/figma/case-study-detail/stats-background.png'
        alt=''
        fill
        className='object-cover'
        sizes='1320px'
      />

      {/* Mobile Marquee */}
      <div className='lg:hidden relative py-6 flex overflow-hidden'>
        <div
          className='flex w-max'
          style={{ animation: 'statMarquee 20s linear infinite' }}
        >
          {marqueeStats.map((stat, index) => (
            <div
              key={`mobile-${stat.value}-${stat.label}-${index}`}
              className='flex flex-shrink-0 items-center justify-start gap-4 px-6 sm:px-10'
            >
              <p className='text-[30px] leading-[30px] text-[#6abd45] sm:text-[36px] sm:leading-[36px]'>
                {stat.value}
              </p>
              <p className='text-[18px] capitalize leading-[28px] text-white sm:text-[20px] sm:leading-[30px] whitespace-nowrap'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className='hidden relative lg:grid lg:grid-cols-3 gap-6 py-6 lg:px-[112px]'>
        {stats.map((stat, index) => (
          <div
            key={`desktop-${stat.value}-${stat.label}-${index}`}
            className='flex items-center justify-center gap-4'
          >
            <p className='text-[30px] leading-[30px] text-[#6abd45] sm:text-[36px] sm:leading-[36px]'>
              {stat.value}
            </p>
            <p className='text-[18px] capitalize leading-[28px] text-white sm:text-[20px] sm:leading-[30px] lg:max-w-[180px] lg:text-balance'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes statMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); } 
        }
      `}} />
    </div>
  );
}

function TagPill({ label }) {
  return (
    <span className='inline-flex items-center rounded-[20px] bg-[#f0f6ed] px-4 py-2 text-[14px] leading-none text-[#0d0d0d]'>
      {label}
    </span>
  );
}

function StrategyCard({ title, body, className = "" }) {
  return (
    <article
      className={`grid grid-rows-subgrid row-span-2 gap-[100px] rounded-[8px] bg-[#fafafa] p-6 ${className}`}
    >
      <h3 className='text-[22px] leading-[32px] text-black sm:text-[24px] sm:leading-[36px]'>
        {title}
      </h3>
      <p className='text-[16px] leading-[28px] text-[#333] sm:leading-[30px] whitespace-pre-line'>
        {body}
      </p>
    </article>
  );
}

export default function CaseStudyDetailScene({ cs }) {
  const content = getSceneContent(cs);

  return (
    <main className='bg-[#fbfffa]'>
      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] pt-12'>
        <div className='grid lg:grid-cols-[480px_minmax(0,783px)] lg:items-center gap-5 lg:gap-0'>
          <div className='relative h-full flex flex-col justify-evenly mt-0 lg:mt-[70px] gap-10 lg:gap-0'>
            <img
              src='/figma/case-study-detail/hero-scribble-top.svg'
              alt=''
              aria-hidden='true'
              className='absolute left-[270px] top-[50px] hidden lg:block'
              style={{ width: 299, height: 39 }}
            />
            <img
              src='/figma/case-study-detail/hero-scribble-bottom-1.svg'
              alt=''
              aria-hidden='true'
              className='absolute left-[-130px] top-[330px] hidden lg:block'
              style={{ width: 269, height: 39 }}
            />
            <div>
              <h1 className='text-[40px] leading-[1.08] text-black sm:text-[48px] sm:leading-[64px]'>
                {content.client || content.heroTitle}
              </h1>
              <p className='mt-6 whitespace-pre-line text-[18px] leading-[28px] text-[#666] sm:text-[20px] sm:leading-[30px]'>
                {content.eyebrow}
              </p>
            </div>

            <div className=''>
              <p className='text-[20px] leading-[30px] text-black'>
                Tools
              </p>
              <div className='mt-3 flex items-center gap-1'>
                {content.toolIcons && content.toolIcons.map((icon) => (
                  <Image key={icon} src={icon} alt='' width={48} height={48} className='w-[34px] lg:w-[48px] h-[34px] lg:h-[48px]' />
                ))}
              </div>
            </div>
          </div>

          <div className='relative aspect-[742/591] overflow-hidden'>
            {content.heroUsesFrameAsset ? (
              <>
                <Image
                  src={content.heroImage}
                  alt={`${cs.client} hero preview`}
                  width={1072}
                  height={805}
                  className='absolute object-cover block w-full bottom-[-5px] lg:bottom-[-20px]'
                  sizes='783px'
                  priority
                />
              </>
            ) : (
              <Image
                src={content.heroImage}
                alt={`${cs.client} hero preview`}
                fill
                className='object-cover'
                sizes='783px'
                priority
              />
            )}
          </div>
        </div>
      </section>
      <StatStrip stats={content.stats} />

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-12 mt-12'>
        <div className='flex flex-col gap-10'>
          <p className='font-display text-[32px] leading-none text-[#666666]'>
            Overview
          </p>
          <div className='grid gap-8 lg:grid-cols-[1fr_338px] lg:items-start'>
            <p className='max-w-[762px] font-display text-[24px] leading-[1.35] text-black'>
              {content.overview}
            </p>
            <div className='flex flex-wrap gap-4'>
              {content.tags && content.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='flex w-auto gap-4 items-center rounded-[8px] bg-[#ebeae7] p-2'>
              <p className='text-[14px] leading-none text-black'>
                Generate AI Summary
              </p>
              <div className='ml-auto flex items-center gap-[6px]'>
                {aiSummaryIcons.map((icon) => (
                  <span
                    key={icon}
                    className='flex h-[28px] w-[28px] items-center justify-center rounded-[4px] bg-white'
                  >
                    <Image src={icon} alt='' width={20} height={20} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-12'>
        <div className='grid gap-5 lg:grid-cols-2'>
          {content.previewVisuals && content.previewVisuals.length >= 2 && (
            <>
              <div className='relative aspect-[649/543] overflow-hidden rounded-[16px] bg-[#f7f7f7]'>
                <Image
                  src={content.previewVisuals[0]}
                  alt=''
                  fill
                  className='object-contain p-4 sm:p-6'
                  sizes='649px'
                />
              </div>
              <div className='relative aspect-[649/543] overflow-hidden rounded-[16px] bg-[#f0f6ed]'>
                <Image
                  src={content.previewVisuals[1]}
                  alt=''
                  fill
                  className='object-contain p-4 sm:p-6'
                  sizes='649px'
                />
              </div>
            </>
          )}
          <article className='rounded-[16px] bg-[#f0f6ed] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14'>
            <h2 className='text-[38px] capitalize leading-[1.18] text-black sm:text-[48px] sm:leading-[60px]'>
              The Real Problem
            </h2>
            <p className='mt-[16px] text-[16px] leading-[28px] text-[#333]'>
              {content.problemLead}
            </p>

            <ul className='mt-[44px] space-y-4'>
              {content.problemPoints && content.problemPoints.map((point) => (
                <li key={point} className='flex items-start gap-3'>
                  <Image
                    src='/figma/case-study-detail/bullet-check.png'
                    alt=''
                    width={20}
                    height={20}
                    className='mt-[5px] shrink-0'
                  />
                  <span className='text-[18px] leading-[28px] text-[#333] sm:text-[20px] sm:leading-[30px]'>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className='flex flex-col items-center justify-center gap-[35px] lg:gap-[70px] overflow-hidden rounded-[16px] bg-[#f0f6ed] px-8 py-10 sm:px-12 lg:px-16'>
            {/* Decorative SVG from Figma is served directly to avoid format/optimization issues. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/figma/case-study-detail/lightbulb-line.svg'
              alt=''
              aria-hidden='true'
              className='w-[125px] h-[125px]'
            />
            <p className='text-center text-[30px] capitalize leading-[1.35] text-black sm:text-[36px] sm:leading-[48px] font-display'>
              {content.problemInsight}
            </p>
          </article>
        </div>
      </section>

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-12'>
        <h2 className='text-center text-[40px] capitalize leading-[1.2] text-black sm:text-[48px] sm:leading-[60px]'>
          Strategic Thinking
        </h2>

        <div className='mt-[40px] grid gap-5 xl:grid-cols-4 grid-rows-[auto_auto]'>
          {content.strategyCards && content.strategyCards.map((card) => (
            <StrategyCard
              key={card.title}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
      </section>

      <section className='bg-[#f9fff6] py-12'>
        <div className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px]'>
          <h2 className='text-center text-[40px] uppercase leading-[1.2] text-black sm:text-[48px] sm:leading-[60px]'>
            WHAT WE BUILT
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[18px] mt-[52px]'>
            {content.whatWeBuilt && content.whatWeBuilt.map((block, index) => {
              if (block.type === 'hero') {
                return (
                  <div key={index} className={`col-span-2 ${block.theme === 'dark' ? 'bg-[#0B0B0B] text-white' : 'bg-[#F0F6ED] text-black'} rounded-[16px] px-[30px] md:px-[60px] pt-[35px] md:pt-[95px] relative overflow-hidden`}>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-10'>
                      <div className={`col-span-12 md:col-span-7 ${block.theme === 'dark' ? 'order-2' : 'order-2 md:order-1'}`}>
                        <Image
                          src={block.image}
                          alt=''
                          width={600}
                          height={400}
                          className='w-full h-auto rounded-[8px]'
                        />
                      </div>
                      <div className={`col-span-12 md:col-span-5 flex flex-col justify-center ${block.theme === 'dark' ? 'order-1' : 'order-1 md:order-2'}`}>
                        <h3 className='text-[24px] capitalize leading-[34px] sm:text-[28px] sm:leading-[40px] whitespace-pre-line'>
                          {block.title}
                        </h3>
                        <p className='mt-6 text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px]'>
                          {block.body}
                        </p>
                      </div>
                    </div>
                    {block.doodle && (
                      <Image
                        src={block.doodle}
                        alt=''
                        width={block.theme === 'dark' ? 159 : 125}
                        height={block.theme === 'dark' ? 182 : 144}
                        className='absolute right-[45%] top-[40%] hidden xl:block'
                      />
                    )}
                  </div>
                );
              }
              if (block.type === 'split') {
                return (
                  <React.Fragment key={index}>
                    <div className='col-span-2 md:col-span-1 bg-[#F0F6ED] text-black rounded-[16px] relative overflow-hidden min-h-auto md:min-h-[543px]'>
                      <div className='flex flex-col justify-center pt-[28px] pl-[28px] max-w-[410px]'>
                        <h3 className='text-[24px] capitalize leading-[34px] sm:text-[28px] sm:leading-[40px]'>
                          {block.left.title}
                        </h3>
                        <p className='mt-6 text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px]'>
                          {block.left.body}
                        </p>
                      </div>
                      <Image
                        src={block.left.image}
                        alt=''
                        width={300}
                        height={250}
                        className='w-[420px] h-auto position-[unset] md:absolute bottom-0 right-[40px]'
                      />
                      {block.left.doodle && (
                        <Image
                          src={block.left.doodle}
                          alt=''
                          width={102}
                          height={144}
                          className='absolute left-[30%] top-[55%] hidden xl:block ]'
                        />
                      )}
                    </div>
                    <div className='col-span-2 md:col-span-1 bg-[#F0F6ED] text-black rounded-[16px] relative overflow-hidden min-h-auto md:min-h-[543px]'>
                      <div className='flex flex-col justify-center pt-[28px] pl-[28px] max-w-[450px]'>
                        <h3 className='text-[24px] capitalize leading-[34px] sm:text-[28px] sm:leading-[40px]'>
                          {block.right.title}
                        </h3>
                        <p className='mt-6 text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px]'>
                          {block.right.body}
                        </p>
                      </div>
                      <Image
                        src={block.right.image}
                        alt=''
                        width={300}
                        height={250}
                        className='w-[520px] h-auto position-[unset] md:absolute bottom-0 right-[-90px]'
                      />
                      {block.right.doodle && (
                        <Image
                          src={block.right.doodle}
                          alt=''
                          width={102}
                          height={144}
                          className='absolute left-[30%] top-[55%] hidden xl:block ]'
                        />
                      )}
                    </div>
                  </React.Fragment>
                );
              }
              if (block.type === 'footer') {
                return (
                  <div key={index} className='col-span-2 bg-[#FAFAFA] text-black rounded-[16px] px-[30px] md:px-[60px] pt-[30px] md:pt-0 relative overflow-hidden'>
                    <div className='grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-10'>
                      <div className='col-span-12 md:col-span-5 flex flex-col justify-center'>
                        <h3 className='text-[24px] capitalize leading-[34px] sm:text-[28px] sm:leading-[40px]'>
                          {block.title}
                        </h3>
                        <p className='mt-6 text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px]'>
                          {block.body}
                        </p>
                      </div>
                      <div className='col-span-12 md:col-span-7'>
                        <Image
                          src={block.image}
                          alt=''
                          width={600}
                          height={400}
                          className='w-full h-auto rounded-[8px]'
                        />
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </section>

      <section className='mx-auto w-full max-w-[1440px] text-center px-6 lg:px-[60px] py-12'>
        <Link
          href={content.visitUrl || "#"}
          target="_blank"
          className='text-[18px] underline decoration-solid underline-offset-[4px]'
        >
          Visit Website
        </Link>
        <h2 className='mx-auto mt-[40px] max-w-[1096px] text-balance whitespace-pre-line text-[38px] capitalize leading-[1.28] text-black sm:mt-[52px] sm:text-[48px] sm:leading-[72px]'>
          {typeof content.closingHeadline === 'string'
            ? content.closingHeadline.replace(/ ([^ ]+)$/, '\u00A0$1')
            : content.closingHeadline}
        </h2>
        <p className='mt-[28px] text-[18px] leading-[28px] text-[#666] sm:mt-[40px] sm:text-[20px] sm:leading-[30px]'>
          {content.closingSubcopy}
        </p>
        <div className='mt-[42px]'>
          <Button href="/contact" variant="primary" size="md">
            {content.closingButtonText}
          </Button>
        </div>
      </section>

      <FAQAccordion
        title={content.faqTitle}
        description={content.faqDescription}
        faqs={content.faqsItems}
      />
    </main>
  );
}

