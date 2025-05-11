import type React from "react";
import { useState, useEffect } from "react";

const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
};

const Menu: React.FC = () => {
    const [isCopiedVisible, setIsCopiedVisible] = useState(false);

    const handleCopyClick = () => {
        copyToClipboard('studioanimoth@gmail.com');
        setIsCopiedVisible(true);
    };

    useEffect(() => {
        if (isCopiedVisible) {
            const timer = setTimeout(() => {
                setIsCopiedVisible(false);
            }, 1000); 
            return () => clearTimeout(timer);
        }
    }, [isCopiedVisible]);

    return (
        <>
            <div className="menu-container bg-gray-900/80 min-w-full min-h-full fixed z-40 flex place-items-center gap-10">
                <div className="menuNavigationBox w-fit h-fit pl-[10%]">
                    <ul className="text-6xl flex flex-col gap-2">
                        <li className="socialsBoxItem">HOME</li>
                        <li className="socialsBoxItem">ABOUT</li>
                        <li className="socialsBoxItem">STORY</li>
                        <li className="socialsBoxItem">SKILLS</li>
                        <li className="socialsBoxItem">NEWS</li>
                        <li className="socialsBoxItem">INFO</li>
                        <li className="socialsBoxItem">CONTACT</li>
                    </ul>
                </div>
                <div className="contactSocialsBox">
                    <div className="socialsBox flex flex-col gap-1 fixed bottom-10 left-[10%] ">
                        <p className=" text-white opacity-40">You can find us on:</p>
                        <div className="socials flex flex-row gap-4 text-2xl items-center">
                            <div className="socialsBoxItem flex flex-row gap-1 items-center">FACEBOOK </div>
                            <div className="socialsBoxItem">INSTAGRAM</div>
                            <div className="socialsBoxItem">TWITTER</div>
                            <div className="socialsBoxItem">YOUTUBE</div>
                        </div>
                    </div>
                    <div className="contactBox flex flex-col gap-1 fixed bottom-10 right-[7%] ">
                        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                        {!isCopiedVisible && (<><p className=" text-white opacity-40">Contact us:</p> <div className="contactBoxItem text-2xl cursor-pointer text-white opacity-80" onClick={handleCopyClick}>studioanimoth@gmail.com</div></>)}
                        {isCopiedVisible && (
                            <div className="text-base text-[#0E1320] bg-[#e5e5e5cc] flex justify-center rounded-lg w-fit px-3 py-1">
                                COPPIED
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;