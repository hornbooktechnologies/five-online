import Image from "next/image";
import Button from "@/app/components/common/Button";
import Container from "@/app/components/common/Container";
import ArrowRightIcon from "@/app/components/icons/ArrowRightIcon";
import FAQAccordion from "@/app/components/common/FAQAccordion";
import TrustedPartnersSection from "@/app/components/sections/home/TrustedPartnersSection";

const stats = [
  ["20+", "Years building digital business"],
  ["3.2x", "Average ROAS improvement"],
  ["Rs.100cr+", "Revenue enabled across launches"],
];

const launchProblems = [
  [
    "01.",
    "You hired a design agency, not a D2C strategist",
    "A beautiful website with no conversion architecture is an expensive brochure. Design without strategy is decoration.",
  ],
  [
    "02.",
    "Your tracking was an afterthought",
    "If your pixel isn't firing correctly on Day 1, every rupee of ad spend is training Meta on bad data. Most brands discover this months in.",
  ],
  [
    "03.",
    "The brand didn't have a premium presence",
    "Customers make a trust decision in 3 seconds. If your site doesn't feel like a premium brand at first glance, you've already lost them.",
  ],
  [
    "04.",
    "The funnel was never mapped",
    "From ad creative to checkout — every micro-step has a drop-off point. Most launches don't optimize any of them.",
  ],
];

const systemCards = [
  {
    image: "/figma/d2c-ecommerce-launch/brand-architecture.png",
    title: "Brand Architecture",
    description:
      "Premium positioning, visual identity alignment, and brand voice built to command attention and justify price points.",
  },
  {
    image: "/figma/d2c-ecommerce-launch/conversion-engineering.png",
    title: "Conversion Engineering",
    description:
      "Every page, homepage, PDP, cart, checkout, architected with psychological triggers that move buyers forward.",
  },
  {
    image: "/figma/d2c-ecommerce-launch/revenue-tracking-setup.png",
    title: "Revenue Tracking Setup",
    description:
      "Pixel setup, GA4, Meta CAPI, attribution modelling, so your ad spend trains on accurate data from Day 1.",
  },
  {
    image: "/figma/d2c-ecommerce-launch/performance-infrastructure.png",
    title: "Performance Infrastructure",
    description:
      "Speed-optimised builds, mobile-first UX, and technical foundations that Google and customers reward.",
  },
  {
    image: "/figma/d2c-ecommerce-launch/customer-journey-design.png",
    title: "Customer Journey Design",
    description:
      "Post-purchase flows, loyalty triggers, and retention sequences built into the product experience, not bolted on later.",
  },
  {
    image: "/figma/d2c-ecommerce-launch/launch-readiness-review.png",
    title: "Launch Readiness Review",
    description:
      "A final pre-launch review across product pages, tracking, payments, fulfilment, and funnel flow before ad spend begins.",
  },
];

const launchSteps = [
  [
    "01",
    "Diagnosis",
    "Brand audit, market analysis, and conversion opportunity mapping",
  ],
  [
    "02",
    "Architect",
    "Funnel design, UX blueprint, and revenue-first page strategy",
  ],
  ["03", "Build", "Premium design and development with conversion baked in"],
  [
    "04",
    "Instrument",
    "Full tracking, pixel, and attribution setup before launch",
  ],
  [
    "05",
    "Launch & Learn",
    "Go-live with 30-day performance review and iteration plan",
  ],
];

const audienceCards = [
  {
    eyebrow: "The Right Fit",
    icon: "/figma/d2c-ecommerce-launch/sparkling-2-line.png",
    title: "Built for founders who \nare serious about winning",
    bg: "#fafafa",
    items: [
      "Celebrities launching D2C brands who need a premium-grade digital presence",
      "Corporates launching new D2C verticals with speed and credibility",
      "Funded startups who can't afford a slow, costly relaunch 6 months in",
      "Manufacturers going direct-to-consumer for the first time",
      "Instagram or marketplace sellers ready to own their customer relationship",
      "Founders with a Rs.1.5L+ investment mindset and 90-day launch target",
    ],
  },
  {
    eyebrow: "Not for Everyone",
    icon: "/figma/d2c-ecommerce-launch/sparkling-2-line.png",
    title: "We're not the right partner \nif you are looking for...",
    bg: "#f0f6ed",
    items: [
      "The cheapest Shopify developer you can find.",
      "Someone to execute your design without questioning the brief",
      "A vendor who will say yes to everything and deliver average work",
      "A 2-week turnaround on a complex brand launch",
      "A team with no strategic point of view on D2C",
      "Someone who builds websites, not revenue systems",
    ],
  },
];

