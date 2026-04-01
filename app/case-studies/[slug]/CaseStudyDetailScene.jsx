import Image from "next/image";
import Link from "next/link";
import Button from '@/app/components/common/Button';

const toolIcons = [
  "/figma/case-study-detail/figma-tool.png",
  "/figma/case-study-detail/illustrator-tool.png",
  "/figma/case-study-detail/photoshop-tool.png",
];

const aiSummaryIcons = [
  "/figma/case-study-detail/ai-summary-1.png",
  "/figma/case-study-detail/ai-summary-2.png",
  "/figma/case-study-detail/ai-summary-3.png",
  "/figma/case-study-detail/ai-summary-4.png",
];

const garwareContent = {
  eyebrow: "Digital Platform Transformation\nFor Enterprise Growth",
  heroTitle: "Garware Hi-Tech Films",
  heroImage: "/figma/case-study-detail/mac-studio.png",
  heroUsesFrameAsset: true,
  stats: [
    { value: "+38%", label: "product page engagement" },
    { value: "+52%", label: "enquiry interaction" },
    { value: "+52%", label: "enquiry interaction" },
  ],
  overview:
    "Transforming a legacy corporate website into a modern digital platform that supports global marketing, product discovery, and business growth.",
  tags: [
    "Travel & Tourism",
    "UI / UX Design",
    "2025",
    "6 Weeks",
    "Development",
    "CMS",
  ],
  problemLead: "The existing website had become a bottleneck for growth.",
  problemPoints: [
    "Complex product structure made discovery difficult.",
    "Outdated design reduced brand perception.",
    "Marketing teams struggled to use the website as a growth tool.",
    "Mobile experience was inconsistent.",
    "Enquiry flow lacked clarity.",
  ],
  problemInsight:
    "The user felt confused and overwhelmed due to poor guidance.",
  strategyCards: [
    {
      title: "Product architecture simplification",
      body: "We reorganised product categories and page flows so buyers could reach the right solution path faster.",
    },
    {
      title: "Enterprise UX thinking",
      body: "The information structure was rebuilt around how enterprise teams evaluate product fit and capability.",
    },
    {
      title: "Marketing enablement",
      body: "Every section was designed to give the marketing team a stronger platform for campaigns and lead capture.",
    },
    {
      title: "Mobile first responsive experience",
      body: "Responsive behaviour was refined to keep product discovery and enquiry flows stable across every screen size.",
    },
    {
      title: "Mobile first restructuring",
      body: "Core journeys were pressure-tested on smaller viewports before being expanded to desktop layouts.",
    },
    {
      title: "Global brand consistency",
      body: "The redesigned system carries the same premium positioning across all key pages and interaction patterns.",
    },
  ],
  previewVisuals: [
    "/figma/case-study-detail/ipad-pro.png",
    "/figma/case-study-detail/ipad-mini.png",
  ],
  closingHeadline:
    "If your digital platform is limiting growth,\nit may not be a design issue - it may be a strategy issue.",
  closingSubcopy: "Talk to our team to explore transformation opportunities.",
  visitUrl: "#",
};

function buildFallbackContent(cs) {
  const challengeParts = cs.challenge
    .split(". ")
    .map((item) => item.replace(/\.$/, "").trim())
    .filter(Boolean);

  const overviewTags = [
    cs.industry,
    ...cs.services.slice(0, 2),
    cs.year,
    "Development",
    "Strategy",
  ].slice(0, 6);

  const overview =
    cs.challenge.length > 140 ? cs.challenge : `${cs.challenge} ${cs.solution}`;

  const stats = [
    cs.stats[0],
    cs.stats[1],
    { value: cs.year, label: `${cs.industry.toLowerCase()} focus` },
  ].filter(Boolean);

  return {
    eyebrow: cs.tagline,
    heroTitle: cs.client,
    heroImage: cs.heroImage,
    heroUsesFrameAsset: false,
    stats: stats.map((stat) => ({
      value: stat.value,
      label: stat.label,
    })),
    overview,
    tags: overviewTags,
    problemLead:
      "The existing experience was limiting discovery, trust, and conversion momentum.",
    problemPoints: [
      challengeParts[0] ||
      "The experience did not reflect the brand's current ambition.",
      challengeParts[1] ||
      "Critical product information was harder to discover than it should have been.",
      challengeParts[2] ||
      "The website was not giving the commercial team a strong growth platform.",
      "Mobile browsing introduced friction in key decision-making journeys.",
      "Enquiry actions needed more clarity and stronger intent capture.",
    ],
    problemInsight:
      "Users were losing confidence because the path to clarity was too hard to follow.",
    strategyCards: [
      {
        title: "Architecture simplification",
        body: "We aligned structure with the buyer journey so people could find the right information with less effort.",
      },
      {
        title: "Commercial UX thinking",
        body: "Content and interfaces were shaped around trust, decision support, and conversion momentum.",
      },
      {
        title: "Marketing enablement",
        body: "The platform was rebuilt to support campaigns, storytelling, and lead generation more effectively.",
      },
      {
        title: "Responsive performance",
        body: "Key flows were refined across devices to keep the experience dependable on every screen size.",
      },
      {
        title: "Content clarity",
        body: "Copy blocks, page hierarchy, and section framing were improved to reduce ambiguity for visitors.",
      },
      {
        title: "Brand consistency",
        body: "The visual system was tightened so the brand reads as credible and coherent at every touchpoint.",
      },
    ],
    previewVisuals: [
      "/figma/case-study-detail/ipad-pro.png",
      "/figma/case-study-detail/ipad-mini.png",
    ],
    closingHeadline:
      "If your digital platform is limiting growth,\nit may not be a design issue - it may be a strategy issue.",
    closingSubcopy: "Talk to our team to explore transformation opportunities.",
    visitUrl: "#",
  };
}

