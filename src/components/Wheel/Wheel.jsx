"use client";
import WheelCentralButton from "./WheelCentralButton";
import WheelButtons from "./WheelButtons";
import WheelMenu from "./WheelMenu";
import WheelShadow from "./WheelShadow";
import { motion, scale, useReducedMotion } from "framer-motion";
import { useWheelContext } from "../../contexts/WheelContext";
import WheelProject from "./WheelProject";
import IconMenu from "../ui/buttons/IconMenu";
import Albums from "../SVG/Albums";
import MenuIcon from "../SVG/MenuIcon";
import menus from "@/lib/menus.json";
import MenuLink from "../ui/buttons/MenuLink";

const wheelVariants = {
  home: {
    width: "200px",
    height: "200px",
    borderRadius: "9999px",
    scale: 1,
    translateY: "0px",
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  projects: {
    width: "auto",
    height: "auto",
    transition: { duration: 0.4, ease: "easeInOut" },
    display: "block",
  },
};

const wheelContentVariants = {
  show: {
    opacity: 1,
    appearance: "auto",
    pointerEvents: "auto",
  },
  hide: {
    opacity: 0,
    appearance: "none",
    pointerEvents: "none",
  },
};

const menuVariants = {
  show: {
    opacity: 1,
    appearance: "auto",
    pointerEvents: "auto",
    scale: 1,
  },
  hide: {
    opacity: 0,
    appearance: "none",
    pointerEvents: "none",
    scale: 0,
  },
};

const Wheel = () => {
  const { mode, toggleMenu, toggleProjectMenu, iconStates } = useWheelContext();

  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
      <WheelMenu />
      {mode === "projects" && (
        <IconMenu direction="right" isOpen={iconStates.projects}>
          <button
            onClick={(e) => toggleProjectMenu("projects", e)}
            className="cursor-pointer"
          >
            <div className={`p-4`}>
              <Albums
                name="Projects icon"
                className="w-6 h-6 fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
              />
            </div>
          </button>
        </IconMenu>
      )}

      <motion.div
        className="relative background-dark-gradient flex items-center justify-center overflow-hidden select-none touch-none z-10"
        variants={wheelVariants}
        initial="home"
        animate={mode}
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "9999px",
          pointerEvents: "auto",
        }}
        transition={shouldReduceMotion ? { duration: 0 } : undefined}
      >
        <motion.div
          variants={wheelContentVariants}
          initial="hide"
          animate={mode === "home" ? "show" : "hide"}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <WheelCentralButton />
          <WheelShadow position={{ x: 0, y: 0 }} />
          <WheelButtons toggleMenu={toggleMenu} />
        </motion.div>
        <motion.div
          variants={wheelContentVariants}
          initial="hide"
          animate={mode === "projects" ? "show" : "hide"}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <WheelProject
            style={
              mode !== "projects"
                ? {
                    opacity: 0,
                    appearance: "none",
                    pointerEvents: "none",
                    translateY: "4rem",
                  }
                : {
                    opacity: 1,
                    appearance: "auto",
                    pointerEvents: "auto",
                    translateY: "0rem",
                  }
            }
          />
        </motion.div>
      </motion.div>
      {mode === "projects" && (
        <IconMenu direction="left" isOpen={iconStates.menu}>
          <motion.button
            onClick={(e) => toggleProjectMenu("menu", e)}
            className="absolute top-0 left-0 cursor-pointer"
            variants={menuVariants}
            initial="show"
            animate={iconStates.menu ? "hide" : "show"}
          >
            <div className={`p-4`}>
              <MenuIcon
                name="Menu icon"
                className="w-6 h-6 fill-wheel-buttons-color hover:fill-wheel-buttons-hover-color transition"
              />
            </div>
          </motion.button>
          <motion.ul
            className="flex flex-col justify-center p-4"
            variants={menuVariants}
            initial="hide"
            animate={iconStates.menu ? "show" : "hide"}
          >
            {menus.map((menu) => (
              <MenuLink
                key={menu.id}
                name={menu.label}
                href={menu.href}
                onClick={(e) => toggleProjectMenu("menu", e)}
              />
            ))}
          </motion.ul>
        </IconMenu>
      )}
    </section>
  );
};

export default Wheel;
