import React from "react";
import SocialLinks from "./SocialLinks";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__inner">
          <p className="text-center">
            Designed with creativity and precision by <a href="https://kaytoondesign.com/" rel="noreferrer" target="_blank">Kay Toon</a> and built with <a href="https://www.gatsbyjs.com/" rel="noreferrer" target="_blank">Gatsby</a> by <a href="https://github.com/brianetoon/brian-toon-portfolio" rel="noreferrer" target="_blank">me</a>.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
