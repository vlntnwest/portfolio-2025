const WheelShadow = ({ position }) => {
  return (
    <>
      {position.x !== 0 || position.y !== 0 ? (
        <span
          className="absolute size-25 rounded-full bg-radial from-white from-0% to-black opacity-10 blur-xs"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
            transformOrigin: "center center",
          }}
        ></span>
      ) : null}
    </>
  );
};

export default WheelShadow;
