# Document Information

| Field | Value |
|--------|-------|
| Project | The Coherence Project |
| Document | Framework and Platform Decision |
| Version | 0.1 |
| Status | Draft |
| Owner | Paulo Eduardo Pereira |
| Last Updated | 2026-08-21 |

---

# Framework and Platform Decision

## Purpose

This document records the rationale behind the main technology choices for The Coherence Project.

Technology decisions should be based on project requirements and long-term vision rather than temporary trends.

---

# Decision Summary

## Framework

Selected:

Astro

## Hosting Platform

Selected:

GitHub Pages

## Production Domain

Selected:

https://paulopereira.net.br

## Website Analytics

Selected:

Cloudflare Web Analytics

---

# Decision Context

The Coherence Project begins as a knowledge-focused platform centered on:

- Long-form essays.
- Articles.
- Research notes.
- The Coherence Journal.

However, the project may evolve to include:

- Podcast content.
- Video content.
- Courses.
- Presentations.
- Interactive knowledge resources.

The chosen architecture must support this evolution without introducing unnecessary complexity at the beginning.

---

# Framework Decision

## Selected Framework

Astro

---

## Reasoning

Astro aligns with the project's current and future needs.

The project is primarily content-driven rather than application-driven.

Astro provides:

- Excellent performance for content-heavy websites.
- Strong Markdown and content collection support.
- Component-based architecture.
- Progressive enhancement capabilities.
- The ability to add interactive features only when necessary.

---

# Why Not a Full Application Framework Initially

Frameworks designed primarily for complex applications may introduce unnecessary complexity.

The initial product does not require:

- Complex user accounts.
- Real-time interactions.
- Application state management.
- Database-driven content.

The architecture should evolve only when requirements justify additional complexity.

---

# Hosting Platform Decision

## Selected Platform

GitHub Pages

---

## Reasoning

GitHub Pages aligns with the project's philosophy:

- The repository is the source of truth.
- Content is version-controlled.
- Publishing should be simple and transparent.
- Operational maintenance should remain minimal.

The platform provides:

- Free hosting.
- HTTPS.
- Integration with GitHub workflows.
- Custom domain support.
- Reliable static website delivery.

---

# Production Domain Decision

## Selected Domain

https://paulopereira.net.br

## Reasoning

The selected domain represents the creator rather than a single project concept. It provides a stable long-term anchor for The Coherence Project and future initiatives while preserving the project's current content-focused architecture.

---

# Website Analytics Decision

## Selected Solution

Cloudflare Web Analytics is the current first-party website analytics solution.

It is used through its client-side beacon for basic, aggregate visibility into website usage, including page views, visited pages, traffic or referral sources where available, aggregate geographic, device, and browser information where available, and service-provided web performance metrics.

## Reasoning

The project needs lightweight evidence about how its published knowledge platform is used without adding analytics complexity beyond current product needs.

The analytics approach should remain privacy-oriented and focused on learning rather than attention optimization. It must not introduce cookies solely for the current analytics implementation.

## Architectural Boundaries

Cloudflare Web Analytics is an analytics service only. It does not change the production site's GitHub Pages hosting, production domain, DNS, content routing, or deployment architecture.

The beacon should be integrated centrally through the shared site layout or infrastructure, rather than duplicated across pages. The analytics layer must not alter content routing or editorial behavior.

## Scope and Future Review

This adoption covers basic website analytics only. It does not establish Cloudflare as the permanent or exclusive analytics platform, and it does not introduce custom event measurement.

Event-level measurement, such as email contact clicks, LinkedIn profile clicks, outbound Article clicks, or language-switch interactions, may be considered only when a demonstrated measurement need arises. Any future event analytics decision should follow the project's preference for the smallest adequate solution.

This decision should be revisited if basic aggregate analytics no longer meets a demonstrated measurement need or if its privacy, maintenance, or architectural fit materially changes.

---

# Content Delivery Strategy

The website should not store every type of media directly.

Different content formats should use the most appropriate delivery mechanisms.

Example:

```
Written Content

↓

GitHub Pages


Audio Content

↓

Podcast Platform


Video Content

↓

Video Hosting Platform
```

The website acts as the central knowledge interface connecting these resources.

---

# Future Scalability

The architecture should allow future migration if requirements exceed current capabilities.

Potential future needs:

- Advanced search.
- User accounts.
- Community features.
- Learning platforms.
- Membership systems.

Future expansion should preserve existing content and knowledge structure.

---

# Technology Philosophy

The project follows these rules:

- Start simple.
- Preserve flexibility.
- Add complexity only when justified.
- Keep content independent from technology.

---

# Decision Review

This decision should be revisited when:

- Content volume significantly increases.
- Interactive features become essential.
- New user requirements emerge.
- Current infrastructure creates meaningful limitations.

Technology should evolve because the project evolves, not because newer tools exist.
