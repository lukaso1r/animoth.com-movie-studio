import type React from "react";

const BurgerMenu: React.FC = () => {

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