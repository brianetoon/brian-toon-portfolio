import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import SocialLinks from '../SocialLinks';

export default function Hero() {
  return (
    <section id="hero" className="hero | section">
      <div className="container even-columns">
        <div className="hero__image">
          <StaticImage 
            src="../../assets/images/hero.png"
            alt="Line drawing of a guy sitting with a laptop"
            placeholder="none"
            loading="eager"
          />
        </div>
        <div className="flow">
          <h1 className="heading-1">Hi, I'm Brian</h1>
          <p>a web developer who loves turning ideas and designs into digital experiences.</p>
          <p>I am a front-end developer with experience in creating visually appealing, accessible and responsive websites using modern web technologies like React, Vue and Gatsby.</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
