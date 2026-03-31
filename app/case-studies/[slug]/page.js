import { notFound } from "next/navigation";
import CaseStudyDetailScene from "./CaseStudyDetailScene";
import { caseStudies, getCaseStudyBySlug } from "@/lib/data/case-studies";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: `${cs.client} Case Study`,
    description: cs.tagline,
  };
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return <CaseStudyDetailScene cs={cs} />;
}
