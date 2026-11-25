import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://femar-painting-preview.qorii808929.chatgpt.site"),
  title: "Femar Painting | Painting Services Across Indiana",
  description: "Residential and commercial painting in Indianapolis and across Indiana. Explore painting, surface preparation, and specialty finishes from Femar Painting.",
  robots: { index: false, follow: false },
  openGraph: { title: "Femar Painting | Painting Services Across Indiana", description: "A fresh look for the spaces that matter to you. Explore painting, surface preparation, and specialty finishes from Femar Painting.", images: [{ url: "/images/femar/HomeHeroSection.JPG-scaled.jpg" }] },
  icons: { icon: "/images/femar/logo-transparent-femar-painting-1536x768.webp", shortcut: "/images/femar/logo-transparent-femar-painting-1536x768.webp" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
