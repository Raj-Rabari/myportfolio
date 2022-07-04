import React from 'react'
const skillsRequired =  ['SASS','TypeScript','React'];
const Project = ({projectItem}) => {
    const {name, description, skills, github, linkedIn} = projectItem;
    console.log(projectItem.skills);
    
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{description}</p>
            <div>
            <span className="skills">
                {skillsRequired.map(skill=>(
                  skill
                ))}
            </span>
            </div>
            <span>
                <a href={github}>Github</a>
            </span>
            
            
            <span>
                <a href={linkedIn}>LinkedIn</a>
            </span>
        </div>
    )
}

export default Project
