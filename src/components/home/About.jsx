import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import AboutImage from "../../assets/images/about.svg"

export default function About() {
  return (
    <section id="about" className="about | section bg-neutral-300">
      <div className="container flow">
        <header className="section-header | flow">
          <AboutImage className="drawing width-100" />
          <h2 className="heading-1">About</h2>
        </header>
        
        <div className="about__content">
          <div className="about__info | flow">
            <p>I'm a front-end developer who is passionate about utilizing modern web technologies to create finished products that are accessible, work seamlessly and look great on any device.</p>
            <p>I've had the opportunity to create websites for a varying range of clients including local small businesses, personal portfolios, start-ups, a wedding and more. I've also recently joined a small AGILE style team that is currently developing a data-driven, stat-focused app for a game.</p>
            <p>I love how each new project presents its own unique challenges which I embrace as a chance to grow as a developer. My goal is to continue learning and improving my skills in the ever evolving environment of web development by staying up to date with the latest technologies and to deliver the best product I can to the end user.</p>
          </div>

          <div className="about__portrait | border-frame">
            <StaticImage
              className="border-radius-1"
              src="../../assets/images/portrait.jpg"
              alt="Portrait of Brian"
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
