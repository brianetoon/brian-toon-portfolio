import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import NavLinks from "./NavLinks";

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
    gsap.set(links.current, {
      opacity: 0,
      y: 25
    });

    tl.current = gsap.timeline({ defaults: { duration: 0.25 } })
      .to(menu.current, {
        x: 0
      })
      .to(overlay.current, {
        opacity: 1,
        visibility: "visible"
      }, "<")
      .to(links.current, {
        opacity: 1,
        y: 0
      });

  }, { scope: container })

  useEffect(() => {
    tl.current.reversed(!navIsExpanded);
  }, [navIsExpanded]);

  return (
    <div className="mobile-navigation" ref={container}>
      <nav className="mobile-navigation__menu" ref={menu}>
        <NavLinks 
          type={"mobile"}
          setNavIsExpanded={setNavIsExpanded}
          ref={links}
        />
      </nav>

      <div 
        className="mobile-navigation__overlay" 
        onClick={() => setNavIsExpanded(false)}
        ref={overlay}
      >
      </div>
    </div>
  );
}

export default MobileNav;
