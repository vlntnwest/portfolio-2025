"use client";
import { useWheelContext } from "../../contexts/WheelContext";

const Header = () => {
  const { changeMode, mode } = useWheelContext();
  return (
    <header>
      <button
        onClick={() => {
          mode === "home" ? changeMode("projects") : changeMode("home");
        }}
      >
        Change mode
      </button>
    </header>
  );
};

export default Header;