const executionStats = [
  [
    "3.8x",
    "ROAS improvement in 60 days",
    "A lifestyle brand came to us after burning ₹10L on ads with no return. We rebuilt the funnel, fixed tracking, and relaunched. Month 2 paid for the entire project.",
    "Lifestyle - D2C Launch",
  ],
  [
    "₹2.1Cr",
    "Revenue in first 90 days",
    "A celebrity-backed lifestyle brand with a hard launch deadline. We delivered a full D2C ecosystem in 8 weeks — brand, website, tracking, and launch strategy — and they sold out.",
    "Celebrity Lifestyle - Growth Engine",
  ],
  [
    "68%",
    "Reduction in checkout abandonment",
    "A manufacturer going D2C for the first time had a 91% cart drop-off rate. A conversion audit and 3-week rebuild later, they crossed 2-figure daily orders for the first time.",
    "Garment Manufacturer - D2C Scale Pro",
  ],
];

const mistakes = [
  [
    "Deep D2C expertise",
    "We're not web designers who learnt Shopify. We're D2C operators who understand margin, retention, and full-funnel performance.",
  ],
  [
    "Revenue-first architecture",
    "Every decision — from navigation structure to CTA placement — is made through one lens: will this sell more product?",
  ],
  [
    "Strategic tracking setup",
    "Most agencies treat pixel setup as a checkbox. We treat it as a revenue infrastructure. Your ad spend should learn fast.",
  ],
  [
    "Consulting-first mindset",
    "We challenge briefs, ask uncomfortable questions, and refuse to build something that won't work. That's what you're paying for.",
  ],
  [
    "Premium brand instinct",
    "We've positioned brands that compete at ₹2,000+ price points. We know what premium looks, feels, and sounds like online.",
  ],
  [
    "No junior handoffs",
    "Senior strategists on your account. Every call, every decision. Not an intern with a template and a deadline.",
  ],
];

const portfolio = [
  {
    name: "Just In Time",
    category: "Celebrity Brand",
    brand: "Aura by [Celebrity] - Luxury Skincare D2C",
    packageName: "D2C Growth Engine . Shopify Plus",
    metric: "Rs.2.1 Crore Revenue in Month 1",
    img: "/figma/portfolio/project-cover-image/Just-In-Time.jpg",
    featured: "wide",
    challenge:
      "Celebrity-backed brand needed a launch-ready D2C site in 6 weeks, premium positioning, full tracking, and a Rs.2Cr sales target for Month 1.",
  },
  {
    name: "Buget",
    category: "Funded Startup",
    brand: "Verdant- Organic Wellness",
    packageName: "D2C Growth Engine",
    metric: "68% Drop in cart abandonment",
    img: "/figma/portfolio/project-cover-image/Buget-Store.jpg",
  },
  {
    name: "Hairfinity",
    category: "Manufacturer- D2C",
    brand: "Premium Grains and Superfoods",
    packageName: "D2C Launch Lite",
    metric: "3.8 X ROAS . 30 days",
    img: "/figma/portfolio/project-cover-image/Hair-Finity.jpg",
  },
  {
    name: "G3 Fashion",
    category: "Corporate D2C",
    brand: "Nova Men - Premium Men's Grooming",
    packageName: "D2C Scale Pro",
    metric: "Rs.80 L revenue . 45 days",
    img: "/figma/portfolio/project-cover-image/G3-Fashion.jpg",
  },
  {
    name: "Flashmob Nation",
    category: "Creator D2C Brand",
    brand: "Maison- Lifestyle Apparel",
    packageName: "D2C Growth Engine",
    metric: "22% Conversion Rate . Launch Week",
    img: "/figma/portfolio/project-cover-image/Flash-Mob-Nation.jpg",
  },
  {
    name: "Jamna",
    category: "D2C Startup",
    brand: "Ojas- Ayurvedic Supplement",
    packageName: "D2C Growth Engine",
    metric: "2.9 X ROAS Improvement",
    img: "/figma/portfolio/project-cover-image/Jamna.jpg",
  },
  {
    name: "Neeta Lulla",
    category: "Celebrity Brand",
    brand: "Aura by [Celebrity] - Luxury Skincare D2C",
    packageName: "D2C Growth Engine . Shopify Plus",
    metric: "Rs.2.1 Crore Revenue in Month 1",
    img: "/figma/portfolio/project-cover-image/Neeta-Lulla.jpg",
    featured: "wide",
  },
];

