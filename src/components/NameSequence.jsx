import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function NameSequence({ names, onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < names.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [index, names.length, onComplete]);

  return (
    <AnimatePresence mode="wait">
      {index < names.length && (
        <motion.p
          key={names[index]}
          className="
            mt-6
            text-lg sm:text-xl md:text-2xl
            text-white
          "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
        >
          {names[index]}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
