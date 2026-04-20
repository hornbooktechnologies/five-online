import HomeBannerSection from "./components/sections/home/HomeBannerSection";
import AssistSection from "./components/sections/home/AssistSection";
import TrustedPartnersSection from "./components/sections/home/TrustedPartnersSection";
import CoreCapabilitiesSection from "./components/sections/home/CoreCapabilitiesSection";
import AwardsSection from "./components/sections/home/AwardsSection";
import OurPortfolioSection from "./components/sections/home/OurPortfolioSection";
import CaseStudiesSection from "./components/sections/home/CaseStudiesSection";
import TestimonialVideosSection from "./components/sections/home/TestimonialVideosSection";
import ScheduleCallSection from "./components/sections/home/ScheduleCallSection";
import FAQAccordion from "@/app/components/common/FAQAccordion";

export const metadata = {
  title: "Five Online | Best Web Design Company in Mumbai",
  description:
    "Strategic case studies across D2C, enterprise and growth-driven brands. Five Online is India’s revenue-first web design company.",
};

const homeFaqs = [
  {
    q: "Can a website directly improve business revenue?",
    a: "Yes. A strategically structured website improves lead quality, conversion rates, and customer trust. When aligned with marketing efforts, website optimisation directly impacts revenue growth and marketing efficiency.",
  },
  {
    q: "How much does a professional website cost in India?",
    a: "The cost of a professional website in India varies based on scope, complexity, and business goals. A basic website may cost less, but a revenue-focused website built for lead generation or ecommerce performance requires strategic planning, UX design, technical optimisation, and ongoing performance thinking. The investment should be evaluated based on business impact, not just initial price.",
  },
  {
    q: "I'm starting a new business. How can I generate more leads and sales online?",
    a: "For a new business, your website is the foundation of digital growth. It shapes first impressions, builds credibility, and converts visitors into enquiries or customers. While marketing channels drive traffic, a strategically structured website ensures that traffic turns into measurable leads and revenue.",
  },
];

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
      <FAQAccordion
        title="The Answer Stack"
        description="Straight answers to common business questions about websites, growth, and digital presence."
        faqs={homeFaqs}
      />
    </>
  );
}
