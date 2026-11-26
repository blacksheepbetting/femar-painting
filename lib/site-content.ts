// Photos and logos collected from Femar Painting's existing website.
const original = "/images/femar/";
export const images = {
  interior: { src: `${original}interior-painting-femar-painting.webp`, alt: "Freshly painted interior project from Femar Painting" },
  exterior: { src: `${original}exterior-painting-femar-painting.webp`, alt: "Home exterior painting project from Femar Painting" },
  kitchen: { src: `${original}kitchen-cabinet-painting-femar-painting.webp`, alt: "Kitchen cabinet painting project from Femar Painting" },
  commercial: { src: `${original}GalleryHomepagePainting04-scaled.webp`, alt: "Kroger retail property project from Femar Painting’s portfolio" },
} as const;
