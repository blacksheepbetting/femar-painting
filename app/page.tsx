import type { Metadata } from "next";
import HomePage from "../components/home-page";
import { businessJsonLd, jsonLd } from "../lib/seo";

export const metadata: Metadata = {
  title: "Residential & Commercial Painting in Indianapolis, IN",
  description: "Residential and commercial painting in Indianapolis, plus drywall preparation and specialty finishes across select Indiana communities. Request a free estimate.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(businessJsonLd)} />
    <HomePage />
  </>;
}
