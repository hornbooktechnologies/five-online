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
      title={"Revenue Systems Engineered.\nNot Just Websites Designed."}
      titleWidth={1368}
      subtitle="Strategic case studies across D2C, enterprise and growth-driven brands."
      filterGroups={[
        {
          title: "Capability",
          lineY: 539,
          titleY: 574,
          itemsY: 601,
          items: ["All", "Web Design", "Development", "Marketing"],
        },
        {
          title: "Problem",
          lineY: 787,
          titleY: 824,
          itemsY: 851,
          items: ["All", "Low Conversion", "High Bounce Rate", "Poor SEO"],
        },
        {
          title: "Industry",
          lineY: 1036,
          titleY: 1073,
          itemsY: 1100,
          items: ["All", "Ecommerce", "Real Estate", "Healthcare"],
        },
      ]}
      bottomHeadingWidth={940}
      stickyLabel="Want results like these?"
      cardLinks={[
        "/case-studies/garware-hi-tech",
        "/case-studies/budget-store",
        "/case-studies/zeal-aqua",
        "/case-studies/budget-store",
        "/case-studies/zeal-aqua",
      ]}
    />
  );
}
