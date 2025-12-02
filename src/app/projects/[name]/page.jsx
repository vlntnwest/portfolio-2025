"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import projects from "@/lib/projects.json";
import { useRef } from "react";
import { useInfiniteClone } from "@/hooks/useInfiniteClone";

const page = () => {
  const { name } = useParams();
  const baseBlopUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;

  const project = projects.find((project) => project.href === name);

  const containerRef = useRef(null);

  useInfiniteClone(containerRef, 200);

  return (
    <section className="overflow-y-scroll">
      <h1 className="sr-only">{name}</h1>
      <div ref={containerRef}>
        <div className="h-auto">
          <div>
            {project &&
              project.images.map((image) => (
                <Image
                  key={image.url}
                  src={`${baseBlopUrl}/projects/${name}/${image.url}`}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="eager"
                  className="pt-4 aspect-auto h-auto object-cover"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
