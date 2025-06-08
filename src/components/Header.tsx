// biome-ignore lint/style/useImportType: <explanation>
import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {

  return (
    <header className="fixed top-0 w-full flex justify-between items-center p-4 px-8 z-50 bg-black bg-opacity-30 ">
        <Link to="/">
          <h1 className='w-auto text-white text-4xl font-caveat'>ANIMOTH</h1>
        </Link>
        <nav>
          <ul className="flex space-x-10 text-neutral-300 text-4xl font-caveat ">
            <li><Link className='hover:text-white' to="/about">About</Link></li>
            <li><Link className='hover:text-white' to="/offer">Offer</Link></li>
            <li><Link className='hover:text-white' to="/contact">Contact</Link></li>
            <li className='pl-10'><a className='hover:text-white'>EN</a></li>
          </ul>

        </nav>
    </header>
  )
}

export default Header
