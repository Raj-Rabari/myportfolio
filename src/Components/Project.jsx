import React from 'react'
import './style.css';
import {BoxArrowUpRight} from "react-bootstrap-icons";


const Project = ({projectItem}) => {
    const {name, description, skills, github} = projectItem;
    console.log(projectItem.skills);
    
    return (
  
            <div  className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div >
                {skills.map(skill=>(
                    <span className="skills btn btn-sm btn-info m-1">{skill}</span>
                ))}
            </div>
            <span className="projectLink">
            <a href={github} target="_blank" rel='noreferrer' className='mx-1'> Go to Project <BoxArrowUpRight/></a>
            </span>            

        </div>
    )
}

export default Project;
