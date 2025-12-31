import { Howl } from "howler";
import { useRef } from "react";
import music from "../assets/music.mp3";

export default function MusicPlayer({ onStart, registerFadeOut }) {
  const soundRef = useRef(null);

  const startExperience = () => {
    soundRef.current = new Howl({
      src: [music],
      volume: 0.5,
      loop: true,
    });

    soundRef.current.play();

    // Expose fade-out control to parent
    registerFadeOut(() => {
      if (!soundRef.current) return;

      soundRef.current.fade(
        soundRef.current.volume(),
        0,
        3000 // 3s fade-out
      );

      setTimeout(() => {
        soundRef.current.stop();
      }, 3000);
    });

    onStart();
  };

  return (
    <button
      onClick={startExperience}
      className="
        mt-6
        w-[20%]
        bg-white/20 backdrop-blur
        text-white px-4 py-2
        rounded-lg text-sm
        hover:bg-white/30 transition
      "
    >
      ▶ Play
    </button>
  );
}
