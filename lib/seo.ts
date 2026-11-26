export const SITE_URL = "https://femarpainting.com";
export const BUSINESS_NAME = "Femar Painting";

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function jsonLd(value: unknown) {
  return { __html: JSON.stringify(value).replace(/</g, "\\u003c") };
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: BUSINESS_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/images/femar/logo-transparent-femar-painting-1536x768.webp"),
  telephone: "+1-463-701-7205",
  email: "femarpaintingllc@gmail.com",
  founder: { "@type": "Person", name: "Federico Ramos" },
  foundingDate: "2021",
  areaServed: [
    "Indianapolis, Indiana", "Carmel, Indiana", "Fishers, Indiana", "Greenwood, Indiana",
    "Westfield, Indiana", "Zionsville, Indiana", "Muncie, Indiana", "Kokomo, Indiana", "Pendleton Pike area, Indiana",
  ],
};

export function serviceJsonLd(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@type": "Organization", name: BUSINESS_NAME, url: SITE_URL },
    areaServed: { "@type": "AdministrativeArea", name: "Indiana" },
  };
}
