import React from "react";
import { useGSAP } from "@gsap/react";
import { forwardRef } from "react";
import ScrollTo from "../../animations/ScrollTo";

const scrollLinks = [
  {
    name: "About",
    target: "#about"
  },
  {
    name: "Projects",
    target: "#projects",
  },
  {
    name: "Contact",
    target: "#contact"
  },
];

const NavLinks = forwardRef(function NavLinks(props, ref) {
  const { setNavIsExpanded, type } = props;
  const { contextSafe } = useGSAP({ scope: ref });

  const scroll = contextSafe((target) => {
    ScrollTo(target, handleLinkClick);
  });

  const handleLinkClick = () => {
    if (setNavIsExpanded) {
      setNavIsExpanded(false);
    }
  }

  return (
    <ul 
      className="navigation-links | flex-group" 
      data-type={type} 
      ref={ref}
    >
      {scrollLinks.map(link => (
        <li 
          className="navigation-links__item" 
          key={link.name}
          onClick={() => scroll(link.target)}
        >
          {link.name}
        </li>
      ))}
    </ul>
  );
}) 

export default NavLinks;
