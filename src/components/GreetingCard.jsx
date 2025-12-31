import { motion } from "framer-motion";
import { useRef, useState } from "react";
import NameSequence from "./NameSequence.jsx";
import FinalMessage from "./FinalMessage.jsx";
import { names } from "../data/names";
import MusicPlayer from "./MusicPlayer.jsx";

export default function GreetingCard() {
  const [hasStarted, setHasStarted] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [canReplay, setCanReplay] = useState(false);
  const [runId, setRunId] = useState(0);

  const fadeOutMusicRef = useRef(null);

  const handleFinalShown = () => {
    // ⏱️ End music 15s after animation ends
    setTimeout(() => {
      fadeOutMusicRef.current?.();

      // show replay AFTER fade-out completes
      setTimeout(() => {
        setCanReplay(true);
      }, 3000);
    }, 18000);
  };

  const handleReplay = () => {
    setHasStarted(false);
    setShowFinal(false);
    setCanReplay(false);
    setRunId((prev) => prev + 1); // 🔁 force remount
  };

  return (
    <motion.div
      className="
        bg-white/10 backdrop-blur-lg rounded-2xl
        p-6 sm:p-8 md:p-10
        w-[90vw] sm:w-[85vw] md:w-[70vw]
        text-center
      "
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <h1 className="text-3xl font-bold text-white">🎆 HAPPY NEW YEAR 🎆</h1>

      {hasStarted && !showFinal && (
        <NameSequence names={names} onComplete={() => setShowFinal(true)} />
      )}

      {hasStarted && showFinal && <FinalMessage onShown={handleFinalShown} />}

      {/* 🎵 Play Button */}
      {!hasStarted && !canReplay && (
        <MusicPlayer
          onStart={() => setHasStarted(true)}
          registerFadeOut={(fn) => (fadeOutMusicRef.current = fn)}
        />
      )}

      {canReplay && (
        <button
          onClick={handleReplay}
          className="
            mt-6 w-[30%]
            bg-yellow-400 hover:bg-yellow-500
            text-black font-semibold
            py-2 px-4
            rounded-lg
            transition
          "
        >
          🔁 Replay
        </button>
      )}
    </motion.div>
  );
}
