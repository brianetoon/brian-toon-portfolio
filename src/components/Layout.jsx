import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

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
