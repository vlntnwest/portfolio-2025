"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import projects from "@/lib/projects.json";
import { useRef } from "react";
import { useInfiniteScroll } from "@/hooks/useInfiniteClone";

const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4=";

const Content = () => {
  const { name } = useParams();
  const baseBlopUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;
  const project = projects.find((project) => project.href === name);
  const containerRef = useRef(null);

  const items = useInfiniteScroll(project.images, 400);
  return (
    <>
      <section className="overflow-y-auto">
        <div ref={containerRef}>
          <div className="h-auto">
            <div>
              {items.map((image, index) => (
                <Image
                  key={index}
                  src={`${baseBlopUrl}/projects/${name}/${image.url}`}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority={index < 4}
                  placeholder="blur"
                  blurDataURL={BLUR_PLACEHOLDER}
                  style={{ aspectRatio: `${image.width} / ${image.height}` }}
                  className=" w-full max-w-[calc(100%-24px)] h-auto max-h-[80vh] object-contain sm:max-w-[70vw] mx-4 mb-4 mx-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
