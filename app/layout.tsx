import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "../lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Femar Painting | Residential & Commercial Painters in Indiana",
    template: "%s | Femar Painting",
  },
  description: "Indianapolis painting for homes and businesses, from interior and exterior work to surface prep and specialty finishes. Request a free estimate.",
  applicationName: "Femar Painting",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  openGraph: {
    type: "website",
    siteName: "Femar Painting",
    locale: "en_US",
    title: "Femar Painting | Residential & Commercial Painters in Indiana",
    description: "A fresh look for your home or business. Interior, exterior, commercial painting, surface preparation, and specialty finishes.",
    url: SITE_URL,
    images: [{ url: "/images/femar/HomeHeroSection.JPG-scaled.jpg", width: 1800, height: 1200, alt: "Femar Painting project photo" }],
  },
  twitter: { card: "summary_large_image", title: "Femar Painting | Painters in Indiana", description: "Residential and commercial painting from Femar Painting.", images: ["/images/femar/HomeHeroSection.JPG-scaled.jpg"] },
  icons: { icon: "/images/femar/logo-transparent-femar-painting-1536x768.webp", shortcut: "/images/femar/logo-transparent-femar-painting-1536x768.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
