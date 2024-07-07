interface HeaderPcProps {
    toggleMenu: () => void;
    isMenuVisible: boolean;
  }




const HeaderPc: React.FC<HeaderPcProps> = ({ toggleMenu, isMenuVisible }) => {

    const showMenu = () => {
        toggleMenu();
    }

  return (
    <>
        <header className="flex items-center justify-between w-[83%] pl-20 pt-2 absolute z-40">
            <div className='burgerMenu'>
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                {!isMenuVisible && <img onClick={showMenu} className='w-[60%]' src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png" alt="menu--v1"/>}
                {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                {isMenuVisible && <img onClick={showMenu} className='w-[60%]' src="https://img.icons8.com/ios/50/FFFFFF/close-window.png" alt="close-window"/>}
            </div>
            <div className='flex items-center gap-2 w-[30%] '>
                <img className="w-[13%] max-w-[50px]" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/movie.png" alt="movie"/>
                <p className='text-2xl font-normal'>GBGBLabel</p>
            </div>
        </header>
    </>
  )
};

export default HeaderPc;