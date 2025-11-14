import React from "react";
import { motion } from "framer-motion";

const IconBtn = ({ children, onClick, initialTransform }) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 1.05 }}
      className="cursor-pointer mx-2"
    >
      <motion.div
        className={`p-4 background-dark-gradient rounded-full w-14 h-14 aspect-square`}
        initial={{ transform: initialTransform }}
        animate={{ transform: "translateX(0px)" }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 23,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default IconBtn;
