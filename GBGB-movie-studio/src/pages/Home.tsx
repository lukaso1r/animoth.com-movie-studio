import { useRef, useState } from "react";
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';

const Home = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="max-w-[100svw] max-h-[100svh] w-full h-full">
      <MediaPlayer
        load="visible"
        posterLoad="visible"
        title="Sprite Fight"
        loop
        className="max-w-[100svw] max-h-[100svh] w-full h-full"
        onClick={handleClick}  // Dodajemy obsługę zdarzenia kliknięcia
      >
        <MediaProvider>
          <video
            ref={videoRef}
            slot="media"
            src="../../public/videos/test2.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
          ></video>
        </MediaProvider>
        <Poster alt="Sprite Fight Poster" />
      </MediaPlayer>
    </div>
  );
}

export default Home;
