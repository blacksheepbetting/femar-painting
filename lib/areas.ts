export type ServiceArea = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  intro: string;
  image: { src: string; alt: string };
  gallery: { src: string; alt: string }[];
};

const photo = (name: string, alt: string) => ({ src: `/images/femar/${name}`, alt });

export const serviceAreas: ServiceArea[] = [
  {
    slug: "indianapolis", name: "Indianapolis", title: "Painting Services in Indianapolis",
    summary: "Residential and commercial painting, surface preparation, and specialty finishes from Femar Painting in Indianapolis.",
    intro: "Planning a painting project in Indianapolis? Femar Painting can discuss interior and exterior painting, surface preparation, drywall work, and specialty finishes. Share your address and project details to confirm availability and request a free estimate.",
    image: photo("commercial-painting-femar-painting.webp", "Commercial interior painting project from Femar Painting"),
    gallery: [photo("residential-painting-femar-painting.webp", "Residential painting project from Femar Painting"), photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting"), photo("deck-fence-restoration-femar-painting.webp", "Deck and fence restoration project from Femar Painting")],
  },
  {
    slug: "carmel", name: "Carmel", title: "Painting Services in Carmel",
    summary: "Talk with Femar Painting about interior and exterior painting, preparation, and finishing work in Carmel.",
    intro: "Whether you are refreshing a room or planning exterior work in Carmel, Femar Painting can review the surfaces, finish, and project scope with you. Contact the team with your address and preferred timing to confirm availability and request a free estimate.",
    image: photo("about-femar-painting.webp", "Home exterior project photo from Femar Painting"),
    gallery: [photo("kitchen-cabinet-painting-femar-painting.webp", "Kitchen cabinet painting project from Femar Painting"), photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting"), photo("deck-fence-restoration-femar-painting.webp", "Deck and fence restoration project from Femar Painting")],
  },
  {
    slug: "fishers", name: "Fishers", title: "Painting Services in Fishers",
    summary: "Residential and commercial painting and surface preparation in Fishers, with project details reviewed before work begins.",
    intro: "Femar Painting works with homeowners and businesses in Fishers on painting, preparation, and selected specialty finishes. Tell us what you would like to update, where the project is located, and when you hope to begin so we can discuss availability and an estimate.",
    image: photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting"),
    gallery: [photo("residential-painting-femar-painting.webp", "Residential painting project from Femar Painting"), photo("kitchen-cabinet-painting-femar-painting.webp", "Kitchen cabinet painting project from Femar Painting"), photo("surface-preparation-drywall-repair-indiana-femar-painting.webp", "Surface preparation project from Femar Painting")],
  },
  {
    slug: "greenwood", name: "Greenwood", title: "Painting Services in Greenwood",
    summary: "Interior, exterior, and specialty painting options from Femar Painting for projects in Greenwood.",
    intro: "For a Greenwood home or business, Femar Painting can discuss the surfaces you want painted, the preparation involved, and the finish you have in mind. Reach out with your project location to confirm service availability and request a free estimate.",
    image: photo("deck-fence-restoration-femar-painting.webp", "Deck and fence restoration project from Femar Painting"),
    gallery: [photo("about-femar-painting.webp", "Home exterior project photo from Femar Painting"), photo("floor-painting-femar-painting.webp", "Floor finishing project from Femar Painting"), photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting")],
  },
  {
    slug: "westfield", name: "Westfield", title: "Painting Services in Westfield",
    summary: "Painting and preparation for residential and commercial spaces in Westfield, from Femar Painting.",
    intro: "Femar Painting can help you plan painting and preparation work for a Westfield property. Share the project address, surfaces, and timing you have in mind to confirm availability and talk through a free estimate.",
    image: photo("residential-painting-femar-painting.webp", "Residential exterior project from Femar Painting"),
    gallery: [photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting"), photo("kitchen-cabinet-painting-femar-painting.webp", "Kitchen cabinet painting project from Femar Painting"), photo("deck-fence-restoration-femar-painting.webp", "Deck and fence restoration project from Femar Painting")],
  },
  {
    slug: "zionsville", name: "Zionsville", title: "Painting Services in Zionsville",
    summary: "Femar Painting offers estimates for painting, surface preparation, and specialty finishing projects in Zionsville.",
    intro: "Planning a refresh in Zionsville? Femar Painting can discuss the requested painting, repairs, and preparation together so the scope is clear before work begins. Contact us with your address and project details to confirm availability and request a free estimate.",
    image: photo("painting-services-across-indiana-femar-painting-1.webp", "Home exterior project from Femar Painting"),
    gallery: [photo("about-femar-painting.webp", "Home exterior project photo from Femar Painting"), photo("deck-fence-restoration-femar-painting.webp", "Deck and fence restoration project from Femar Painting"), photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting")],
  },
  {
    slug: "muncie", name: "Muncie", title: "Painting Services in Muncie",
    summary: "Residential and commercial painting and preparation services from Femar Painting in Muncie.",
    intro: "Femar Painting serves Muncie among its Indiana service areas. Tell us about the property and the work you are considering, and we can confirm availability, review the project scope, and prepare a free estimate.",
    image: photo("commercial-painting-femar-painting.webp", "Commercial painting project from Femar Painting"),
    gallery: [photo("residential-painting-femar-painting.webp", "Residential painting project from Femar Painting"), photo("surface-preparation-drywall-repair-indiana-femar-painting.webp", "Surface preparation project from Femar Painting"), photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting")],
  },
  {
    slug: "kokomo", name: "Kokomo", title: "Painting Services in Kokomo",
    summary: "Contact Femar Painting to discuss residential painting, commercial work, and specialty finishes in Kokomo.",
    intro: "For a project in Kokomo, Femar Painting can discuss interior and exterior painting, surface preparation, and specialty finishes. Share the address, surfaces, and preferred timing to confirm availability and request a free estimate.",
    image: photo("kitchen-cabinet-painting-femar-painting.webp", "Kitchen cabinet painting project from Femar Painting"),
    gallery: [photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting"), photo("floor-painting-femar-painting.webp", "Floor finishing project from Femar Painting"), photo("residential-painting-femar-painting.webp", "Residential painting project from Femar Painting")],
  },
  {
    slug: "pendleton-pike", name: "Pendleton Pike area", title: "Painting Services near Pendleton Pike",
    summary: "Femar Painting provides painting, surface preparation, and specialty finishing estimates for the Pendleton Pike area.",
    intro: "If your project is near Pendleton Pike, contact Femar Painting with the property address and work you have in mind. The team can confirm whether the location is within its service area and discuss a free estimate.",
    image: photo("surface-preparation-restoration-services-femar-painting.webp", "Surface preparation project from Femar Painting"),
    gallery: [photo("epoxy-garage-floor-painting-femar-painting.webp", "Garage floor coating project from Femar Painting"), photo("commercial-painting-femar-painting.webp", "Commercial painting project from Femar Painting"), photo("interior-painting-femar-painting.webp", "Interior painting project from Femar Painting")],
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