const promises = [
  {
    image: "/figma/d2c-ecommerce-launch/our-promise/sales-ready-from-day-1.png",
    title: "Sales ready from day 1",
    copy: "Not a soft launch. A real launch.",
  },
  {
    image:
      "/figma/d2c-ecommerce-launch/our-promise/no-scope-creep-surprises.png",
    title: "No scope Creep Surprises",
    copy: "Transparent from first call to final delivery.",
  },
  {
    image: "/figma/d2c-ecommerce-launch/our-promise/you-own-everything.png",
    title: "You Own Everything",
    copy: "Full code, data, and platform ownership.",
  },
];

const faqs = [
  {
    q: "What makes Five Online different from a regular Shopify agency in India?",
    a: "Five Online is a Mumbai-based Best D2C web design company that operates as a revenue-first launch partner, not a typical Shopify development agency. Unlike agencies that execute briefs, Five Online starts every engagement by examining the brand's margin structure, target customer, and revenue model before any design begins. With 20+ years of experience and 500+ projects across D2C, enterprise, and celebrity brands, Five Online builds Shopify stores that are engineered to convert from day one — not just deliver a finished website.",
  },
  {
    q: "How much does it cost to launch a D2C brand on Shopify in India?",
    a: "A professional D2C launch on Shopify in India typically starts at ₹1.5L and scales based on scope — brand architecture, number of SKUs, third-party integrations, tracking setup, and conversion framework. At Five Online, pricing is scoped per engagement because no two brand launches have the same revenue requirements. Brands with budgets under ₹1L are not the right fit for Five Online's model — a position the agency is transparent about from the first conversation.",
  },
  {
    q: "Can an existing website be improved for D2C conversions without a full rebuild?",
    a: "Yes. Five Online offers a standalone D2C Conversion Audit that identifies revenue leaks, funnel gaps, and platform limitations without requiring a full rebuild. In many cases, a strategic overlay or partial redesign delivers better ROI than starting from scratch. Five Online reviews the existing site, analytics, and funnel data before recommending a path — and has no commercial incentive to recommend a rebuild if it isn't necessary.",
  },
];

const trustedBrands = [
  "red-chillies.png",
  "raymon-realty.png",
  "garware.png",
  "realty.png",
  "image 6.png",
  "dna.png",
];

