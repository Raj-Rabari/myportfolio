import React from "react";
import Project from "./Project";
import "./style.css";

const projectData = [
  {
    name: "Ecommerce API",
    description:
      "Rest API for ecommerce website using Node JS , Express JS , MongoDB and tested using Postman.",
    skills: ["Node JS", "Express JS", "MongoDB"],
    github: "https://github.com/Raj-Rabari/ecommerceAPI",
  },
  {
    name: "Shortly",
    description:
      "Shortly is a url shortner website on which you can able to shortened your URL and manage your links",
    skills: ["React JS","Node JS","Express JS","MongoDB"],
    github: "https://github.com/Raj-Rabari/shortly",
  },
  {
    name: "Let's Discuss",
    description:
      "It is a real time group discussion platform end to end encrypted by AES algorithm.",
    skills: ["HTML","CSS","JavaScript","Node JS","Socket.io"],
    github: "https://github.com/Raj-Rabari/shortly",
  },
];

const ProjectContainer = () => {
  return (
    <>
      <h1 id="h1">Projects</h1>
      <div id="projects" className="projectContainer ">
        {projectData.map((projectItem) => {
          return <Project projectItem={projectItem} />;
        })}
      </div>
    </>
  );
};

export default ProjectContainer;
