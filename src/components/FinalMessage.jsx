import { motion } from "framer-motion";
import { useEffect } from "react";

export default function FinalMessage({ onShown }) {
  useEffect(() => {
    onShown();
  }, [onShown]);

  return (
    <motion.div
      className="text-center mt-6 px-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p
        className="
          text-base sm:text-lg md:text-xl
          text-white mb-6
        "
      >
        Wishing you joy, success, and great achievements
      </p>

      <motion.h2
        className="
          text-3xl sm:text-4xl md:text-5xl
          font-bold text-yellow-400
        "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 5 }}
      >
        WELCOME TO 2026
      </motion.h2>
    </motion.div>
  );
}
