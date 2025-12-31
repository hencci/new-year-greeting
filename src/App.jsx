import Background from "./components/Background.jsx";
import GreetingCard from "./components/GreetingCard.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";

export default function App() {
  return (
    <Background>
      <MusicPlayer />
      <GreetingCard />
    </Background>
  );
}
