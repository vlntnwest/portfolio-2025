import projects from "@/lib/projects.json";
import { SITE_URL as BASE_URL } from "@/lib/site";

export default function sitemap() {
  const projectUrls = projects
    .filter((project) => project.images)
    .map((project) => ({
      url: `${BASE_URL}/projects/${project.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/playground`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...projectUrls,
  ];
}
