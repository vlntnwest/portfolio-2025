"use client";
import Image from "next/image";
import { useState } from "react";
import projectPlayground from "@/lib/playground.json";
import { useInfiniteScroll } from "@/hooks/useInfiniteClone";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [src, setSrc] = useState(null);
  const items = useInfiniteScroll(projectPlayground, 400);

  const baseBlobUrl = process.env.NEXT_PUBLIC_BASE_BLOB_URL;

  const handleClick = (src) => {
    setShowModal((s) => !s);
    setSrc(src);
  };

  return (
    <div className="overflow-y-scroll">
      {showModal && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-white z-999999"
          onClick={() => handleClick(null)}
        >
          <div className="w-full h-full flex items-center">
            <Image
              src={src}
              alt="Pokey Desktop Mockup"
              width={3000}
              height={2500}
              className=""
              loading="eager"
            />
          </div>
        </div>
      )}

      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div
            className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
            key={index}
            onClick={() => handleClick(`${baseBlobUrl}/${item.src}`)}
          >
            <div className="aspect-square">
              <Image
                src={`${baseBlobUrl}/${item.src}`}
                alt={item.label}
                width={item.width}
                height={item.height}
                className="w-full h-full object-contain group-hover:scale-90 transition-all duration-300 ease-in-out"
                loading="eager"
              />
            </div>
            <div className="text-center pt-[10px] flex justify-center inner">
              <span>0</span>
              <span>{item.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;

const Playground = () => {};
