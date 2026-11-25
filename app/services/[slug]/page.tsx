import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceLandingPage } from "../../../components/service-landing-page";
import { getServicePage, servicePages } from "../../../lib/services";

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};
  return {
    title: `${service.shortTitle} | Femar Painting`,
    description: service.summary,
    openGraph: { title: `${service.shortTitle} | Femar Painting`, description: service.summary },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  return <ServiceLandingPage service={service} />;
}
