import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import IconLinkGroup from '../IconLinkGroup';
import IconLink from '../IconLink';
// import HeroImage from "../../assets/icons/hero.svg";

const socialLinks = [
  {
    name: 'LinkedIn',
    url: '#'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/brianetoon',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/BrianEToon'
  }
];

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
          <h1 className="heading-1 | no-wrap">Hi, I'm Brian ...</h1>
          <p>a web developer who loves turning ideas and designs into digital experiences.</p>
          <p>I am a front-end developer with experience in creating visually appealing, accessible and responsive websites using modern web technologies like Vue, React and Gatsby.</p>
          {/* <IconLink name={'GitHub'} url={"https://github.com/"} className={'icon-link'} /> */}
          <IconLinkGroup links={socialLinks} />
        </div>
      </div>
    </section>
  )
}
