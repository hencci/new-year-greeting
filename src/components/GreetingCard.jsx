import { motion } from "framer-motion";
import { useState } from "react";
import NameSequence from "./NameSequence.jsx";
import FinalMessage from "./FinalMessage.jsx";
import { names } from "../data/names";
import MusicPlayer from "./MusicPlayer.jsx";

export default function GreetingCard() {
  const [showFinal, setShowFinal] = useState(false);

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 w-[90vw] max-w-md text-center"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h1 className="text-3xl font-bold text-white">🎆 HAPPY NEW YEAR 🎆</h1>

      {!showFinal ? (
        <NameSequence names={names} onComplete={() => setShowFinal(true)} />
      ) : (
        <FinalMessage />
      )}

      <MusicPlayer />
    </motion.div>
  );
}
