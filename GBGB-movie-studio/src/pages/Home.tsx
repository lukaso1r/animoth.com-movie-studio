import type React from "react";
import { useRef, useState } from "react";
import '@vidstack/react/player/styles/base.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import HeaderPc from "../components/HeaderPc";
import HomeMainVideo from "../components/HomeMainVideo";
import BurgerMenu from "../components/BurgerMenu";

const Home: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <HeaderPc toggleMenu={() => setIsMenuVisible(!isMenuVisible)} isMenuVisible={isMenuVisible}/>
      {isMenuVisible && <BurgerMenu isMenuVisible={isMenuVisible}/>}
      <div className="homeContainer w-full min-h-[100svh]">
        <div className={`homeMainVideoContainer ${isMenuVisible ? "burgerMenuSmallVideo animate-fade-in-out" : ""} transition-max-w-[2s] ${isMenuVisible ? "max-w-[50%]" : ""}`}>
          <HomeMainVideo  />    
        </div>
      </div>
    </>
  );
}

export default Home;
