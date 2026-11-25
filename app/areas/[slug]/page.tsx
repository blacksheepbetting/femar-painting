import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaLandingPage } from "../../../components/area-landing-page";
import { getServiceArea, serviceAreas } from "../../../lib/areas";

export function generateStaticParams() {
  return serviceAreas.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};
  return {
    title: `${area.title} | Femar Painting`,
    description: area.summary,
    openGraph: { title: `${area.title} | Femar Painting`, description: area.summary, images: [area.image.src] },
  };
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();
  return <AreaLandingPage area={area} />;
}
