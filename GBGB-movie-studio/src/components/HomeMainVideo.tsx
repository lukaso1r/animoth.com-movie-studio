import { useRef, useState } from "react";
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';

const HomeMainVideo = () =>{
    const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="homeMainVideo max-w-[100svw] max-h-[100svh] w-full h-full">
      <MediaPlayer
        load="visible"
        posterLoad="visible"
        title="Sprite Fight"
        loop
        className="max-w-[100svw] max-h-[100svh] w-full h-full"
        onClick={handleClick}
      >
        <MediaProvider>
          <video
            ref={videoRef}
            slot="media"
            src="/videos/brunogosia.mp4"
            autoPlay
            muted={isMuted}
            loop
            playsInline
          />
        </MediaProvider>
        <Poster alt="Sprite Fight Poster" />
      </MediaPlayer>
    </div>
  );
}

export default HomeMainVideo;