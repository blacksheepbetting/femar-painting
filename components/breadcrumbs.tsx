import { absoluteUrl, jsonLd } from "../lib/seo";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href ?? "/"),
    })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(schema)} />
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>{trail.map((item, index) => <li key={`${item.label}-${index}`}>
        {index > 0 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
        {item.href ? <a href={item.href}>{item.label}</a> : <span aria-current="page">{item.label}</span>}
      </li>)}</ol>
    </nav>
  </>;
}
