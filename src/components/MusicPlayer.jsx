import { Howl } from "howler";
import music from "../assets/music.mp3";

export default function MusicPlayer({ onStart }) {
  const startExperience = () => {
    const sound = new Howl({
      src: [music],
      volume: 0.5,
    });

    sound.play();
    onStart(); // Triggers animations
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
