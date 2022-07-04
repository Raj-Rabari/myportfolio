import React from 'react'
import './style.css'

export const Homepage = () => {
  return (
    <>
      <div className='mainHomePage'>
        <h1>Hi, I am <span className='name'>Priyank Jain.</span></h1>
        <h2>A Front End Engineer.</h2>
        <p className='desc'>Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.</p>
        <div>
          <button>Resume</button>
          <a href="https://github.com/priyank8141" target="_blank">github</a>
          <a href="/priidjs" >Linkedin</a>
        </div>
      </div>
    </>
  )
}
