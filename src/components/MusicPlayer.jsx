import { Howl } from "howler";
import { useState } from "react";
import music from "../assets/music.mp3";

export default function MusicPlayer() {
  const [started, setStarted] = useState(false);

  const startMusic = () => {
    const sound = new Howl({
      src: [music],
      volume: 0.5,
    });
    sound.play();
    setStarted(true);
  };

  if (started) return null;

  return (
    <button
      onClick={startMusic}
      className="
        fixed bottom-4 right-4
        bg-white/20 backdrop-blur
        text-white px-4 py-2
        rounded-full text-sm
      "
    >
      ▶ Play
    </button>
  );
}
