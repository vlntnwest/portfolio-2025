import Link from "next/link";

const WheelMenu = () => {
  return (
    <div className="w-full px-4 flex justify-center items-center gap-10 text-white text-center flex gap-10 font-medium text-sm/6 appearance-none py-4">
      <Link
        href="/"
        className="text-wheel-buttons-color hover:text-wheel-buttons-hover-color transition"
      >
        Home
      </Link>
      <Link
        href="/playground"
        className="text-wheel-buttons-color hover:text-wheel-buttons-hover-color transition"
      >
        Playground
      </Link>
      <Link href="/contact" className="text-wheel-buttons-color">
        Contact
      </Link>
    </div>
  );
};

export default WheelMenu;
