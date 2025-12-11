"use client";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import Pointer from "./Pointer";

const CanvasScreen = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 90, near: 0.1, far: 300 }}>
      <Scene />
      <Pointer />
    </Canvas>
  );
};

export default CanvasScreen;
