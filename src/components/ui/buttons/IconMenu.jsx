"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const IconMenu = ({ children, direction, isOpen }) => {
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    }
  }, []);
  const menuVariants = {
    closed: {
      width: "56px",
      height: "56px",
      borderRadius: "56px",
      transform: "translate(0, 0)",
    },
    open: {
      width: "auto",
      height: "auto",
      minWidth: "56px",
      minHeight: "56px",
      transform:
        direction === "left"
          ? "translate(-10px, -10px)"
          : "translate(10px, -10px)",
      zIndex: 10,
    },
    initial: {
      width: "56px",
      height: "56px",
      borderRadius: "16px",
      zIndex: 0,
      transform:
        direction === "left" ? "translateX(-200px)" : "translateX(200px)",
    },
  };

  return (
    <div className="mx-2 flex items-center justify-center w-14 h-14 relative">
      <motion.div
        className="absolute bottom-0 right-0 flex items-center justify-center background-dark-gradient rounded-full overflow-hidden"
        style={{ zIndex: isOpen ? 10 : 0 }}
        initial="initial"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={
          initialRender
            ? { type: "spring", stiffness: 300, damping: 23, delay: 0.4 }
            : { duration: 0.3, ease: "easeInOut" }
        }
      >
        {children}
      </motion.div>
    </div>
  );
};

export default IconMenu;
