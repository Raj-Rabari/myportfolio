import React from 'react'
import './style.css'


export const Header = () => {
  return (
    <header className='header'>
      <h3><a href="/" className='navList-item'>
      Raj Rabari</a></h3>
      <nav className='menuItems'>
        <ul className='navList'>
          <a href='#projects' className='navList-item'>Projects</a>
          <a href='#skills' className='navList-item'>Skills</a>
          <a href='#contact' className='navList-item'>Contact</a>
        </ul>
      </nav>
    </header>
  )
}
