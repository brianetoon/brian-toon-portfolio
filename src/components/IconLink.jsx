import React from 'react';
import { 
  IconGitHub, IconLinkedIn, IconTwitter 
} from '../assets/icons';


const IconLink = ({ name, className, url }) => {

  const renderIcon = () => {
    switch (name) {
      case 'GitHub':
        return <IconGitHub className={className} />;
      case 'LinkedIn':
        return <IconLinkedIn className={className} />;
      case 'Twitter':
        return <IconTwitter className={className} />;
      default:
        return <IconTwitter className={className} />;
    }
  };

  return (
    <a href={url} target="_blank">
      {renderIcon()}
    </a>
  );
}

export default IconLink;
