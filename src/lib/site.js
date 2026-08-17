export const SITE_URL = "https://www.vlntn.fr";

// Store Vercel Blob public, sans jeton : la valeur est de toute façon inlinée
// dans le bundle client par NEXT_PUBLIC_*. Le fallback évite qu'un build sans
// variable d'env produise des URLs "undefined/..." dans les données structurées.
export const BASE_BLOB_URL =
  process.env.NEXT_PUBLIC_BASE_BLOB_URL ??
  "https://bto1vhg21okdlu4o.public.blob.vercel-storage.com";

// lastmod du sitemap. Constante, et surtout pas `new Date()` : le sitemap est
// prérendu, donc chaque déploiement — même un correctif CSS — réécrivait le
// lastmod des 8 URLs. Google détecte ces dates qui bougent sans que le contenu
// change, en conclut que le signal n'est pas fiable et l'ignore ensuite.
// À incrémenter quand le contenu d'un projet change réellement ; une date par
// projet peut être posée via le champ `updatedAt` de projects.json.
export const CONTENT_LAST_MODIFIED = "2026-08-17";
