import CanvasScreen from "@/components/Invaders/CanvasScreen";
import React from "react";

const page = () => {
  return (
    <section className="h-[calc(100vh-var(--header-height))]">
      <CanvasScreen />
    </section>
  );
};

export default page;
