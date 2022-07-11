import React from 'react'
import './style.css'
import {Github,Linkedin} from "react-bootstrap-icons";
import profile from '../assets/Profile.jpeg';
import resume from '../assets/resume.pdf';

export const Homepage = () => {
  return (
    <>
    <img src={profile} className='rounded-circle shadow-1-strong mb-4' alt="Avatar" id='profile'/>
      <div className='mainHomePage'>
        <h1>Hi, I am <span className='name'>Raj Rabari.</span></h1>
        <h2>A Full Stack Engineer.</h2>
        <h4 className='desc'>I am a full stack software engineer skilled in MERN stack. Problem solver with java language. I am familiar with HTML, CSS, JavaScript, NodeJS, React Js, MongoDB, SQL etc.</h4>
        <div>
        <a href={resume} target="_blank" rel="noreferrer">
        <button type='button' className="btn btn-outline-primary m-2 ">Resume</button>
        </a>
          <a href="https://github.com/Raj-Rabari" target="_blank" rel='noreferrer' className='m-2'><Github/></a>
          <a href="https://www.linkedin.com/in/raj-rabari-7b9382234/" className='m-2' target="_blank" rel="noreferrer"><Linkedin/></a>
          
        </div>
      </div>
    </>
  )
}
