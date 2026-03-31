import HomeBannerSection from "./components/sections/home/HomeBannerSection";
import AssistSection from "./components/sections/home/AssistSection";
import TrustedPartnersSection from "./components/sections/home/TrustedPartnersSection";
import CoreCapabilitiesSection from "./components/sections/home/CoreCapabilitiesSection";
import AwardsSection from "./components/sections/home/AwardsSection";
import OurPortfolioSection from "./components/sections/home/OurPortfolioSection";
import CaseStudiesSection from "./components/sections/home/CaseStudiesSection";
import TestimonialVideosSection from "./components/sections/home/TestimonialVideosSection";
import ScheduleCallSection from "./components/sections/home/ScheduleCallSection";
import FAQSection from "./components/sections/home/FAQSection";

export const metadata = {
  title: "Five Online | Best Web Design Company in Mumbai",
  description:
    "Strategic case studies across D2C, enterprise and growth-driven brands. Five Online is India’s revenue-first web design company.",
};

export default function Home() {
  return (
    <>
      <HomeBannerSection />
      <AssistSection />
      <TrustedPartnersSection />
      <CoreCapabilitiesSection />
      <AwardsSection />
      <OurPortfolioSection />
      <CaseStudiesSection />
      <TestimonialVideosSection />
      <ScheduleCallSection />
      <FAQSection />
    </>
  );
}
