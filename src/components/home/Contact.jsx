import React from "react";
import ContactImage from "../../assets/images/contact.svg";

export default function Contact() {
  return (
    <section id="contact" className="contact | section bg-neutral-300">
      <div className="contact__content | container">
        <div className="contact__info | flow">
          <h2 className="heading-1">Contact</h2>
          <p>If you're looking for a passionate web developer to join your team, I would love to hear from you. Please feel free to contact me to learn more about my experience!</p>
          <a href="mailto: brian.elliot.toon@gmail.com" className="button" data-type="accent">Email Me</a>
        </div>
        <div className="contact__image">
          <ContactImage />
        </div>
      </div>
    </section>
  )
}
