import Content from "@/components/Project/page/Content";
import projects from "@/lib/projects";
import { notFound } from "next/navigation";

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
  };
}

const page = async ({ params }) => {
  const { name } = await params;
  const project = projects.find((p) => p.href === name);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.label,
    description: project.description,
    url: `https://www.vlntn.fr/projects/${project.href}`,
    author: {
      "@type": "Person",
      name: "Valentin Westermeyer",
      url: "https://www.vlntn.fr",
    },
    keywords: [project.tag, project.type, project.technologies]
      .filter(Boolean)
      .join(", "),
    ...(project.website && { sameAs: project.website }),
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
