// @ts-check
import { defineConfig } from 'astro/config';

// -------------------------------------------------------------
// TODO: Add the `site` property when the definitive domain is chosen.
//
// Example:
//   site: 'https://yourdomain.com',
//
// Required for:
//   - Canonical URLs
//   - hreflang alternate links (absolute URLs)
//   - Sitemap generation
//
// Until `site` is set, those tags are intentionally suppressed
// in BaseLayout.astro via the Astro.site guard.
// -------------------------------------------------------------

export default defineConfig({
  output: 'static',
});
