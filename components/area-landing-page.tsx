import { Check, MapPin, Phone } from "lucide-react";
import type { ServiceArea } from "../lib/areas";
import { serviceAreas } from "../lib/areas";
import { Breadcrumbs } from "./breadcrumbs";
import { absoluteUrl, jsonLd, serviceJsonLd } from "../lib/seo";
import { TrackableLink } from "./trackable-link";

const services = [
  ["Painting", "Interior and exterior painting for homes and businesses.", "/services/painting/"],
  ["Surface preparation", "Drywall repair, wallpaper removal, and surface preparation.", "/services/surface-preparation-restoration/"],
  ["Specialty finishes", "Wood staining, sealing, garage epoxy, and floor finishes.", "/services/specialty-coatings-finishes/"],
];

export function AreaLandingPage({ area }: { area: ServiceArea }) {
  return <div className="service-page area-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(serviceJsonLd(`Painting services in ${area.name}`, area.summary, absoluteUrl(`/areas/${area.slug}/`)))} />
    <a href="#area-main" className="skip-link">Skip to content</a>
    <div className="topbar"><div className="container"><span><MapPin size={13} /> Painting services throughout Indiana</span><a href="tel:+14637017205">(463) 701-7205 <Phone size={13} /></a></div></div>
    <header className="header"><div className="container service-header">
      <a href="/" className="logo-link" aria-label="Femar Painting home"><img src="/images/femar/logo-variant-white-femar-painting-1536x768.webp" alt="Femar Painting LLC" width="160" height="80" /></a>
      <nav className="service-nav" aria-label="Main navigation"><a href="/#services">Services</a><a href="/#about">About us</a><a href="/#areas">Service areas</a></nav>
      <TrackableLink className="button button-gold" href="/#contact" eventName="estimate_cta_click" eventLocation="area_header">Get a free estimate</TrackableLink>
    </div></header>
    <main id="area-main">
      <section className="service-hero area-hero"><div className="container service-hero-grid">
        <div className="service-hero-copy"><Breadcrumbs items={[{ label: "Service areas", href: "/#areas" }, { label: area.name }]} /><p className="eyebrow">RESIDENTIAL & COMMERCIAL PAINTING</p><h1>{area.title}</h1><p className="service-lede">{area.summary}</p><div className="hero-actions"><TrackableLink className="button button-gold" href="/#contact" eventName="estimate_cta_click" eventLocation="area_hero">Request a free estimate</TrackableLink><TrackableLink className="text-link" href="tel:+14637017205" eventName="click_to_call" eventLocation="area_hero"><Phone size={15} /> Call (463) 701-7205</TrackableLink></div><p className="service-proof"><Check size={17} /> Free estimates <span>·</span> Careful preparation <span>·</span> Indiana service areas</p></div>
        <figure className="service-hero-image"><img src={area.image.src} alt={area.image.alt} fetchPriority="high" /><figcaption>Project photography from Femar Painting</figcaption></figure>
      </div></section>
      <section className="section area-intro"><div className="container area-intro-grid"><div><p className="eyebrow">A GOOD STARTING POINT</p><h2>Painting work that starts with a clear plan.</h2></div><div><p>{area.intro}</p><a className="text-link" href="/#contact">Tell us about your project</a></div></div></section>
      <section className="section area-services"><div className="container"><div className="section-heading"><div><p className="eyebrow">HOW WE CAN HELP</p><h2>Services in {area.name}</h2></div><p>Share the surfaces and finish you have in mind. Femar can review the requested scope and availability with you.</p></div><div className="area-service-grid">{services.map(([title, description, href]) => <a className="area-service-card" key={title} href={href}><span>{title}</span><p>{description}</p><strong>Explore service</strong></a>)}</div></div></section>
      <section className="section area-work"><div className="container"><div className="section-heading"><div><p className="eyebrow">FEMAR PAINTING PROJECT PHOTOS</p><h2>See the work up close.</h2></div><p>Selected photos from Femar Painting’s existing portfolio.</p></div><p className="service-swipe-hint">Swipe to explore project photos</p><div className="area-gallery" role="list" aria-label={`Femar Painting project photos for ${area.name}`}>{area.gallery.map((image) => <figure className="area-gallery-item" key={image.src} role="listitem"><img src={image.src} alt={image.alt} loading="lazy" /></figure>)}</div></div></section>
      <section className="section area-coverage"><div className="container"><div className="section-heading"><div><p className="eyebrow">SERVICE AREAS ACROSS INDIANA</p><h2>Also serving other Indiana communities.</h2></div><p>Availability depends on the project address. Contact Femar Painting to confirm service for your location.</p></div><div className="area-coverage-grid"><div className="area-links">{serviceAreas.filter((item) => item.slug !== area.slug).map((item) => <a key={item.slug} href={`/areas/${item.slug}/`}><MapPin size={14} />{item.name}</a>)}</div><figure className="area-map"><img src="/images/femar/your-address-helps-us-plan-work-femar-painting.webp" alt="Map graphic from Femar Painting’s existing service area page" loading="lazy" /><figcaption>Share your project address so Femar can confirm availability.</figcaption></figure></div></div></section>
      <section className="service-final-cta"><div className="container service-final-inner"><div><p className="eyebrow">LET’S TALK ABOUT YOUR PROJECT</p><h2>Ready to get started?</h2><p>Tell us where the project is and what you would like to update.</p></div><div className="service-final-actions"><TrackableLink className="button button-gold" href="/#contact" eventName="estimate_cta_click" eventLocation="area_footer">Request a free estimate</TrackableLink><TrackableLink className="service-final-phone" href="tel:+14637017205" eventName="click_to_call" eventLocation="area_footer"><Phone size={16} />(463) 701-7205</TrackableLink></div></div></section>
    </main>
    <footer><div className="container footer-main"><a href="/" aria-label="Femar Painting home"><img src="/images/femar/logo-transparent-femar-painting-1536x768.webp" alt="Femar Painting LLC" width="150" height="75" /></a><p>A fresh look for the spaces<br />that matter to you.</p><a href="/#services">Services</a><a href="/#areas">Service areas</a><a href="/#contact">Get in touch</a></div><div className="container footer-bottom"><span>© 2026 Femar Painting. All rights reserved.</span><span>Project photography from Femar Painting</span></div></footer>
    <div className="mobile-actions"><TrackableLink href="tel:+14637017205" eventName="click_to_call" eventLocation="area_mobile_sticky"><Phone size={17} />Call Femar</TrackableLink><TrackableLink href="/#contact" eventName="estimate_cta_click" eventLocation="area_mobile_sticky">Free estimate</TrackableLink></div>
  </div>;
}
