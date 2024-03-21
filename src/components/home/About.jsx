import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
  return (
    <section id="about" className="about | section bg-neutral-300">
      <div className="container flow">
        <header className="section-header | flow">
          <StaticImage 
            src="../../assets/images/about.png"
            alt="Line drawing of a laptop computer, desktop computer, headphones, book and a coffee mug"
            placeholder="none"
          />
          <h2 className="heading-1">About</h2>
        </header>
        
        <div className="about__content">
          <div className="about__info | flow">
            <p>Hi there, my name is Brian and I'm a front-end developer who's passionate about leveraging modern web technologies to create finished products that are accessible, work seamlessly and look great on any device.</p>
            <p>I believe web development is an art form that requires both creativity and technical expertise. As a front-end developer, my strengths lie in my ability to bring ideas and designs to life as digital experiences.</p>
            <p>My passion for this comes from the continued learning and constant growth opportunities that come with being a developer. My goal is to continue improving my skills and staying up to date with the latest technologies.</p>
          </div>

          <div className="about__portrait | border-frame">
            <StaticImage
              className="border-radius-1"
              src="../../assets/images/napoleon.jpg"
              alt="Portrait of Napoleon Dynamite"
              placeholder="blurred"
            />
          </div>
          
          <div className="about__recent-tech | flow">
            <h3 className="clr-accent-400 fw-semi-bold fs-500">Technologies I am currently working with:</h3>
            <ul className="about__tech-list">
              <li>JavaScript</li>
              <li>React</li>
              <li>Gatsby</li>
              <li>GraphQL</li>
              <li>GSAP</li>
              <li>SCSS</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
