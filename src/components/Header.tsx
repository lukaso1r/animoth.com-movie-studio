// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'
import { FaBars } from 'react-icons/fa' 
import { IoCloseOutline } from "react-icons/io5";

interface HeaderProps{
    setIsMenuVisible: (status: boolean) => void,
    isMenuVisible: boolean
}

const Header: React.FC<HeaderProps> = ({setIsMenuVisible, isMenuVisible}) => {


  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-4 z-50">
      <button onClick={() => setIsMenuVisible(!isMenuVisible)} className={`text-xl  ${isMenuVisible ? "text-white opacity-80 bg-transparent" : "text-slate-500 bg-transparent"}  `} type='button'>
        {isMenuVisible ? <IoCloseOutline /> : <FaBars />}
      </button>
      {/* <h1 className={'text-2xl text-slate-500'}>Studio Animoth</h1> */}
      <h1 className={`text-2xl ${isMenuVisible ? "text-white opacity-80" : "text-slate-500"}`}>Studio Animoth</h1>
    </header>
  )
}

export default Header
