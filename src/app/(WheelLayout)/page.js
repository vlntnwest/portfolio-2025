"use client";
import ProjectsWrapper from "@/components/Project/ProjectsWrapper";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="overflow-hidden flex flex-col h-[calc(100vh-var(--header-height))]">
      <div className="relative h-auto">
        <ProjectsWrapper />
      </div>
    </div>
  );
};

export default Home;
