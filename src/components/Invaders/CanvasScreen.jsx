"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Pointer from "./Pointer";

const CanvasScreen = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 70 }}>
      <Scene />
      <Pointer />
    </Canvas>
  );
};

export default CanvasScreen;
