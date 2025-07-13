import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Header: React.FC = () => {
  const { language, setLanguage } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 70) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    { isScrolled && <div className='md:hidden h-[70px]' /> }

    <header
      className={` md:fixed
        top-0 w-full flex justify-between items-center p-4 px-8 z-50 
         bg-[rgba(0,0,0,0.3)] transition-all duration-500 ease-in-out
        ${isScrolled ? ' fixed shadow-lg backdrop-blur-md' : ''}
        ${menuOpen ? 'fixed' : ''}
      `}
      style={{
        transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
        transition: 'box-shadow 0.5s, backdrop-filter 0.5s, background 0.5s, translateY 1s'
      }}
    >
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <h1 className="w-auto text-white text-4xl font-caveat">ANIMOTH</h1>
      </Link>

      {/* Hamburger button for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-hidden"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={`block w-7 h-1 bg-white mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>
      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex space-x-10 text-neutral-300 text-4xl font-caveat">
          <li>
            <Link className="hover:text-white" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-white" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-white" to="/offer">
              Offer
            </Link>
          </li>
          <li>
            <Link className="hover:text-white" to="/contact">
              Contact
            </Link>
          </li>
          <li className="pl-0">
            <select
              className="p-0 m-0 -mt-[3px] bg-transparent"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option  value="en">EN</option>
              <option value="pl-PL">PL</option>
            </select>
          </li>
        </ul>
      </nav>
      
      {/* Mobile nav */}
      {menuOpen && (
        <nav className="absolute z-50 top-full left-0 w-full bg-black bg-opacity-90 md:hidden">
          <ul className="flex flex-col items-center space-y-6 py-6 text-neutral-300 text-3xl font-caveat">
            <li>
              <Link className="hover:text-white" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/offer" onClick={() => setMenuOpen(false)}>
                Offer
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <select
                className="p-0 m-0 bg-transparent text-white"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option className='text-base' value="en">EN</option>
                <option className='text-base' value="pl-PL">PL</option>
              </select>
            </li>
          </ul>
        </nav>
      )}
    </header>
    </>
  )
}

export default Header
