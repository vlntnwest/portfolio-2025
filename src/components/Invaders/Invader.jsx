import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Invader = ({ data, onRemove }) => {
  const ref = useRef();
  const speed = 8;

  // initialise la position à start dès le premier render
  if (
    ref.current &&
    ref.current.position.x === 0 &&
    ref.current.position.y === 0 &&
    ref.current.position.z === 0
  ) {
    ref.current.position.set(data.start.x, data.start.y, data.start.z);
  }

  useFrame((state, delta) => {
    if (!ref.current) return;

    // déplacement selon la direction et la vitesse
    ref.current.position.x += data.dir.x * speed * delta;
    ref.current.position.y += data.dir.y * speed * delta;
    ref.current.position.z += data.dir.z * speed * delta;

    // suppression : si l’ennemi a atteint ou dépassé la périphérie du cercle (plan z = 0)
    if (ref.current.position.z >= data.target.z) {
      onRemove();
    }
  });

  return (
    <mesh ref={ref} position={[0, 4, -20]}>
      <boxGeometry args={[1.6, 1.6, 0.2]} />
      <meshStandardMaterial color="#ff3366" />
    </mesh>
  );
};

export default Invader;
