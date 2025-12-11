const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <mesh position={[0, 0, -20]}>
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="#000" />
      </mesh>
    </>
  );
};

export default Scene;
