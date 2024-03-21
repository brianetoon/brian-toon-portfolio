import React, { useState } from "react";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";
import Logo from "../assets/icons/logo.svg";
import MobileNav from "./navigation/MobileNav";
import PrimaryNav from "./navigation/PrimaryNav";
import Hamburger from "./navigation/Hamburger";
import ScrollTo from "../animations/ScrollTo";
import { useGSAP } from "@gsap/react";
import { accessibleOnClick } from "../helpers/accessibleEventHandlers";


const SiteHeader = () => {
  const [navIsExpanded, setNavIsExpanded] = useState(false);
  const { contextSafe } = useGSAP();
  const location = useLocation();

  const scroll = contextSafe((target) => {
    if (location.pathname !== "/") {
      navigate('/');
    } else {
      ScrollTo(target, setNavIsExpanded(false));
    }
  });

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <div 
            className="site-header__brand" 
            {...accessibleOnClick(() => scroll(0))}
          >
            <Logo />
          </div>

          <button 
            className="site-header__nav-toggle"
            aria-controls="mobile-navigation"
            aria-expanded={navIsExpanded}
            onClick={() => setNavIsExpanded(!navIsExpanded)}
          >
            <Hamburger navIsExpanded={navIsExpanded} />
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
