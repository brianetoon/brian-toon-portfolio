import React from 'react';
import { Link } from 'gatsby';
// import Icon from '../assets/icons/twitter.svg'

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <Link to="/" className="site-header__brand">
            {/* <img src="/logo.svg" alt="BT logo" /> */}
            {/* <Icon width="100%" /> */}
          </Link>
          <nav>
            <ul className="nav | flex-group">
              <li><Link to="/#about">About</Link></li>
              <li><Link to="/#projects">Projects</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
