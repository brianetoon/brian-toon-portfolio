import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Contact() {
  return (
    <section id="contact" className="contact | section bg-neutral-300">
      <div className="contact__content | container">
        <div className="contact__info | flow">
          <h2 className="heading-1">Contact</h2>
          <p>If you're looking for a front-end developer to join your team, I would like to hear from you. Please feel free to contact me to learn more about my experience.</p>
          <a href="mailto: brian.elliot.toon@gmail.com" className="button" data-type="accent">Email Me</a>
        </div>
        <div className="contact__image">
          <StaticImage
            src="../../assets/images/contact.png"
            alt="Line drawing of a laptop computer, desktop computer, headphones, book and a coffee mug"
            placeholder="none"
          />
        </div>
      </div>
    </section>
  )
}
