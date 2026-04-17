import ListingScene from "../components/figma/ListingScene";

export const metadata = {
  title: "Portfolio",
  description:
    "Real projects. Real business impact. A selection of brands we've helped launch, scale, and transform online.",
};

const projects = [
  {
    key: "card-1",
    image: "/figma/portfolio/project-cover-image/Neeta-Lulla.jpg",
    title: "Neeta Lulla",
    tags: ["Fashion", "Shopify", "Maintenance"],
    href: "https://neetalulla.com/",
  },
  {
    key: "card-2",
    image: "/figma/portfolio/project-cover-image/Wonderchef.jpg",
    title: "Wonderchef",
    tags: ["Home Appliances", "Shopify", "UI/UX"],
    href: "https://www.wonderchef.com/",
  },
  {
    key: "card-3",
    image: "/figma/portfolio/project-cover-image/Just-In-Time.jpg",
    title: "Just In Time",
    tags: ["Lifestyle", "Shopify"],
    href: "https://justintime.in/",
  },
  {
    key: "card-4",
    image: "/figma/portfolio/project-cover-image/Flash-Mob-Nation.jpg",
    title: "Flashmob Nation",
    tags: ["Fashion", "Shopify"],
    href: "https://flashmobnation.com",
  },
  {
    key: "card-5",
    image: "/figma/portfolio/project-cover-image/G3-Fashion.jpg",
    title: "G3 Fashion",
    tags: ["Fashion", "Custom Build"],
    href: "https://g3fashion.com/",
  },
  {
    key: "card-6",
    image: "/figma/portfolio/project-cover-image/Buget-Store.jpg",
    title: "BugetStore",
    tags: ["Lifestyle", "Shopify", "CRO"],
    href: "https://bugetstore.in",
  },
  {
    key: "card-7",
    image: "/figma/portfolio/project-cover-image/Journey-East.jpg",
    title: "Journey East",
    tags: ["Fashion", "Shopify"],
    href: "https://journeyeast.in",
  },
  {
    key: "card-8",
    image: "/figma/portfolio/project-cover-image/Linen-and-Linen-2.jpg",
    title: "Linen and Linens",
    tags: ["Fashion", "Shopify", "Maintenance"],
    href: "https://www.linenandlinens.com",
  },
  {
    key: "card-9",
    image: "/figma/portfolio/project-cover-image/Suvidha.jpg",
    title: "Suvidha Fashion",
    tags: ["Fashion", "Shopify", "Maintenance"],
    href: "https://suvidhafashion.com",
  },
  {
    key: "card-10",
    image: "/figma/portfolio/project-cover-image/Naarika.jpg",
    title: "Nareeka",
    tags: ["Fashion", "Shopify"],
    href: "https://nareeka.shop",
  },
  {
    key: "card-11",
    image: "/figma/portfolio/project-cover-image/Label-Aishwaryrika.jpg",
    title: "Label Aishwaryrika",
    tags: ["Fashion", "Shopify", "Maintenance"],
    href: "https://shoplabelaishwaryrika.com",
  },
  {
    key: "card-12",
    image: "/figma/portfolio/project-cover-image/Anora.jpg",
    title: "Anora World",
    tags: ["Fashion", "Shopify", "B2B"],
    href: "https://anoraworld.com",
  },
  {
    key: "card-13",
    image: "/figma/portfolio/project-cover-image/Heritage-Haat-2.jpg",
    title: "Heritage Haat",
    tags: ["Fashion", "Shopify", "CRO"],
    href: "https://heritagehaat.com",
  },
  {
    key: "card-14",
    image: "/figma/portfolio/project-cover-image/Bennevis.jpg",
    title: "Bennevis Fashion",
    tags: ["Fashion", "Custom Build"],
    href: "https://www.bennevisfashion.com",
  },
  {
    key: "card-15",
    image: "/figma/portfolio/project-cover-image/House-Of-Sagar.jpg",
    title: "House of Sagar",
    tags: ["Fashion", "Custom Build"],
    href: "https://houseofsagar.com",
  },
  {
    key: "card-16",
    image: "/figma/portfolio/project-cover-image/SAR-Jewels.jpg",
    title: "Sar Jewels",
    tags: ["Jewellery", "Shopify"],
    href: "https://sarjewels.in",
  },
  {
    key: "card-17",
    image: "/figma/portfolio/project-cover-image/Hair-Finity.jpg",
    title: "Hairfinity",
    tags: ["Hair Care", "Shopify"],
    href: "https://www.hairfinity.com/",
  },
  {
    key: "card-18",
    image: "/figma/portfolio/project-cover-image/Jamna.jpg",
    title: "Jamna Herbal",
    tags: ["Pharma", "Ayurved", "Shopify", "CRO"],
    href: "https://jamnaherbal.com",
  },
  {
    key: "card-19",
    image: "/figma/portfolio/project-cover-image/Sacred-and-Organic.jpg",
    title: "Sacred and Organic",
    tags: ["Skin Care", "Shopify"],
    href: "https://sacredandorganic.com",
  },
  {
    key: "card-20",
    image: "/figma/portfolio/project-cover-image/Finerock.jpg",
    title: "Finerock",
    tags: ["Jewellery", "Shopify"],
    href: "https://finerock.com",
  },
  {
    key: "card-21",
    image: "/figma/portfolio/project-cover-image/card-3.jpg",
    title: "Marvi India",
    tags: ["Jewellery", "Shopify"],
    href: "https://marviindia.com",
  },
  {
    key: "card-22",
    image: "/figma/portfolio/project-cover-image/Sagar-Hill-Road.jpg",
    title: "Sagar Hill Road",
    tags: ["Fashion", "Shopify", "CRO"],
    href: "https://sagarhillroad.com",
  },
  {
    key: "card-23",
    image: "/figma/portfolio/project-cover-image/MUV-Tech.jpg",
    title: "Muvtech",
    tags: ["Mobile", "Shopify", "CRO"],
    href: "https://muvtech.in",
  },
  {
    key: "card-24",
    image: "/figma/portfolio/project-cover-image/Solfege.jpg",
    title: "Sollfege ",
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
