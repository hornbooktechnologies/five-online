import { CheckIcon, XCircleIcon } from "@/app/components/icons";
/**
 * About Us page content — team, philosophy, industries, differentiators.
 */

export const philosophyCards = [
  {
    icon: "brain",
    title: "UX is mapped to buyer psychology",
  },
  {
    icon: "target",
    title: "Design reinforces brand positioning",
  },
  {
    icon: "layers",
    title: "Engineering supports scalability",
  },
  {
    icon: "bar-chart",
    title: "Analytics validates every decision",
  },
];

export const differentiatorPoints = [
  {
    title: "Most agencies focus on aesthetics.",
    icon: <XCircleIcon />
  },
  {
    title: "We focus on outcomes.",
    icon: <CheckIcon />
  },

];

export const teamCapabilities = [
  {
    icon: "strategy",
    title: "Strategy & CRO",
    description: "Growth-first thinking before a single pixel is placed.",
    color: "amber",
  },
  {
    icon: "code",
    title: "MERN & Shopify Engineering",
    description: "Full-stack development built for performance at scale.",
    color: "blue",
  },
  {
    icon: "analytics",
    title: "Performance & Analytics",
    description: "Measurement frameworks that inform every design decision.",
    color: "green",
  },
  {
    icon: "ai",
    title: "Automation & AI Systems",
    description: "Leveraging AI to keep your digital presence ahead of the curve.",
    color: "purple",
  },
];

export const industries = [
  {
    label: "eCommerce & D2C",
    image: "/images/industries/ecommerce.jpg",
  },
  {
    label: "Enterprise & B2B",
    image: "/images/industries/enterprise.jpg",
  },
  {
    label: "Real Estate",
    image: "/images/industries/real-estate.jpg",
  },
  {
    label: "Retail",
    image: "/images/industries/retail.jpg",
  },
  {
    label: "Lifestyle",
    image: "/images/industries/lifestyle.jpg",
  },
];

export const ceoData = {
  name: "Nayan Khandor",
  role: "CEO & Growth Strategist",
  bio: "Five Online is led by Nayan Khandor, CEO and Growth Strategist. He believes Web design should sit inside the revenue engine, not outside it.",
  image: "/images/team/nayan.jpg",
  social: {
    instagram: "https://www.instagram.com/fiveonline.in/",
    linkedin: "https://www.linkedin.com/company/71971288/",
    whatsapp: "https://wa.me/919930265505",
  },
};

export const trustStats = {
  projects: "320+",
  industries: "25+",
  years: "20+",
};
