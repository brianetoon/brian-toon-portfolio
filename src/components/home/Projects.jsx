import React from 'react';

export default function Projects({ projects }) {

  return (
    <section id="projects">
      <h2>Projects</h2>

      {projects.map(project => (
        <div className="project" key={project.id}>
          <h3>{project.frontmatter.title}</h3>
          <div className="project__content">
            <div className="project__media">
              {/* image */}
              {/* icon links */}
            </div>
            
            <div className="project__description">
              <div dangerouslySetInnerHTML={{ __html: project.html }} />
              <ul>
                {project.frontmatter.tech.map(item => (
                  <li className="pill" key={item}>{ item }</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
