"use client";

import ProjectsProvider from "./ProjectsContext";
import WheelProvider from "./WheelContext";

export default function Providers({ children }) {
  return (
    <ProjectsProvider>
      <WheelProvider>{children}</WheelProvider>
    </ProjectsProvider>
  );
}
