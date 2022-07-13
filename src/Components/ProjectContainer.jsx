import React from "react";
import Project from "./Project";
import "./style.css";

const projectData = [
  {
    name: "Guess the Numbers",
    description:
      "This project is basically a game in which user can click the at most three buttons to make the total count greater than 10. It user Successfull to achieve the total the he will win, Othervise loose.",
    skills: ["JavaScript", "React JS", "Material UI"],
    github: "https://raj-rabari.github.io/guess-numbers/",
  },
  {
    name: "GitHub User API",
    description:
      "This project is based on API handling. In this project I have used the GitHub user API. User can search the github user and get the details of that user like Profile photo,follower,followee,no of github repository etc.",
    skills: ["JavaScript", "React JS", "HTML", "CSS", "axios"],
    github: "https://nue15l.csb.app/",
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