function getSceneContent(cs) {
  if (cs.slug === "garware-hi-tech") return garwareContent;
  return buildFallbackContent(cs);
}

function StatStrip({ stats }) {
  return (
    <div className='relative overflow-hidden bg-[#0d0d0d]'>
      <Image
        src='/figma/case-study-detail/stats-bg.png'
        alt=''
        fill
        className='object-cover opacity-80'
        sizes='1320px'
      />
      <div className='relative grid grid-cols-1 gap-6 px-6 py-6 sm:px-8 lg:grid-cols-3 lg:px-[112px]'>
        {stats.map((stat, index) => (
          <div
            key={`${stat.value}-${stat.label}-${index}`}
            className='flex items-center justify-start lg:justify-center gap-4'
          >
            <p className='font-display text-[30px] leading-[30px] text-[#6abd45] sm:text-[36px] sm:leading-[36px]'>
              {stat.value}
            </p>
            <p className='font-sans text-[18px] capitalize leading-[28px] text-white sm:text-[20px] sm:leading-[30px]'>
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TagPill({ label }) {
  return (
    <span className='inline-flex items-center rounded-[20px] bg-[#f0f6ed] px-4 py-2 font-sans text-[14px] leading-none text-[#0d0d0d]'>
      {label}
    </span>
  );
}

function StrategyCard({ title, body, className = "" }) {
  return (
    <article
      className={`flex flex-col gap-[100px] justify-between rounded-[8px] bg-[#fafafa] p-6 ${className}`}
    >
      <h3 className='font-display text-[22px] leading-[32px] text-black sm:text-[24px] sm:leading-[36px]'>
        {title}
      </h3>
      <p className='font-sans text-[16px] leading-[28px] text-[#333] sm:leading-[30px]'>
        {body}
      </p>
    </article>
  );
}

export default function CaseStudyDetailScene({ cs }) {
  const content = getSceneContent(cs);

  return (
    <main className='bg-[#fbfffa]'>
      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] pt-6 lg:pt-20'>
        <div className='grid lg:grid-cols-[480px_minmax(0,783px)] lg:items-center'>
          <div className='relative h-full flex flex-col justify-evenly overflow-hidden mt-0 lg:mt-[50px] gap-10 lg:gap-0'>
            {/* Decorative SVG from Figma is served directly to avoid format/optimization issues. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/figma/case-study-detail/hero-scribble-top.svg'
              alt=''
              aria-hidden='true'
              className='absolute left-[270px] top-[80px] hidden lg:block'
              style={{ width: 299, height: 39 }}
            />
            {/* Decorative SVG from Figma is served directly to avoid format/optimization issues. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src='/figma/case-study-detail/hero-scribble-bottom.svg'
              alt=''
              aria-hidden='true'
              className='absolute left-[-130px] top-[310px] hidden lg:block rotate-180'
              style={{ width: 269, height: 39 }}
            />
            <div>
              <h1 className='font-display text-[40px] leading-[1.08] text-black sm:text-[48px] sm:leading-[64px]'>
                {content.heroTitle}
              </h1>
              <p className='mt-6 whitespace-pre-line font-sans text-[18px] leading-[28px] text-[#666] sm:text-[20px] sm:leading-[30px]'>
                {content.eyebrow}
              </p>
            </div>

            <div className=''>
              <p className='font-sans text-[20px] leading-[30px] text-black'>
                Tools
              </p>
              <div className='mt-3 flex items-center gap-1'>
                {toolIcons.map((icon) => (
                  <Image key={icon} src={icon} alt='' width={48} height={48} />
                ))}
              </div>
            </div>
          </div>

          <div className='relative aspect-[742/591] overflow-hidden  bg-white'>
            {content.heroUsesFrameAsset ? (
              <>
                <Image
                  src={content.heroImage}
                  alt={`${cs.client} hero preview`}
                  fill
                  className='object-contain lg:hidden'
                  sizes='(min-width: 1024px) 783px, 100vw'
                  priority
                />
                <Image
                  src={content.heroImage}
                  alt={`${cs.client} hero preview`}
                  width={1072}
                  height={805}
                  className='absolute hidden max-w-none object-cover lg:block'
                  style={{
                    left: "-15.91%",
                    top: "-19.75%",
                    width: "136.88%",
                    height: "136.25%",
                  }}
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

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-16 lg:py-24'>
        <div className='flex flex-col gap-10'>
          <p className='font-display text-[28px] leading-none text-[#666] sm:text-[32px]'>
            Overview
          </p>
          <div className='grid gap-8 lg:grid-cols-[1fr_338px] lg:items-start'>
            <p className='max-w-[762px] font-display text-[30px] capitalize leading-[1.35] text-black sm:text-[36px] sm:leading-[56px]'>
              {content.overview}
            </p>
            <div className='flex flex-wrap gap-4'>
              {content.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
          </div>
          <div className='flex justify-end'>
            <div className='flex w-auto gap-4 items-center rounded-[8px] bg-[#ebeae7] p-2'>
              <p className='font-sans text-[14px] leading-none text-black'>
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

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-16 lg:py-24'>
        <div className='grid gap-5 lg:grid-cols-2'>
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
          <article className='rounded-[16px] bg-[#f0f6ed] px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14'>
            <h2 className='font-display text-[38px] capitalize leading-[1.18] text-black sm:text-[48px] sm:leading-[60px]'>
              The Real Problem
            </h2>
            <p className='mt-[16px] font-display text-[16px] leading-none text-[#333]'>
              {content.problemLead}
            </p>

            <ul className='mt-[44px] space-y-4'>
              {content.problemPoints.map((point) => (
                <li key={point} className='flex items-start gap-3'>
                  <Image
                    src='/figma/case-study-detail/bullet-check.png'
                    alt=''
                    width={20}
                    height={20}
                    className='mt-[5px] shrink-0'
                  />
                  <span className='font-body text-[18px] leading-[28px] text-[#333] sm:text-[20px] sm:leading-[30px]'>
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
            <p className='text-center font-display text-[30px] capitalize leading-[1.35] text-black sm:text-[36px] sm:leading-[48px]'>
              {content.problemInsight}
            </p>
          </article>
        </div>
      </section>

      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-16 lg:py-24'>
        <h2 className='text-center font-display text-[40px] capitalize leading-[1.2] text-black sm:text-[48px] sm:leading-[60px]'>
          Strategic Thinking
        </h2>

        <div className='mt-[40px] grid gap-5 xl:grid-cols-4'>
          {content.strategyCards.map((card) => (
            <StrategyCard
              key={card.title}
              title={card.title}
              body={card.body}
            />
          ))}
        </div>
      </section>

      <section className='bg-[#f9fff6] py-16 lg:py-24'>
        <div className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px]'>
          <h2 className='text-center font-display text-[40px] uppercase leading-[1.2] text-black sm:text-[48px] sm:leading-[60px]'>
            WHAT WE BUILT
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-[18px] mt-[52px]'>
            <div className='col-span-2 bg-[#F0F6ED] text-black rounded-[16px] px-[30px] md:px-[60px] pt-[35px] md:pt-[95px] relative overflow-hidden'>
              <div className='grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-10'>
                <div className='col-span-12 md:col-span-7 order-2 md:order-1'>
                  <Image
                    src='/figma/case-study-detail/hand-phone-1.png'
                    alt=''
                    width={600}
                    height={400}
                    className='w-full h-auto rounded-[8px]'
                  />
                </div>
                <div className='col-span-12 md:col-span-5 order-1 md:order-2'>
                  <h3
                    className={`font-sans text-[24px] leading-[34px] sm:text-[28px] sm:leading-[40px] `}
                  >
                    Structured product discovery, <br />
                    built for clarity.
                  </h3>
                  <p
                    className={`mt-6 font-sans text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px] `}
                  >
                    Category paths, navigation cues, and product page layouts
                    were rebuilt around evaluation speed and buyer confidence.
                  </p>
                </div>
              </div>
              <Image
                src='/figma/case-study-detail/doodle-1.svg'
                alt=''
                width={125}
                height={144}
                className='absolute right-[45%] top-[40%] hidden xl:block'
              />
            </div>
            <div className='col-span-2 bg-[#0B0B0B] text-white rounded-[16px] px-[30px] md:px-[60px] pt-[35px] md:pt-0 relative overflow-hidden'>
              <div className='grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-10'>
                <div className='col-span-12 md:col-span-5 flex flex-col justify-center'>
                  <h3
                    className={`font-sans text-[24px] leading-[34px] sm:text-[28px] sm:leading-[40px] `}
                  >
                    Seamless navigation designed for intuitive exploration.
                  </h3>
                  <p
                    className={`mt-6 font-sans text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px] `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </p>
                </div>
                <div className='col-span-12 md:col-span-7'>
                  <Image
                    src='/figma/case-study-detail/hand-phone-2.png'
                    alt=''
                    width={600}
                    height={400}
                    className='w-full h-auto rounded-[8px]'
                  />
                </div>
              </div>
              <Image
                src='/figma/case-study-detail/doodle-2.svg'
                alt=''
                width={159}
                height={182}
                className='absolute right-[45%] top-[20%] hidden xl:block ]'
              />
            </div>
            <div className='col-span-2 md:col-span-1 bg-[#F0F6ED] text-black rounded-[16px] relative overflow-hidden min-h-auto md:min-h-[543px]'>
              <div className='flex flex-col justify-center pt-[28px] pl-[28px] max-w-[410px]'>
                <h3
                  className={`font-sans text-[24px] leading-[34px] sm:text-[28px] sm:leading-[40px] `}
                >
                  A consistent design system that scales across experiences.
                </h3>
                <p
                  className={`mt-6 font-sans text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px] `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
              <Image
                src='/figma/case-study-detail/iPhone13.png'
                alt=''
                width={300}
                height={250}
                className='w-[420px] h-auto position-[unset] md:absolute bottom-0 right-[40px]'
              />
              <Image
                src='/figma/case-study-detail/doodle-3.svg'
                alt=''
                width={102}
                height={144}
                className='absolute left-[30%] top-[55%] hidden xl:block ]'
              />
            </div>
            <div className='col-span-2 md:col-span-1 bg-[#F0F6ED] text-black rounded-[16px] relative overflow-hidden min-h-auto md:min-h-[543px]'>
              <div className='flex flex-col justify-center pt-[28px] pl-[28px] max-w-[450px]'>
                <h3
                  className={`font-sans text-[24px] leading-[34px] sm:text-[28px] sm:leading-[40px] `}
                >
                  A mobile-first interface that adapts across devices.
                </h3>
                <p
                  className={`mt-6 font-sans text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px] `}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
              </div>
              <Image
                src='/figma/case-study-detail/iphone-16.png'
                alt=''
                width={300}
                height={250}
                className='w-[520px] h-auto position-[unset] md:absolute bottom-0 right-[-90px]'
              />
              <Image
                src='/figma/case-study-detail/doodle-4.svg'
                alt=''
                width={102}
                height={144}
                className='absolute left-[30%] top-[55%] hidden xl:block ]'
              />
            </div>
            <div className='col-span-2 bg-[#FAFAFA] text-black rounded-[16px] px-[30px] md:px-[60px] pt-[30px] md:pt-0 relative overflow-hidden'>
              <div className='grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-10'>
                <div className='col-span-12 md:col-span-5 flex flex-col justify-center'>
                  <h3
                    className={`font-sans text-[24px] leading-[34px] sm:text-[28px] sm:leading-[40px] `}
                  >
                    An enquiry journey optimised to convert intent into action.
                  </h3>
                  <p
                    className={`mt-6 font-sans text-[16px] leading-[28px] sm:mt-8 sm:leading-[30px] `}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut.
                  </p>
                </div>
                <div className='col-span-12 md:col-span-7'>
                  <Image
                    src='/figma/case-study-detail/macbook-airs.png'
                    alt=''
                    width={600}
                    height={400}
                    className='w-full h-auto rounded-[8px]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mx-auto w-full max-w-[1440px] text-center px-6 lg:px-[60px] py-16 lg:py-24'>
        <Link
          href={content.visitUrl}
          className='font-sans text-[18px] underline decoration-solid underline-offset-[4px]'
        >
          Visit Website
        </Link>
        <h2 className='mx-auto mt-[40px] max-w-[1096px] whitespace-pre-line font-display text-[38px] capitalize leading-[1.28] text-black sm:mt-[52px] sm:text-[48px] sm:leading-[72px]'>
          {content.closingHeadline}
        </h2>
        <p className='mt-[28px] font-sans text-[18px] leading-[28px] text-[#666] sm:mt-[40px] sm:text-[20px] sm:leading-[30px]'>
          {content.closingSubcopy}
        </p>
        <div className='mt-[42px]'>
          <Button href="/contact" variant="primary" size="md">
            Schedule Strategic Discussion
          </Button>
        </div>
      </section>
    </main>
  );
}
