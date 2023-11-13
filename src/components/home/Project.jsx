import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import IconLink from '../IconLink';

const Project = ({ project }) => {
  const { github, liveUrl, tech, title, image } = project.frontmatter;

  return (
    <div className="project">
      <h3 className="project__title | heading-4">{title}</h3>

      <div className="project__media | flow">
        <div className="project__image | border-frame">
          <GatsbyImage 
            className="border-radius-1"
            image={getImage(image)} 
            alt={title} 
          />
        </div>
        <div className="project__links | flex-group align-center">
          {github && (
            <IconLink name={"GitHub"} url={github} />
          )}
          {liveUrl && (
            <IconLink name={"External"} url={liveUrl} />
          )}
        </div>
      </div>

      <div className="project__description | flow">
        <div className="flow" dangerouslySetInnerHTML={{ __html: project.html }} />
        <div className="project__tech | flex-group">
          {tech.map(item => (
            <span className="pill" key={item}>{ item }</span>
          ))}
        </div>
      </div>
        
    </div>
  );
}

export default Project;
