"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from '@/app/components/common/Button';
import { ArrowRightIcon } from "../icons";

const CARD_BODY =
  "A selection of brands we've helped launch, scale, and transform online.";

const sceneCards = {
  "/figma/case-studies": [
    {
      key: "card-1",
      image: "card-1.jpg",
      title: "Garware Hi-Tech Films",
      text: CARD_BODY,
      tags: ["Enterprise", "Transformation", "Growth"],
      accent: true,
    },
    {
      key: "card-2",
      image: "card-2.jpg",
      title: "Budget Store",
      text: CARD_BODY,
      tags: ["D2C", "Shopify"],
    },
    {
      key: "card-3",
      image: "card-3.jpg",
      title: "Zeal Aqua",
      text: CARD_BODY,
      tags: ["Corporate", "Brand"],
    },
    {
      key: "card-4",
      image: "card-2.jpg",
      title: "Budget Store",
      text: CARD_BODY,
      tags: ["Retail", "CRO"],
    },
    {
      key: "card-5",
      image: "card-3.jpg",
      title: "Zeal Aqua",
      text: CARD_BODY,
      tags: ["FMCG", "Experience"],
    },
  ],
  "/figma/portfolio": [
    {
      key: "card-1",
      image: "card-1.jpg",
      title: "L&T Realty",
      text: CARD_BODY,
      tags: ["Real Estate", "Luxury"],
      accent: true,
    },
    {
      key: "card-2",
      image: "card-2.jpg",
      title: "Budget Store",
      text: CARD_BODY,
      tags: ["D2C", "Shopify"],
    },
    {
      key: "card-3",
      image: "card-3.jpg",
      title: "Zeal Aqua",
      text: CARD_BODY,
      tags: ["FMCG", "Brand"],
    },
    {
      key: "card-4",
      image: "card-2.jpg",
      title: "Fashion Lifestyle Brand",
      text: CARD_BODY,
      tags: ["Lifestyle", "Launch"],
    },
    {
      key: "card-5",
      image: "card-3.jpg",
      title: "Enterprise SaaS Platform",
      text: CARD_BODY,
      tags: ["B2B", "Platform"],
    },
  ],
};

function getCards(assetBasePath, cardLinks) {
  const cards = sceneCards[assetBasePath] ?? sceneCards["/figma/portfolio"];

  return cards.map((card, index) => ({
    ...card,
    image: `${assetBasePath}/${card.image}`,
    href: cardLinks[index],
  }));
}

