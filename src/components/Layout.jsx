import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import "../sass/main.scss";
import gsap from 'gsap';
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SiteHeader />
      { children }
      <SiteFooter />
    </div>
  );
}

export default Layout;
