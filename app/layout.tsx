import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL("https://femar-painting-preview.qorii808929.chatgpt.site"),
  title: "Femar Painting | Painting Services Across Indiana",
  description: "Residential and commercial painting in Indianapolis and across Indiana. Explore painting, surface preparation, and specialty finishes from Femar Painting.",
  robots: { index: false, follow: false },
  openGraph: { title: "Femar Painting | Painting Services Across Indiana", description: "A new look for the spaces that matter to you. Explore the Femar Painting website concept.", images: [{ url: "/images/living-room.jpg" }] },
  icons: { icon: "/images/femar-logo.webp", shortcut: "/images/femar-logo.webp" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
