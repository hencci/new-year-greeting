import { Howl } from "howler";
import { useEffect } from "react";
import music from "../assets/music.mp3";

export default function MusicPlayer() {
  useEffect(() => {
    const sound = new Howl({
      src: [music],
      autoplay: true,
      loop: false,
      volume: 0.5,
    });

    return () => sound.stop();
  }, []);

  return null;
}
