# Femar Painting — website concept

A responsive, single-page website built for a client proposal on November 7, 2026. Prepared by Bridge Pointe Advisory Group.

The shareable proposal preview retains a noindex setting and is available to anyone with its URL.

## Preview scope

- Existing Femar logo, navy header and estimate panel, brighter gold accents, and an open white layout.
- Original service categories (Painting, Surface Preparation & Restoration, Specialty Coatings & Finishes); founder story; service area; FAQ.
- Filterable inspiration gallery with keyboard-accessible image dialog.
- Responsive navigation, click-to-call/email links, mobile contact bar.
- Estimate form with native validation and an explicit demonstration result. **It does not send, save, or email submissions.**
- Search engine indexing disabled for the concept.

## Run locally

Requires Node.js 22.13+ (Node.js 24 recommended).

```sh
npm ci
npm run dev
```

```sh
npx tsc --noEmit
npm run build
```

The project uses React, TypeScript, and Vinext. The Sites build integration is retained in `vite.config.ts`; Site identity is in `.openai/hosting.json`. No secrets belong in source control.

## Replace stock imagery

All photos are stored locally in `public/images/`. The image paths, descriptions, and source links are centralized in `lib/site-content.ts`.

| File | Use | Source |
| --- | --- | --- |
| `living-room.jpg` | Hero, interior service, inspiration | [Point3D Commercial Imaging / Unsplash](https://unsplash.com/photos/0BTn_jX0roU) |
| `exterior.jpg` | Exterior service, inspiration | [Unsplash image](https://images.unsplash.com/photo-1600596542815-ffad4c1539a9) |
| `kitchen.jpg` | About section, inspiration | [Unsplash image](https://images.unsplash.com/photo-1556912172-45b7abe8b7e1) |
| `commercial.jpg` | Commercial service, inspiration | [Unsplash image](https://images.unsplash.com/photo-1497366811353-6870744d04b2) |
| `femar-logo-white.webp` | Header: existing white logo variant, preserved | [Current Femar website asset](https://femarpainting.com/wp-content/uploads/2026/08/logo-variant-white-femar-painting-1536x768.webp) |
| `femar-logo.webp` | Existing official logo, preserved | [Current Femar website asset](https://femarpainting.com/wp-content/uploads/2026/08/logo-transparent-femar-painting-1536x768.webp) |

Photos are for design inspiration, not a portfolio of Femar work. Replace them with client-approved images, update alt descriptions and source links, then update stock labels and the gallery title as appropriate. Keep the logo's proportions intact.

## Content source

Business facts were taken from [femarpainting.com](https://femarpainting.com/) on November 6, 2026: founder Federico Ramos, founded in 2021, Indianapolis base, published services/communities, phone (463) 701-7205, email femarpaintingllc@gmail.com, and published Monday–Saturday hours. The concept does not add fabricated reviews, ratings, results, warranties, prices, or credentials. The copy and proposed process remain subject to the owner's approval.

## Before public launch — Foundation & Infrastructure

Status: Under Review. This website concept supports Phase 1 of Bridge Pointe's framework; it is not a complete marketing engagement.

- **Bridge Pointe:** replace photos, approve final copy with client, connect the estimate form to an approved email/CRM destination, add spam controls and delivery/error handling, validate lead receipt, and configure hosting/domain and appropriate analytics after approval.
- **Client:** provide approved project images and permission to use them; confirm services, service area, hours, contact details, and operating process; approve public copy; identify the person responsible for responding to leads.
- **Both:** agree on scope, timing, integration providers, third-party costs, privacy copy, and launch approval. No pricing or launch date is assumed.
- **Phase 2 readiness:** activate campaigns only after capture, follow-up, website, budget, and fulfillment capacity are ready.
- **Phase 3 readiness:** consider scale only after reliable conversion, quality, profitability, cash flow, and capacity data exists.

### Strategic Concerns

The form is a demonstration. It must be integrated and tested before relying on it for leads. Stock images must never be represented as completed client work.

### Missing Information

Approved project photography, client copy approval, final domain/hosting decisions, CRM/email integration choice, privacy requirements, lead-response owner, and any confirmed implementation budget.

### Scope Risks

The concept does not include online payment, financing, scheduling, CRM automation, advertising, or a production lead database. Those require separately confirmed scope and provider access.

### Recommended Next Action

Review the live concept during the proposal, gather owner feedback and assets, then confirm the Phase 1 implementation scope and lead-handling process.