function SectionTitle({ title, copy, light = false, className = "" }) {
  return (
    <div className={className}>
      <h2
        className={`font-heading text-[34px] leading-[1.15] md:text-[48px] md:leading-[60px] ${light ? "text-white" : "text-black"
          }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-6 max-w-[540px] text-base leading-[30px] ${light ? "text-white/75" : "text-[#333]"}`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

export default function D2CEcommerceLaunchPage() {
  return (
    <main className='bg-white text-black'>
      <section className='relative overflow-hidden bg-[#fbfffa]'>
        <Container className='relative max-w-[1440px] !px-6 !lg:px-[60px] !py-12'>
          <div className='pointer-events-none absolute right-0 top-[150px] hidden font-heading text-[170px] leading-none text-[#70706f]/20 lg:block xl:text-[300px]'>
            D2C
          </div>
          <div className='relative max-w-[560px]'>
            <h1 className='font-heading text-[52px] leading-[1.08] text-black sm:text-[66px] lg:text-[72px] lg:leading-[90px]'>
              We don&apos;t build websites.
              <span className='mt-2 block text-[#666]'>
                We build revenue engines.
              </span>
            </h1>
            <p className='mt-8 max-w-[538px] text-base leading-[30px] text-[#333]'>
              Most D2C brands go live and wait for sales to happen. We build
              brands that sell from Day 1 — with strategy, systems, and a
              conversion framework that turns traffic into revenue.
            </p>
            <div className='mt-10 flex flex-col gap-5 sm:flex-row sm:items-center'>
              <Button href='/contact' variant='primary' size='md'>
                Book A Strategy Call
              </Button>
              <Button href='#five-steps' variant='ghost' size='md'>
                See How It Works <ArrowRightIcon color='black' />
              </Button>
            </div>
          </div>

          <div className='mt-14 flex flex-col md:flex-row gap-8 border-t border-black/20 pt-9'>
            {stats.map(([value, label]) => (
              <div key={value}>
                <p className='font-heading text-[48px] leading-[64px]'>
                  {value}
                </p>
                <p className='mt-2 text-base leading-[30px] text-[#333333]'>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className='bg-black'>
        <Container className='max-w-[1440px] !px-6 !lg:px-[60px] !py-12'>
          <div className='grid gap-12 lg:grid-cols-[536px_1fr] lg:items-center'>
            <SectionTitle
              light
              title={
                <>
                  The real reason your <br /> D2C launch{" "}
                  <span className='text-[#6ABD45]'>underperforms.</span>
                </>
              }
              copy="It's not the product. It's not the budget. It's that most brands treat their website like a brochure — and then wonder why traffic doesn't convert."
            />
            <div className='divide-y divide-white/20 border-y border-white/20'>
              {launchProblems.map(([number, title, copy]) => (
                <article
                  key={number}
                  className='grid gap-4 py-7 sm:grid-cols-[42px_1fr]'
                >
                  <p className='text-xl font-semibold leading-8 text-[#6ABD45]'>
                    {number}
                  </p>
                  <div>
                    <h3 className='text-xl font-medium leading-8 text-white'>
                      {title}
                    </h3>
                    <p className='mt-3 text-sm leading-6 text-white/70'>
                      {copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className='bg-white'>
        <Container className='!max-w-[1096px] !px-6 !lg:px-[60px] !py-12'>
          <SectionTitle
            title={
              <>
                A complete revenue-ready system.
                <br className='hidden sm:block' />
                Not just an E-commerce Website
              </>
            }
            copy='We built a proprietary launch framework over 20 years. Every element is engineered to convert — from the first impression to the final checkout.'
          />
          <div className='mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4.5'>
            {systemCards.map((item, index) => (
              <article
                key={item.title}
                className='border-b border-[#6666664D] p-8 lg:border-r [&:nth-child(3n)]:lg:border-r-0'
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={28}
                  height={28}
                />
                <h3 className='mt-6 font-heading text-xl leading-normal text-black'>
                  {item.title}
                </h3>
                <p className='mt-5 text-sm leading-6 text-[#666]'>
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id='five-steps' className='bg-[#f7f7f7]'>
        <Container className='!max-w-[1440px] !px-6 !lg:px-[60px] !py-12'>
          <div className='grid gap-8 lg:grid-cols-[533px_476px] lg:justify-between'>
            <h2 className='font-heading text-[34px] leading-[46px] text-black md:text-[36px] md:leading-[48px]'>
              Five steps.
              <br />
              One launch-ready business.
            </h2>
            <p className='max-w-[476px] text-sm leading-6 text-[#333]'>
              Every engagement follows our proprietary D2C Launch Methodology —
              refined across 20 years of launches, failures, pivots, and wins.
              We don't improvise. We execute a proven system.
            </p>
          </div>
          <div className='relative mt-24 lg:mt-[130px]'>
            <div className='absolute left-[8%] right-[8%] top-[29px] hidden h-px bg-[#6ABD45] lg:block' />
            <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-5'>
              {launchSteps.map(([number, title, copy], index) => (
                <article key={number} className='relative text-center'>
                  <div
                    className={`relative z-10 mx-auto flex size-[59px] items-center justify-center rounded-full border font-heading text-xl leading-8 ${index === 2
                      ? "border-black bg-black text-white"
                      : "border-[#0000001A] bg-white text-black"
                      }`}
                  >
                    {number}
                  </div>
                  <h3 className='mt-5 text-xl font-bold leading-8 text-black'>
                    {title}
                  </h3>
                  <p className='mx-auto mt-3 max-w-[173px] text-base leading-[30px] text-[#333333]'>
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className='bg-white'>
        <Container className='!max-w-[1440px] !px-6 !lg:px-[60px] !py-12'>
          <h2 className='text-center font-heading text-[34px] leading-[46px] text-black md:text-[36px] md:leading-[48px]'>
            Who Is This For
          </h2>
          <div className='mt-10 grid gap-5 lg:grid-cols-2'>
            {audienceCards.map((card) => (
              <article
                key={card.eyebrow}
                className='rounded-lg border border-black/20 px-8 py-10 sm:px-[43px]'
                style={{ backgroundColor: card.bg }}
              >
                <div className='flex items-center gap-4'>
                  <Image
                    src={card.icon}
                    alt={card.eyebrow}
                    width={28}
                    height={28}
                  />
                  <h3 className='text-xl font-medium leading-8 text-black'>
                    {card.eyebrow}
                  </h3>
                </div>
                <p className='mt-7 font-heading text-[24px] leading-9 text-black whitespace-pre-line'>
                  {card.title}
                </p>
                <ul className='mt-10 space-y-[22px]'>
                  {card.items.map((item) => (
                    <li
                      key={item}
                      className='flex gap-5 text-sm capitalize leading-6 text-[#333]'
                    >
                      <span className='mt-[7px] size-2.5 shrink-0 rounded-full bg-[#6ABD45]' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className='bg-black'>
        <Container className='!max-w-[1440px] !px-6 !lg:px-[60px] !py-12'>
          <h2 className='font-heading text-[34px] capitalize leading-[46px] text-white md:text-[36px] md:leading-[48px]'>
            What happens when
            <br />
            strategy meets execution.
          </h2>
          <p className='mt-5 text-base capitalize leading-[30px] text-white/80'>
            Numbers from real brands. Not marketing. Not estimates.
          </p>
          <div className='mt-14 grid gap-0 lg:grid-cols-3'>
            {executionStats.map(([value, label, copy, source], index) => (
              <article
                key={value}
                className={`py-8 lg:px-8 ${index > 0 ? "border-t border-white/20 lg:border-l lg:border-t-0" : ""}`}
              >
                <p className='font-heading text-[48px] capitalize leading-[60px] text-[#6ABD45]'>
                  {value}
                </p>
                <h3 className='mt-3 text-base capitalize leading-[30px] text-white'>
                  {label}
                </h3>
                <p className='mt-5 text-sm capitalize leading-6 text-white/80'>
                  {copy}
                </p>
                <p className='mt-10 text-base font-medium uppercase leading-[30px] text-white/80'>
                  {source}
                </p>
              </article>
            ))}
          </div>
          <p className='mt-3 text-center text-sm leading-6 text-white/80'>
            * Verified client results, available on request
          </p>
        </Container>
      </section>

      <section className='bg-white'>
        <Container className='!max-w-[1440px] !px-6 !lg:px-[60px] !py-12'>
          <div className='grid gap-10 lg:grid-cols-[427px_1fr]'>
            <div>
              <h2 className='font-heading text-[34px] capitalize leading-[46px] text-black md:text-[36px] md:leading-[48px]'>
                We&apos;ve seen every mistake in the playbook.
              </h2>
              <p className='mt-8 max-w-[427px] text-sm capitalize leading-[26px] text-[#333]'>
                Twenty years of building, launching, and scaling digital
                commerce businesses — across categories, budgets, and markets.
                We're not guessing. We're drawing from hard-won experience.
              </p>
            </div>
            <div className='grid gap-x-8 gap-y-5 md:grid-cols-2'>
              {mistakes.map(([title, copy]) => (
                <article
                  key={title}
                  className='border-l border-black/20 py-4 pl-6'
                >
                  <h3 className='text-xl font-medium capitalize leading-8 text-black'>
                    {title}
                  </h3>
                  <p className='mt-4 max-w-[378px] text-sm capitalize leading-6 text-[#333]'>
                    {copy}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className='bg-white'>
        <Container className='!max-w-[1440px] !px-6 !lg:px-[60px] !py-12'>
          <div className='grid gap-8 lg:grid-cols-[316px_378px] lg:justify-between'>
            <h2 className='font-heading text-[34px] capitalize leading-[46px] text-black md:text-[36px] md:leading-[48px]'>
              Brands we&apos;ve
              <br />
              built to sell.
            </h2>
            <p className='max-w-[378px] text-sm capitalize leading-6 text-[#333]'>
              Not a gallery of pretty websites. Each of these represents a
              revenue problem we solved — with strategy, design, and a launch
              system that performed from Day 1.
            </p>
          </div>
          <div className='mt-9 flex flex-wrap gap-x-10 gap-y-4 border-b border-black/20 pb-[18px] text-base font-medium uppercase leading-[30px] text-black md:gap-x-[70px]'>
            {[
              "All Work",
              "Celebrity Work",
              "Funded Startups",
              "Corporates",
              "Manufactures",
            ].map((tab, index) => (
              <span
                key={tab}
                className={
                  index === 0
                    ? "border-b border-black pb-[18px] -mb-[19px]"
                    : ""
                }
              >
                {tab}
              </span>
            ))}
          </div>

          <div className='mt-20 grid gap-x-5 gap-y-12 lg:grid-cols-3'>
            {portfolio.map((item) => (
              <article
                key={item.name}
                className={item.featured === "wide" ? "lg:col-span-2" : ""}
              >
                <div className='relative h-[300px] overflow-hidden bg-[#f0f6ed] sm:h-[332px]'>
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes={
                      item.featured === "wide"
                        ? "(min-width: 1024px) 62vw, 100vw"
                        : "(min-width: 1024px) 31vw, 100vw"
                    }
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-black/25' />
                  <h3 className='absolute inset-x-6 top-1/2 -translate-y-1/2 text-center font-heading text-[42px] leading-[54px] text-white'>
                    {item.name}
                  </h3>
                  {item.challenge ? (
                    <div className='absolute bottom-5 left-5 right-5 text-white'>
                      <p className='text-sm font-medium leading-6 text-[#6ABD45]'>
                        The challenge
                      </p>
                      <p className='text-base font-medium leading-[30px]'>
                        {item.challenge}
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className='mt-5'>
                  <p className='text-sm font-medium leading-6 text-[#6ABD45]'>
                    {item.category}
                  </p>
                  <p className='mt-3 text-base leading-[30px] text-black'>
                    {item.brand}
                  </p>
                  <p className='mt-1 text-sm leading-6 text-[#333]'>
                    {item.packageName}
                  </p>
                  <span className='mt-5 inline-flex bg-[#f0f6ed] px-3 py-1.5 text-sm leading-6 text-black'>
                    {item.metric}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className='mt-10 text-center'>
            <Button
              href='/portfolio'
              variant='primary'
              size='md'
              className='h-[42px] px-8 font-semibold'
            >
              View Full Portfolio
            </Button>
            <p className='mt-5 text-sm leading-6 text-[#333]'>
              We take 4-6 new clients per month
            </p>
          </div>
        </Container>
      </section>

      <section className='bg-black'>
        <Container className='!max-w-[1120px] !px-6 !lg:px-[60px] !py-12'>
          <h2 className='text-center font-heading text-[40px] leading-[52px] text-white md:text-[48px] md:leading-[60px]'>
            Our Promise
          </h2>
          <div className='mt-10 grid gap-6 md:grid-cols-3'>
            {promises.map((item, index) => (
              <article key={item.title} className='bg-white p-6'>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={28}
                  height={28}
                />
                <h3 className='mt-5 text-xl font-medium capitalize leading-[30px] text-[#0d0d0d]'>
                  {item.title}
                </h3>
                <p className='mt-3 text-base capitalize leading-6 text-[#333]'>
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FAQAccordion
        className='bg-[#F7F7F7]'
        title='The questions serious founders ask before they sign.'
        description={`Real answers. No marketing copy. If you don't find what you need here, book a call and ask us directly.`}
        faqs={faqs}
      />

      <section className='bg-white'>
        <Container className='!max-w-[960px] !px-6 !lg:px-[60px] !py-12'>
          <blockquote className='font-heading text-[28px] leading-[44px] text-black'>
            &quot;We spoke to four agencies before Five Online. They were the
            only ones who asked about our margin structure before talking about
            design. That told us everything we needed to know.&quot;
          </blockquote>
          <p className='mt-10 text-xl font-medium leading-[30px] text-[#333]'>
            - Founder, Premium Wellness Brand - D2C Growth Engine Client
          </p>
        </Container>
      </section>

      <TrustedPartnersSection />

      <section className='bg-white'>
        <Container className='!max-w-[720px] text-center !px-6 !lg:px-[60px] !py-12'>
          <h2 className='font-heading text-[40px] leading-[52px] text-black md:text-[48px] md:leading-[60px]'>
            Your D2C brand
            <br />
            deserves to sell.
          </h2>
          <p className='mt-8 text-base leading-[30px] text-[#333]'>
            Book a 30-minute strategy call. No pitch decks, no templates. Just a
            direct conversation about your brand, your goals, and whether
            we&apos;re the right fit.
          </p>
          <Button
            href='/contact'
            variant='primary'
            size='md'
            className='mt-[36px]'
          >
            Book A Strategy Call
          </Button>
          <p className='mt-8 text-sm leading-7 text-[#333]'>
            We take 4-6 new clients per quarter. Availability is limited by
            design.
          </p>
        </Container>
      </section>
    </main>
  );
}
