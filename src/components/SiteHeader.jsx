import React, { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import MobileNav from "./navigation/MobileNav";
import PrimaryNav from "./navigation/PrimaryNav";
import ScrollTo from "../animations/ScrollTo";
import { useGSAP } from "@gsap/react";


const SiteHeader = () => {
  const [navIsExpanded, setNavIsExpanded] = useState(false);
  const { contextSafe } = useGSAP();

  const scroll = contextSafe((target) => {
    ScrollTo(target, setNavIsExpanded(false));
  });

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <div 
            className="site-header__brand" 
            onClick={() => scroll(0, setNavIsExpanded(false))}
          >
            <Logo />
          </div>

          <button 
            className="site-header__nav-toggle"
            aria-controls="mobile-navigation"
            aria-expanded={navIsExpanded}
            onClick={() => setNavIsExpanded(!navIsExpanded)}
          >
            <span>Menu</span>
          </button>

          <MobileNav 
            navIsExpanded={navIsExpanded}
            setNavIsExpanded={setNavIsExpanded}
          />

          <PrimaryNav />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
