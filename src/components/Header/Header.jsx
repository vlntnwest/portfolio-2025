import Image from "next/image";
import ContactContainer from "./ContactContainer";
import ContactBubbles from "./ContactBubbles";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 p-6">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center ">
          <Link
            href="/"
            className="rounded-full overflow-hidden bg-linear-to-b from-[#FF3C3C] to-[#5F1616] z-10"
          >
            <Image
              src="/assets/images/memoji/Classic.PNG"
              width={80}
              height={80}
              alt="Memoji Valentin WESTERMEYER"
              className="h-20 w-20"
            />
          </Link>
          <ContactContainer>
            <ContactBubbles />
          </ContactContainer>
        </div>
      </div>
    </header>
  );
};

export default Header;
