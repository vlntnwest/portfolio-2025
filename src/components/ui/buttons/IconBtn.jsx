import React from "react";
import { motion } from "framer-motion";

const IconBtn = ({ children, onClick, size, initialTransform }) => {
  const width = size + 4 * 2;
  return (
    <motion.button onClick={onClick} whileTap={{ scale: 1.05 }}>
      <motion.div
        className={`p-4 background-dark-gradient rounded-full w-14 aspect-square`}
        initial={{ transform: initialTransform }}
        animate={{ transform: "translateX(0px)" }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
          delay: 0.2,
        }}
      >
        <div
          className={`flex items-center justify-center h-${size} w-${size} cursor-pointer`}
        >
          {children}
        </div>
      </motion.div>
    </motion.button>
  );
};

export default IconBtn;
