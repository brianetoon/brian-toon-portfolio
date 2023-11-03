import React from 'react';
import SiteHeader from './SiteHeader';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <SiteHeader />
      { children }
    </div>
  );
}

export default Layout;
