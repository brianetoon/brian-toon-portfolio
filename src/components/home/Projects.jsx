import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Project from './Project';


export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects | section">
      <div className="container | flow">
        <header className="section-header | flow margin-block-end-xl">
          <StaticImage 
            src="../../assets/images/projects.png"
            alt="Line drawing of two people sitting at a desk looking at a computer screen together"
            placeholder="none"
          />
          <h2 className="heading-1">Projects</h2>
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
