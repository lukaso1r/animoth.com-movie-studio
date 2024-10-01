import type React from "react";
import { useState } from "react";
import '@vidstack/react/player/styles/base.css';
import HeaderPc from "../components/HeaderPc";
import HomeMainVideo from "../components/HomeMainVideo";
import BurgerMenu from "../components/BurgerMenu";
import HomeMeshVideos from "../components/HomeMeshVideos";

const Home: React.FC = () => {
  
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <HeaderPc toggleMenu={() => setIsMenuVisible(!isMenuVisible)} isMenuVisible={isMenuVisible}/>
      {isMenuVisible && <BurgerMenu />}
      <div className="homeContainer w-full min-h-[100svh]">
        <div className={`homeMainVideoContainer ${isMenuVisible ? "burgerMenuSmallVideo animate-fade-in-out" : ""} transition-max-w-[2s] ${isMenuVisible ? "max-w-[50%]" : ""}`}>
          <HomeMainVideo  />    
        </div>
        <div className="homeMeshContainer flex flex-col">
          <HomeMeshVideos />
        </div>
      </div>
    </>
  );
}

export default Home;
