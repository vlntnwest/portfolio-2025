import Link from "next/link";

const WheelMenu = ({ className }) => {
  return (
    <div className="w-full px-4 flex justify-center items-center gap-10">
      <Link
        href="/"
        className={`text-white text-center flex gap-10 font-medium ${className}`}
      >
        Home
      </Link>
      <Link
        href="/playground"
        className={`text-white text-center flex gap-10 font-medium ${className}`}
      >
        Playground
      </Link>
      <Link
        href="/contact"
        className={`text-white text-center flex gap-10 font-medium ${className}`}
      >
        Contact
      </Link>
    </div>
  );
};

export default WheelMenu;
