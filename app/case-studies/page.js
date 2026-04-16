import ListingScene from "../components/figma/ListingScene";

export const metadata = {
  title: "Case Studies",
  description:
    "Revenue systems engineered. Not just websites designed. Strategic case studies across D2C, enterprise and growth-driven brands.",
};

export default function CaseStudiesPage() {
  return (
    <ListingScene
      assetBasePath="/figma/case-studies"
      title={"Revenue Systems Engineered. <br /> Not Just Websites Designed."}
      titleWidth={1368}
      subtitle="Every brand came with a real business problem. Every solution was built to move revenue."
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
      bottomHeadingWidth={940}
      stickyLabel="Want results like these?"
      projects={[
        {
          key: "card-1",
          image: "/figma/case-studies/card-1.jpg",
          title: "Buget Store",
          text: "Launched D2C store and received first order within 24 hours",
          tags: ["Buget Store", "First Order in 24 Hours"],
          href: "/case-studies/buget-store",
        },
        {
          key: "card-2",
          image: "/figma/case-studies/card-2.jpg",
          title: "Muvtech",
          text: "D2C Ecommerce — Increase sales for a premium iPhone accessories brand scaling across multiple product lines",
          tags: ["2X revenue in 3 months"],
          href: "/case-studies/garware-hi-tech",
        },
        {
          key: "card-3",
          image: "/figma/case-studies/card-3.jpg",
          title: "Jamna Herbal",
          text: "D2C Ecommerce — Took a 50-year-old Ayurvedic brand online with 200+ SKUs and a full product catalogue",
          tags: ["200+ Products. Legacy Brand Goes D2C"],
          href: "/case-studies/jamna-herbal",
        },
        {
          key: "card-4",
          image: "/figma/case-studies/card-1.jpg",
          title: "Sagar Hill Road",
          text: "D2C Launch — Brought a Mumbai retail fashion brand since 1984 to ecommerce",
          tags: ["40-Year Retail Brand. Now Online"],
          href: "/case-studies/sagar-hill-road",
        },
        {
          key: "card-5",
          image: "/figma/case-studies/card-2.jpg",
          title: "Heritage Haat",
          text: "D2C Launch — Took a heritage craft brand from zero to its first online orders",
          tags: ["First Sale Within Launch Week"],
          href: "/case-studies/heritage-haat",
          accent: true,
        },
        {
          key: "card-6",
          image: "/figma/case-studies/card-3.jpg",
          title: "Sollfege",
          text: "Premium Ecommerce — Redesigned a luxury audio-video store for a multi-city experience centre brand",
          tags: ["Premium D2C Store for ₹50K+ Ticket Products"],
          href: "/case-studies/sollfege",
        },
      ]}
    />
  );
}
