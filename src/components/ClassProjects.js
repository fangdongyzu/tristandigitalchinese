import React from 'react';
import SubClassProject from "./SubClassProject";
import projectData from "../projectData";
import "../styles/ClassProjects.css"

export default function ClassProjects() {
  const projectsElements = projectData.map(project => (
    <SubClassProject
      key={project.projectId}
      toolName={project.toolName}
      toolDescription={project.toolDescription}
      toolLink={project.toolLink}
      screenshotPath={project.screenshotPath}
    />
  ));
  
  return (

    <div className='class-projects-container'>
      {projectsElements}
    </div>
  
  );
}