function FilterColumn({ title, items }) {
  return (
    <section className='border-t border-[#707070] pt-6'>
      <h2 className=' text-[18px] font-semibold uppercase tracking-[0.04em] text-black'>
        {title}
      </h2>
      <div className='mt-5 space-y-2'>
        {items.map((item) => (
          <p key={item} className=' text-[16px] leading-8 text-black'>
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

function Tag({ label, accent = false }) {
  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1  text-[14px] leading-none text-black ${accent ? "bg-[#c1ffa6]" : "bg-[#98eb72]"
        }`}
    >
      {label}
    </span>
  );
}

function CardArrow() {
  return (
    <span className='flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#f2f2f2]'>
      <Image
        src='/figma/about/icon-arrow-dark.svg'
        alt=''
        width={18}
        height={18}
      />
    </span>
  );
}

function FilterIcon() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className='shrink-0'
    >
      <path
        d='M5 6H19L13 13V19L11 18V13L5 6Z'
        stroke='black'
        strokeWidth='1.6'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function MobileChevron({ open = false }) {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
    >
      <path
        d='M4.5 6.75L9 11.25L13.5 6.75'
        stroke='black'
        strokeWidth='1.6'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

function MobileCard({ card }) {
  const Wrapper = card.href ? Link : "article";
  const wrapperProps = card.href
    ? {
      href: card.href,
      "aria-label": `Open ${card.title}`,
    }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={`mx-auto block max-w-[368px] ${card.href ? "cursor-pointer" : ""
        }`}
    >
      <div className='relative aspect-[368/553] overflow-hidden bg-[#edf6e8]'>
        <Image
          src={card.image}
          alt={card.title}
          fill
          className='object-cover'
          sizes='(min-width: 768px) 368px, calc(100vw - 40px)'
        />
      </div>
      <div className='min-h-[109px] bg-white px-3.5 py-[14px]'>
        <h2 className=' text-[20px] leading-none text-black'>
          {card.title}
        </h2>
        <p className='mt-[9px] max-w-[324px]  text-[15px] leading-[20px] text-black'>
          {card.text}
        </p>
      </div>
    </Wrapper>
  );
}

function MobileFilterSheet({
  open,
  onClose,
  filterGroups,
  selectedFilters,
  onSelect,
}) {
  if (!open) return null;

  return (
    <>
      <button
        type='button'
        aria-label='Close filters'
        className='fixed inset-0 z-40 bg-black/20 lg:hidden'
        onClick={onClose}
      />
      <div className='fixed inset-x-0 bottom-[50px] z-50 max-h-[70vh] overflow-y-auto border-t border-black bg-white px-5 py-6 shadow-[0_-16px_40px_rgba(0,0,0,0.08)] lg:hidden'>
        <div className='mx-auto max-w-[400px]'>
          <div className='mb-6 flex items-center justify-between'>
            <h2 className=' text-[20px] leading-none text-black'>
              Filter
            </h2>
            <button
              type='button'
              onClick={onClose}
              className=' text-[14px] uppercase tracking-[0.08em] text-black'
            >
              Close
            </button>
          </div>

          <div className='space-y-8'>
            {filterGroups.map((group) => (
              <section
                key={group.title}
                className='border-t border-[#707070] pt-4'
              >
                <h3 className=' text-[16px] font-semibold uppercase tracking-[0.04em] text-black'>
                  {group.title}
                </h3>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {group.items.map((item) => {
                    const active = selectedFilters[group.title] === item;

                    return (
                      <button
                        key={item}
                        type='button'
                        onClick={() => onSelect(group.title, item)}
                        className={`rounded-full border px-4 py-2  text-[14px] leading-none transition-colors ${active
                          ? "border-black bg-black text-white"
                          : "border-[#dcdcdc] bg-white text-black"
                          }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function ListingScene({
  assetBasePath,
  title,
  subtitle,
  filterGroups,
  stickyLabel,
  cardLinks = [],
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const cards = getCards(assetBasePath, cardLinks);
  const mobileStickyLabel = stickyLabel ?? "Want results like these?";
  const [selectedFilters, setSelectedFilters] = useState(() =>
    Object.fromEntries(
      filterGroups.map((group) => [group.title, group.items[0] ?? ""]),
    ),
  );

  useEffect(() => {
    if (!mobileFiltersOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileFiltersOpen]);

  const updateSelectedFilter = (groupTitle, item) => {
    setSelectedFilters((current) => ({
      ...current,
      [groupTitle]: item,
    }));
  };

  return (
    <main className='bg-[#f9fff6] text-black lg:pb-0'>
      <section className='mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-12 mb-12'>
        <div className='mx-auto text-center'>
          <h1 className='mx-auto max-w-[405px] whitespace-pre-line text-[43px] leading-[1.15] text-black sm:max-w-[520px] sm:text-[56px] lg:max-w-none lg:text-[96px] lg:leading-[100px]'
            dangerouslySetInnerHTML={{ __html: title?.replace(/\n/g, '<br />') }}
          />
          <p className='mx-auto mt-7 max-w-[342px]  text-[18px] leading-[26px] text-black sm:max-w-[560px] lg:mt-8 lg:max-w-[700px] lg:leading-[28px]'>
            {subtitle}
          </p>
        </div>
      </section>

      <section className='px-5 pb-12 lg:hidden'>
        <div className='space-y-[39px]'>
          {cards.map((card) => (
            <MobileCard key={card.key} card={card} />
          ))}
        </div>
      </section>

      <section className='hidden lg:block'>
        <div className='mx-auto w-full max-w-[1440px] px-6 pb-12 sm:px-8 lg:px-[60px]'>
          <div className='grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] xl:grid-cols-[250px_minmax(0,1fr)]'>
            <aside className='space-y-10 lg:sticky lg:top-[108px] lg:self-start'>
              {filterGroups.map((group) => (
                <FilterColumn
                  key={group.title}
                  title={group.title}
                  items={group.items}
                />
              ))}

              {/* {stickyLabel ? (
                <div className='rounded-[20px] border border-black bg-white p-6'>
                  <p className=' text-[20px] leading-[30px] text-black'>
                    {stickyLabel}
                  </p>
                  <Link
                    href='/contact'
                    className='mt-5 inline-flex items-center justify-center rounded-full bg-black px-5 py-3  text-[16px] text-white'
                  >
                    Book a Strategy Call
                  </Link>
                </div>
              ) : null} */}
            </aside>

            <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
              {cards.map((card) => {
                const Wrapper = card.href ? Link : "article";
                const wrapperProps = card.href
                  ? {
                    href: card.href,
                    "aria-label": `Open ${card.title}`,
                  }
                  : {};

                return (
                  <Wrapper
                    key={card.key}
                    {...wrapperProps}
                    className={`group flex h-full flex-col overflow-hidden border border-[#ececec] bg-white transition-transform duration-200 ${card.href ? "hover:-translate-y-1" : ""
                      }`}
                  >
                    <div className='relative aspect-[368/553] overflow-hidden bg-[#edf6e8]'>
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className='object-cover transition-transform duration-300 group-hover:scale-[1.015]'
                        sizes='(min-width: 1280px) 32vw, (min-width: 768px) 50vw, 100vw'
                      />
                    </div>

                    <div className='flex flex-1 flex-col gap-4 px-6 py-6'>
                      <div className='flex items-start justify-between gap-4'>
                        <h2 className=' text-[22px] leading-[30px] text-black'>
                          {card.title}
                        </h2>
                        {card.href ? <CardArrow /> : null}
                      </div>

                      <p className=' text-[15px] leading-[24px] text-black'>
                        {card.text}
                      </p>

                      <div className='mt-auto flex flex-wrap gap-2 pt-2'>
                        {card.tags.map((tag, index) => (
                          <Tag
                            key={`${card.key}-${tag}`}
                            label={tag}
                            accent={card.accent && index === 0}
                          />
                        ))}
                      </div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className='relative isolate hidden overflow-hidden bg-black text-white lg:block my-12'>
        <Image
          src={`${assetBasePath}/cta-bg.png`}
          alt=''
          fill
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-black/60' />
        <div className='relative mx-auto w-full max-w-[1440px] px-6 py-16 sm:px-8 lg:px-[60px] lg:py-20'>
          <h2 className='text-[36px] font-bold leading-[1.2] text-white sm:text-[42px] lg:text-[48px] lg:leading-[64px]'>
            Launching D2C Is a Revenue Decision.
            <br />
            Not a Design Project.
          </h2>
          <div className='flex justify-between items-center gap-10 mt-8'>
            <p className='text-[20px] leading-[32px] text-[#cacaca]'>
              If you&apos;re serious about building a scalable ecommerce brand,
              start with structure.
            </p>
            <div>
              <Button href="/contact#contact-form-panel" variant="outline" size="md">
                Book Your D2C Launch Strategy Call
                <ArrowRightIcon />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className='fixed inset-x-0 bottom-0 z-30 border-t border-[#d7d7d7] bg-white lg:hidden'>
        <div className='mx-auto grid h-[50px] w-full max-w-[440px] grid-cols-[200px_1px_minmax(0,1fr)] items-center'>
          <button
            type='button'
            onClick={() => setMobileFiltersOpen((current) => !current)}
            className='flex h-full items-center gap-2 pl-[19px] pr-4 text-left'
          >
            <FilterIcon />
            <span className=' text-[18px] leading-none text-black'>
              Filter
            </span>
            <span className='ml-auto'>
              <MobileChevron open={mobileFiltersOpen} />
            </span>
          </button>

          <div className='mx-auto h-[36px] w-px bg-[#bcbcbc]' />

          <Link
            href='/contact'
            className='block truncate px-4  text-[14px] leading-none text-black'
          >
            {mobileStickyLabel}
          </Link>
        </div>
      </div>

      <MobileFilterSheet
        open={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        filterGroups={filterGroups}
        selectedFilters={selectedFilters}
        onSelect={updateSelectedFilter}
      />
    </main>
  );
}
