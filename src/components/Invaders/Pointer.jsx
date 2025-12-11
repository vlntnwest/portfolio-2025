import { Line } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

const Pointer = () => {
  const { viewport } = useThree();

  const ref = useRef();
  useFrame((state) => {
    const x = (state.pointer.x * viewport.width) / 2;
    const y = (state.pointer.y * viewport.height) / 2;

    ref.current.position.set(x, y, 0);
  });

  return (
    <group ref={ref}>
      {/* x axis */}
      <Line
        color="black" // Default
        lineWidth={3}
        points={[
          [-0.15, 0, 0],
          [-0.05, 0, 0],
        ]}
      />
      <Line
        color="black"
        lineWidth={3}
        points={[
          [0.15, 0, 0],
          [0.05, 0, 0],
        ]}
      />

      {/* y axis */}
      <Line
        color="black"
        lineWidth={3}
        points={[
          [0, -0.15, 0],
          [0, -0.05, 0],
        ]}
      />
      <Line
        color="black"
        lineWidth={3}
        points={[
          [0, 0.15, 0],
          [0, 0.05, 0],
        ]}
      />
    </group>
  );
};

export default Pointer;
