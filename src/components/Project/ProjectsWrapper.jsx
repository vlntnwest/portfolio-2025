"use client";
import projects from "@/lib/projects.json";
import ProjectItem from "./ProjectItem";
import { useCarouselContext } from "@/contexts/CarouselContext";
import ProjectsDesc from "./ProjectsDesc";

const ProjectsWrapper = () => {
  const { emblaRef, projectGap, changeOnClick, selectedIndex } =
    useCarouselContext();

  const projectList = () => {
    return projects.map((project, index) => (
      <ProjectItem
        key={`${project.label}-${index}`}
        project={project}
        projectGap={projectGap}
        index={index}
        changeOnClick={changeOnClick}
        selectedIndex={selectedIndex}
      />
    ));
  };

  return (
    <>
      {projectGap !== 0 && (
        <div
          className="embla overflow-hidden relative flex-1 select-none"
          ref={emblaRef}
        >
          <ul className="embla__container flex">{projectList()}</ul>
          <ProjectsDesc project={projects[selectedIndex]} />
        </div>
      )}
    </>
  );
};

export default ProjectsWrapper;
