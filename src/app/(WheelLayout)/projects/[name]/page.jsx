import Content from "@/components/Project/page/Content";
import projects from "@/lib/projects";
import { BASE_BLOB_URL, SITE_URL } from "@/lib/site";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects
    .filter((p) => p.images)
    .map((p) => ({ name: p.href }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.name;
  const project = projects.find((p) => p.href === slug);

  if (!project) {
    return { title: "Projet Introuvable" };
  }

  const title = `${project.label} - ${project.type} ${project.technologies}`;

  return {
    title: title,

    description: project.description,

    alternates: {
      canonical: `/projects/${project.href}`,
    },

    openGraph: {
      title: `${title} | Valentin Westermeyer`,
      description: project.description,
      url: `/projects/${project.href}`,
      type: "article",
      locale: "fr_FR",
    },
  };
}

const page = async ({ params }) => {
  const { name } = await params;
  const project = projects.find((p) => p.href === name);

  if (!project) {
    notFound();
  }

  // Même @id que la Person déclarée dans le layout racine, pour que Google
  // consolide une seule entité au lieu d'en créer une par page.
  const author = {
    "@type": "Person",
    "@id": `${SITE_URL}/#valentin`,
    name: "Valentin Westermeyer",
    url: SITE_URL,
  };

  // La page n'affiche que des visuels : on la décrit comme une galerie et on
  // expose chaque image individuellement pour Google Images.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `${project.label} — ${project.type} ${project.technologies}`,
    description: project.description,
    url: `${SITE_URL}/projects/${project.href}`,
    inLanguage: "fr-FR",
    author,
    creator: author,
    keywords: [project.tag, project.type, project.technologies]
      .filter(Boolean)
      .join(", "),
    ...(project.website && { sameAs: project.website }),
    associatedMedia: project.images.map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${BASE_BLOB_URL}/projects/${project.href}/${image.url}`,
      name: image.alt,
      caption: image.alt,
      width: image.width,
      height: image.height,
      creditText: "Valentin Westermeyer",
      creator: author,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="sr-only">
        <h1>
          {project.label} — {project.type} {project.technologies}
        </h1>
        <p>{project.description}</p>
        <dl>
          <dt>Type de projet</dt>
          <dd>{project.type}</dd>
          <dt>Catégorie</dt>
          <dd>{project.tag}</dd>
          <dt>Technologies utilisées</dt>
          <dd>{project.technologies}</dd>
          {project.website && (
            <>
              <dt>Site en ligne</dt>
              <dd>
                <a href={project.website} rel="noopener noreferrer">
                  {project.website}
                </a>
              </dd>
            </>
          )}
        </dl>
      </article>
      <Content />
    </>
  );
};
export default page;
