import React from 'react';
import HeroImage from '../../assets/images/hero.svg';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <HeroImage />
        <div className="flow">
          <h1>Hi, I'm Brian ...</h1>
          <p>A web developer who loves turning ideas and designs into digital experiences.</p>
          <p>I am a front-end developer with experience in creating visually appealing, user-friendly and responsive websites using modern web technologies like Vue, React and Gatsby.</p>
        </div>
      </div>
    </section>
  )
}
