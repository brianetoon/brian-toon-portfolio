import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import NavLinks from "./NavLinks";
import SocialLinks from "../SocialLinks";

const MobileNav = ({ navIsExpanded, setNavIsExpanded }) => {
  const tl = useRef();
  const container = useRef();
  const menu = useRef();
  const links = useRef();
  const overlay = useRef();

  useGSAP(() => {
    
    gsap.set(menu.current, {
      x: "100%"
    });

    tl.current = gsap.timeline({ 
      paused: true,
      defaults: { duration: 0.25 } 
    })
      .to(menu.current, {
        x: 0
      })
      .to(overlay.current, {
        opacity: 1,
        visibility: "visible"
      }, "<")
      .from([links.current, ".social-links"], {
        opacity: 0,
        y: 25
      })

  }, { scope: container })

  useEffect(() => {
    navIsExpanded ? tl.current.play() : tl.current.reverse(); 
  }, [navIsExpanded]);

  return (
    <div className="mobile-navigation" ref={container}>
      <nav className="mobile-navigation__menu | flow" ref={menu}>
        <NavLinks 
          type={"mobile"}
          setNavIsExpanded={setNavIsExpanded}
          ref={links}
        />
        <SocialLinks />
      </nav>

      <div 
        className="mobile-navigation__overlay" 
        onClick={() => setNavIsExpanded(false)}
        ref={overlay}
        aria-hidden="true"
      >
      </div>
    </div>
  );
}

export default MobileNav;
