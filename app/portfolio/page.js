import ListingScene from "../components/figma/ListingScene";

export const metadata = {
  title: "Portfolio",
  description:
    "Real projects. Real business impact. A selection of brands we've helped launch, scale, and transform online.",
};

const projects = [
  {
    key: "card-1",
    image: "/figma/portfolio/card-1.jpg",
    title: "Neeta Lulla",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify", "Maintenance"],
    href: "https://neetalulla.com/",
  },
  {
    key: "card-2",
    image: "/figma/portfolio/card-2.jpg",
    title: "Wonderchef",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Home Appliances", "Shopify", "UI/UX"],
    href: "https://www.wonderchef.com/",
  },
  {
    key: "card-3",
    image: "/figma/portfolio/card-3.jpg",
    title: "Just In Time",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Lifestyle", "Shopify"],
    href: "https://justintime.in/",
  },
  {
    key: "card-4",
    image: "/figma/portfolio/card-1.jpg",
    title: "Flashmob Nation",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify"],
    href: "https://flashmobnation.com",
  },
  {
    key: "card-5",
    image: "/figma/portfolio/card-2.jpg",
    title: "G3 Fashion",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Custom Build"],
    href: "https://g3fashion.com/",
  },
  {
    key: "card-6",
    image: "/figma/portfolio/card-3.jpg",
    title: "BugetStore",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Lifestyle", "Shopify", "CRO"],
    href: "https://bugetstore.in",
  },
  {
    key: "card-7",
    image: "/figma/portfolio/card-1.jpg",
    title: "Journey East",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify"],
    href: "https://journeyeast.in",
  },
  {
    key: "card-8",
    image: "/figma/portfolio/card-2.jpg",
    title: "Linen and Linens",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify", "Maintenance"],
    href: "https://www.linenandlinens.com",
  },
  {
    key: "card-9",
    image: "/figma/portfolio/card-3.jpg",
    title: "Suvidha Fashion",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify", "Maintenance"],
    href: "https://suvidhafashion.com",
  },
  {
    key: "card-10",
    image: "/figma/portfolio/card-1.jpg",
    title: "Nareeka",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify"],
    href: "https://nareeka.shop",
  },
  {
    key: "card-11",
    image: "/figma/portfolio/card-2.jpg",
    title: "Label Aishwaryrika",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify", "Maintenance"],
    href: "https://shoplabelaishwaryrika.com",
  },
  {
    key: "card-12",
    image: "/figma/portfolio/card-3.jpg",
    title: "Anora World",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify", "B2B"],
    href: "https://anoraworld.com",
  },
  {
    key: "card-13",
    image: "/figma/portfolio/card-1.jpg",
    title: "Heritage Haat",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify", "CRO"],
    href: "https://heritagehaat.com",
  },
  {
    key: "card-14",
    image: "/figma/portfolio/card-2.jpg",
    title: "Bennevis Fashion",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Custom Build"],
    href: "https://www.bennevisfashion.com",
  },
  {
    key: "card-15",
    image: "/figma/portfolio/card-3.jpg",
    title: "House of Sagar",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Custom Build"],
    href: "https://houseofsagar.com",
  },
  {
    key: "card-16",
    image: "/figma/portfolio/card-1.jpg",
    title: "Sar Jewels",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Jewellery", "Shopify"],
    href: "https://sarjewels.in",
  },
  {
    key: "card-17",
    image: "/figma/portfolio/card-2.jpg",
    title: "Hairfinity",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Hair Care", "Shopify"],
    href: "https://www.hairfinity.com/",
  },
  {
    key: "card-18",
    image: "/figma/portfolio/card-3.jpg",
    title: "Jamna Herbal",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Pharma", "Ayurved", "Shopify", "CRO"],
    href: "https://jamnaherbal.com",
  },
  {
    key: "card-19",
    image: "/figma/portfolio/card-1.jpg",
    title: "Sacred and Organic",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Skin Care", "Shopify"],
    href: "https://sacredandorganic.com",
  },
  {
    key: "card-20",
    image: "/figma/portfolio/card-2.jpg",
    title: "Finerock",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Jewellery", "Shopify"],
    href: "https://finerock.com",
  },
  {
    key: "card-21",
    image: "/figma/portfolio/card-3.jpg",
    title: "Marvi India",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Jewellery", "Shopify"],
    href: "https://marviindia.com",
  },
  {
    key: "card-22",
    image: "/figma/portfolio/card-1.jpg",
    title: "Sagar Hill Road",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Fashion", "Shopify", "CRO"],
    href: "https://sagarhillroad.com",
  },
  {
    key: "card-23",
    image: "/figma/portfolio/card-2.jpg",
    title: "Muvtech",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Mobile", "Shopify", "CRO"],
    href: "https://muvtech.in",
  },
  {
    key: "card-24",
    image: "/figma/portfolio/card-3.jpg",
    title: "Sollfege ",
    text: "A selection of brands we've helped launch, scale, and transform online.",
    tags: ["Mobile", "Shopify", "CRO"],
    href: "https://sollfege.com",
  },
];

export default function PortfolioPage() {
  return (
    <ListingScene
      assetBasePath="/figma/portfolio"
      title={`Real Projects. <br /> Real Business Impact.`}
      titleWidth={1030}
      subtitle="A selection of brands we’ve helped launch, scale, and transform online."
      filterGroups={[
        {
          title: "Industry",
          items: ["All", "Fashion", "Home Appliances", "Lifestyle", "Jewellery", "Hair Care", "Pharma", "Skin care"],
        },
        {
          title: "Revenue Goal",
          items: ["All", "Launch", "Revenue Recovery", "Conversion Boost", "Scale Operations", "Market Expansion"],
        },
        {
          title: "Capability",
          items: ["All", "D2C", "Shopify", "MERN", "CRO", "AI Optimisation"],
        },
        {
          title: "Business Problem",
          items: ["All", "Low ROAS", "High Bounce Rate", "Poor Checkout Conversion", "Complex Tech Stack", "Rebranding"],
        },
      ]}
      bottomHeadingWidth={854}
      projects={projects}
    />
  );
}
