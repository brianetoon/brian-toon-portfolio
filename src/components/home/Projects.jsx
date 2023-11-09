import React from 'react';
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image';

export default function Projects({ projects }) {
  return (
    <section id="projects" className="projects | section">
      <div className="container | flow">
        <header className="section-header | flow">
          <StaticImage 
            src="../../assets/images/projects.png"
            alt="Line drawing of two people sitting at a desk looking at a computer screen together"
            placeholder="none"
          />
          <h2 className="heading-1">Projects</h2>
        </header>

        {projects.map(project => (
          <div className="project | flow" key={project.id}>
            <h3 className="heading-4">{project.frontmatter.title}</h3>
            <div className="project__content | flow">
              <div className="project__media">
                <div className="project__image | border-frame">
                  <GatsbyImage 
                    className="border-radius-1"
                    image={getImage(project.frontmatter.image)} alt={project.frontmatter.title} 
                  />
                </div>
                {/* icon links */}
              </div>
        
              <div className="project__description | flow">
                <div dangerouslySetInnerHTML={{ __html: project.html }} />
                <div className="project__tech | flex-group">
                  {project.frontmatter.tech.map(item => (
                    <span className="pill" key={item}>{ item }</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
