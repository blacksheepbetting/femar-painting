export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  introTitle: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  offerings: string[];
  gallery: { image: string; alt: string }[];
  faq: [string, string][];
};

export const servicePages: ServicePage[] = [
  {
    slug: "painting",
    title: "Painting Services Across Indiana",
    shortTitle: "Painting",
    eyebrow: "INTERIOR · EXTERIOR · RESIDENTIAL · COMMERCIAL",
    summary: "Refresh walls, ceilings, cabinets, and building exteriors with residential or commercial painting from Femar Painting.",
    introTitle: "A fresh coat starts with a good plan.",
    intro: "Faded exteriors, marked walls, or outdated cabinets can make a welcoming space feel tired. Femar Painting discusses the surfaces, finish, and material preferences with you before work begins, then prepares the area for the painting work you approve.",
    heroImage: "/images/femar/GalleryHomepagePainting03.webp",
    heroAlt: "Painting project photo from Femar Painting's existing website",
    offerings: ["Interior painting", "Exterior painting", "Kitchen cabinet painting", "Ceilings, walls, and trim", "Residential and commercial painting"],
    gallery: [
      { image: "/images/femar/GalleryHomepagePainting01-scaled.webp", alt: "Painting project photo from Femar Painting's existing website" },
      { image: "/images/femar/GalleryHomepagePainting02-scaled.webp", alt: "Painting project photo from Femar Painting's existing website" },
      { image: "/images/femar/GalleryHomepagePainting04-scaled.webp", alt: "Painting project photo from Femar Painting's existing website" },
    ],
    faq: [
      ["What types of painting does Femar Painting provide?", "Femar Painting offers residential and commercial painting, including interior, exterior, kitchen cabinet, and ceiling painting."],
      ["Can I choose the paint materials?", "Material preferences can be discussed while planning your project and preparing its estimate."],
      ["Do you offer free estimates?", "Yes. Share the surfaces, location, and timing you have in mind to request a free estimate."],
    ],
  },
  {
    slug: "surface-preparation-restoration",
    title: "Surface Preparation & Restoration",
    shortTitle: "Surface Preparation & Restoration",
    eyebrow: "REPAIR · PREPARATION · RESTORATION",
    summary: "Address drywall damage, remove wallpaper, and prepare surfaces for the next finish with Femar Painting.",
    introTitle: "A strong finish needs a sound starting surface.",
    intro: "Wallpaper residue, damaged drywall, and rough texture can remain noticeable after painting. Tell Femar Painting what you see on the surface so the repair and preparation work can be discussed as part of the project scope.",
    heroImage: "/images/femar/surface-preparation-restoration-services-femar-painting.webp",
    heroAlt: "Surface preparation project photo from Femar Painting's existing website",
    offerings: ["Surface sanding, scraping, and cleaning", "Drywall repair and related work", "Wallpaper removal", "Texture application", "Post-painting cleanup within the agreed scope"],
    gallery: [
      { image: "/images/femar/Gallery04-scaled.webp", alt: "Surface preparation project photo from Femar Painting's existing website" },
      { image: "/images/femar/AboutUsSection-e1792186287657.jpg", alt: "Femar Painting project photo from the existing website" },
      { image: "/images/femar/Gallery01.webp", alt: "Femar Painting project photo from the existing website" },
    ],
    faq: [
      ["Can you repair drywall before painting?", "Femar Painting offers drywall repair and related surface work. Describe the area so the work can be discussed for your estimate."],
      ["Do you remove wallpaper?", "Wallpaper removal is among the services listed by Femar Painting. Share the size and condition of the area when requesting an estimate."],
      ["Can you apply wall or ceiling texture?", "Texture work is available. The surface and desired finish can be reviewed as part of the project scope."],
    ],
  },
  {
    slug: "specialty-coatings-finishes",
    title: "Specialty Coatings & Finishes",
    shortTitle: "Specialty Coatings & Finishes",
    eyebrow: "WOOD FINISHING · EPOXY · FLOORING",
    summary: "Explore deck and fence restoration, wood staining and sealing, garage epoxy, and floor-finishing options.",
    introTitle: "Not every surface needs ordinary wall paint.",
    intro: "Wood decks, fences, and garage floors face different demands from an interior wall. Tell Femar Painting what the surface is made of and how the area is used, then discuss a finish that fits your project and preferences.",
    heroImage: "/images/femar/Specialty-coating-and-finishes.jpg",
    heroAlt: "Specialty coating project photo from Femar Painting's existing website",
    offerings: ["Deck and fence restoration", "Wood staining", "Wood sealing", "Garage epoxy floor painting", "Floor painting and floor installation"],
    gallery: [
      { image: "/images/femar/Gallery02.webp", alt: "Specialty finish project photo from Femar Painting's existing website" },
      { image: "/images/femar/Gallery03.webp", alt: "Specialty finish project photo from Femar Painting's existing website" },
      { image: "/images/femar/Painting-Services.jpg", alt: "Femar Painting project photo from the existing website" },
    ],
    faq: [
      ["Do you offer epoxy garage floor painting?", "Garage epoxy floor painting is one of Femar Painting's listed specialty services. Share the condition and size of the floor for an estimate."],
      ["Can you stain and seal a deck or fence?", "Femar Painting lists deck and fence restoration, wood staining, and sealing among its services."],
      ["Do you paint or install flooring?", "Floor painting and floor installation are listed services. Contact Femar Painting to discuss the surface and project scope."],
    ],
  },
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
