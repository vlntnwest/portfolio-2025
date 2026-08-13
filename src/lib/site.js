export const SITE_URL = "https://www.vlntn.fr";

// Store Vercel Blob public, sans jeton : la valeur est de toute façon inlinée
// dans le bundle client par NEXT_PUBLIC_*. Le fallback évite qu'un build sans
// variable d'env produise des URLs "undefined/..." dans les données structurées.
export const BASE_BLOB_URL =
  process.env.NEXT_PUBLIC_BASE_BLOB_URL ??
  "https://bto1vhg21okdlu4o.public.blob.vercel-storage.com";
