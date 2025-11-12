import WheelCentralButton from "./ WheelCentralButton";
import WheelButtons from "./WheelButtons";
import WheelShadow from "./WheelShadow";

const Wheel = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <div className="relative w-[200px] h-[200px] background-dark-gradient rounded-full flex items-center justify-center overflow-hidden select-none touch-none mix-blend-darken">
        <WheelCentralButton />
        <WheelShadow position={{ x: 0, y: 0 }} />
        <WheelButtons />
      </div>
    </div>
  );
};

export default Wheel;
