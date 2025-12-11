import InvadersManager from "./InvadersManager";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <InvadersManager single={false} />
    </>
  );
};

export default Scene;
