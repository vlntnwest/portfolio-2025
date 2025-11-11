"use client";
import { createContext, useContext } from "react";

const ProjectsContext = createContext({});

export function useProjectsContext() {
  return useContext(ProjectsContext);
}

export default function ProjectsProvider({ children }) {
  return (
    <ProjectsContext.Provider value={{}}>{children}</ProjectsContext.Provider>
  );
}
