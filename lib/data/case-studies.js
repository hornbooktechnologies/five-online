/**
 * Case Studies data — hardcoded content source.
 * Each entry maps to /case-studies/[slug]
 */

export const caseStudies = [
  {
    slug: "garware-hi-tech",
    client: "Garware Hi-Tech",
    tagline: "Digital Platform Transformation for Enterprise Growth",
    category: "Enterprise & B2B",
    industry: "Manufacturing",
    thumbnail: "/images/case-studies/garware-thumb.jpg",
    heroImage: "/images/case-studies/garware-hero.jpg",
    challenge:
      "Garware Hi-Tech Films had an outdated digital presence that didn't reflect their enterprise scale, product depth, or global reach. The website was losing potential leads and failing to support their sales team.",
    solution:
      "We redesigned the entire digital platform from the ground up — restructuring the information architecture, building a performance-first frontend, and creating a conversion-oriented UX aligned to their buyer journey.",
    results: "The revamped platform significantly improved engagement across key product pages and drove measurable improvements in enquiry volume.",
    stats: [
      { value: "+38%", label: "Product Page Engagement", positive: true },
      { value: "+22%", label: "Enquiry Interaction", positive: true },
    ],
    services: ["Corporate Website Revamp", "UX Strategy", "Conversion Optimisation"],
    year: "2024",
    featured: true,
  },
  {
    slug: "budget-store",
    client: "Budget Store",
    tagline: "Conversion-First Ecommerce Launch",
    category: "D2C Ecommerce",
    industry: "Retail",
    thumbnail: "/images/case-studies/budget-store-thumb.jpg",
    heroImage: "/images/case-studies/budget-store-hero.jpg",
    challenge:
      "Budget Store needed a high-converting D2C ecommerce store that could drive sales from day one. The brand needed trust signals, fast page speeds, and a frictionless purchase funnel.",
    solution:
      "We built a Shopify-based store with a custom conversion-focused theme, optimised product pages, trust indicators, and mobile-first checkout experience.",
    results:
      "The launch achieved strong engagement numbers from the first week, with significant improvements in product page engagement and checkout interaction.",
    stats: [
      { value: "+45%", label: "Product Page Engagement", positive: true },
      { value: "+30%", label: "Checkout Interaction", positive: true },
    ],
    services: ["D2C Ecommerce Launch", "Shopify Development", "CRO"],
    year: "2024",
    featured: true,
  },
  {
    slug: "zeal-aqua",
    client: "Zeal Aqua",
    tagline: "Brand-Forward Corporate Website for Market Credibility",
    category: "Corporate",
    industry: "FMCG",
    thumbnail: "/images/case-studies/zeal-aqua-thumb.jpg",
    heroImage: "/images/case-studies/zeal-aqua-hero.jpg",
    challenge:
      "Zeal Aqua needed a digital presence that matched the premium quality of their product and opened doors to institutional and retail partnerships.",
    solution:
      "We built a brand-forward corporate website with rich product showcases, distributor-focused sections, and a design language that conveyed quality and trustworthiness.",
    results: "The new site positioned Zeal Aqua as a credible player in their market segment.",
    stats: [
      { value: "+55%", label: "Time on Site", positive: true },
      { value: "+18%", label: "Distributor Enquiries", positive: true },
    ],
    services: ["Corporate Website Design", "Brand Strategy", "Content Architecture"],
    year: "2023",
    featured: false,
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((cs) => cs.slug === slug) ?? null;
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((cs) => cs.featured);
}
