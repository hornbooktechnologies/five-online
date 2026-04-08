import ListingScene from "../components/figma/ListingScene";

export const metadata = {
  title: "Portfolio",
  description:
    "Real projects. Real business impact. A selection of brands we've helped launch, scale, and transform online.",
};

export default function PortfolioPage() {
  return (
    <ListingScene
      assetBasePath="/figma/portfolio"
      title={`Real Projects. <br /> Real Business Impact.`}
      titleWidth={1030}
      subtitle="A selection of brands we\u2019ve helped launch, scale, and transform online."
      filterGroups={[
        {
          title: "Capability",
          lineY: 539,
          titleY: 574,
          itemsY: 601,
          items: ["All", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
        },
        {
          title: "Industry",
          lineY: 787,
          titleY: 824,
          itemsY: 851,
          items: ["All", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
        },
      ]}
      bottomHeadingWidth={854}
    />
  );
}
