import Image from "next/image";
import Nav from "../SVG/Nav";

const WheelProject = ({ className, style }) => {
  return (
    <div className={`px-4 py-2 gap-15 flex ${className}`} style={style}>
      <div className="flex gap-2">
        <Image
          src="/assets/images/projects/pokey.png"
          alt="Pokey"
          width={40}
          height={40}
          className="rounded-md"
        />
        <div>
          <h2 className="text-white text-sm/4 font-semibold mb-2">Pokey</h2>
          <p className="text-white text-sm/4 text-nowrap">Web -Branding</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="ml-2 cursor-pointer pointer-events-auto">
          <div className="p-1 h-5">
            <Nav
              name="Prev"
              className="h-full fill-wheel-buttons-color rotate-180 hover:fill-wheel-buttons-hover-color transition"
            />
          </div>
        </button>
        <button className="mr-2 cursor-pointer pointer-events-auto">
          <div className="p-1 h-5">
            <Nav
              name="Next"
              className="h-full fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default WheelProject;
