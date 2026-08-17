import projects from "@/lib/projects.json";
import {
  BASE_BLOB_URL,
  CONTENT_LAST_MODIFIED,
  SITE_URL as BASE_URL,
} from "@/lib/site";

export default function sitemap() {
  const projectUrls = projects
    .filter((project) => project.images)
    .map((project) => ({
      url: `${BASE_URL}/projects/${project.href}`,
      lastModified: project.updatedAt ?? CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      // Les pages projets n'affichent que des visuels : on déclare un sitemap
      // images pour que Google Images les découvre sans dépendre du rendu JS.
      images: project.images.map(
        (image) => `${BASE_BLOB_URL}/projects/${project.href}/${image.url}`
      ),
    }));

  return [
    {
      url: BASE_URL,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/playground`,
      lastModified: CONTENT_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...projectUrls,
  ];
}
