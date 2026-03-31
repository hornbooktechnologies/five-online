/**
 * Navigation structure — single source of truth for Header.
 */

export const navLinks = [
  {
    label: "Capabilities",
    href: "/capabilities",
    submenu: [
      { label: "New Business Website Launch", href: "/capabilities/new-business-launch" },
      { label: "Corporate Website Revamp", href: "/capabilities/corporate-revamp" },
      { label: "D2C Ecommerce Launch", href: "/capabilities/d2c-ecommerce" },
      { label: "Conversion & CRO Audit", href: "/capabilities/cro-audit" },
      { label: "Website Maintenance & Performance", href: "/capabilities/maintenance" },
      { label: "Get Found in AI Search", href: "/capabilities/ai-search" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    submenu: [
      {
        label: "B2B",
        href: "/industries/b2b",
        children: [
          { label: "Corporate", href: "/industries/corporate" },
          { label: "Real Estate", href: "/industries/real-estate" },
        ],
      },
      {
        label: "eCommerce",
        href: "/industries/ecommerce",
        children: [
          { label: "Fashion", href: "/industries/fashion" },
        ],
      },
    ],
  },
  {
    label: "Impact",
    href: "/case-studies",
    submenu: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Portfolio", href: "/portfolio" },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    submenu: [
      { label: "Blogs", href: "/insights" },
    ],
  },
  {
    label: "About",
    href: "/about",
    submenu: [
      { label: "About Us", href: "/about" },
      { label: "Career", href: "/career" },
    ],
  },
];

export const footerServiceLinks = [
  { label: "Web Design Company in Mumbai", href: "#" },
  { label: "Ecommerce Website Development", href: "#" },
  { label: "Shopify Developers in India", href: "#" },
  { label: "Corporate Website Design", href: "#" },
  { label: "Website Redesign Services", href: "#" },
];
