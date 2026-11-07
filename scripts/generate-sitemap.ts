import { readFileSync, writeFileSync } from "node:fs";

const baseUrl = "https://applylab.software";
const app = readFileSync(new URL("../src/App.tsx", import.meta.url), "utf8");
const excluded = /^\/(?:login|signup|logout|auth|admin|internal|staff|ops|api|not-found|lovable)(?:\/|$)/;
const paths = [...app.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((path) => path.startsWith("/") && !/[:*]/.test(path) && !excluded.test(path));

// No authoritative per-page modification dates are available; omit lastmod.
const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...paths.map((path) => `  <url><loc>${baseUrl}${path}</loc></url>`),
  '</urlset>',
  '',
].join("\n");
writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
console.log(`Sitemap generated for ${paths.length} public pages.`);