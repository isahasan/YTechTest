import React from 'react'
import IconManu from '../../Assets/Svgs/IconManu'
import IconSound from '../../Assets/Svgs/IconSound'
import Logo from '../../Assets/Svgs/Logo'

export default function Navbar() {
  return (
    <>
    <nav className='nav_bar'>
        <button className="sound_btn">
          <IconSound />
        </button>
        <div className="c_title">
          <Logo />
        </div>
        <button className='manu_btn'>
          <IconManu />
        </button>
        <span className="nav-bar__active_page">
          <span className="text">Home</span>
        </span>
      </nav>
    
    </>
  )
}
