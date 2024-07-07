import type React from "react";
import { useRef, useState } from "react";
import HomeMainVideo from "./HomeMainVideo";

interface BurgerMenuProps {
    isMenuVisible: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({isMenuVisible}) => {

    return (
        <>
            <div className="
                menu-container 
                bg-gray-900/80
                min-w-full 
                min-h-full
                fixed
                z-30
                flex
                place-items-center
                gap-10

                "
                >
                <div className="menuNavigationBox w-fit h-fit pl-[10%]">
                    <ul className="text-6xl flex flex-col gap-2">
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>STORY</li>
                        <li>SKILLS</li>
                        <li>NEWS</li>
                        <li>INFO</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                            
            </div>
            
        </>
    );

}

export default BurgerMenu;