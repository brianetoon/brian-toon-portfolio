import React from 'react';
import { Link } from 'gatsby';
import Logo from '../assets/icons/logo.svg';

const SiteHeader = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header__inner">
          <Link to="/" className="site-header__brand">
            <Logo />
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
