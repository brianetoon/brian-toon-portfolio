import React from 'react';
import IconLink from './IconLink';

const IconLinkGroup = ({ links }) => {
  return (
    <div className="social-links | flex-group align-center">
      {links.map(link => (
        <IconLink 
          key={link.url}
          url={link.url} 
          name={link.name} 
        />
      ))}
    </div>
  );
}

export default IconLinkGroup;
