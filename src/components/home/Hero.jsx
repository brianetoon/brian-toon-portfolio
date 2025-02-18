import React from "react";
import SocialLinks from "../SocialLinks";
import HeroImage from "../../assets/images/hero.svg";

export default function Hero() {
  return (
    <section id="hero" className="hero | section">
      <div className="container even-columns">
        <div className="hero__image">
          <HeroImage className="drawing" />
        </div>
        <div className="flow">
          <h1 className="heading-1">Hi, I'm Brian</h1>
          <p>a web developer who loves turning ideas and designs into beautiful websites.</p>
          <p>I am a web developer with experience in creating visually appealing, accessible and responsive websites using modern web technologies such as React, Vue and Vite.</p>
          <SocialLinks />
        </div>
      </div>
    </section>
  )
}
