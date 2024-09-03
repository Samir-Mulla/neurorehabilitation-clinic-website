import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

function Header() {
  return (
    <header className='flex justify-around p-3'>
        <Logo />
        <Navbar />
    </header>
  )
}

export default Header