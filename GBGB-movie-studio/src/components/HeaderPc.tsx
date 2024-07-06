import React from 'react';

const HeaderPc = () => {
  return (
    <>
        <header className="flex items-center justify-between w-[83%] pl-20 pt-2 absolute">
            <div className='burgerMenu'>
                <img className='w-[60%]'  src="https://img.icons8.com/ios/50/FFFFFF/menu--v1.png" alt="menu--v1"/>
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