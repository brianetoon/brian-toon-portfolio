import React from "react";
import ProjectsImage from "../../assets/images/projects.svg";
import Project from "./Project";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects | section">
      <div className="container | flow">
        <header className="section-header | flow margin-block-end-xl">
          <ProjectsImage className="drawing width-100" />
          <h2 className="heading-1">Featured Projects</h2>
        </header>

        <div className="flow">
          {projects.map(project => (
            <Project project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}
