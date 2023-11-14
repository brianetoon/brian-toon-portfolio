import React from 'react';
import { 
  IconExternal, 
  IconGitHub, 
  IconGitHubOne, 
  IconLinkedIn, 
  IconTwitter 
} from '../assets/icons';

const IconLink = ({ name, url, className }) => {

  const renderIcon = () => {
    switch (name) {
      case 'External':
        return <IconExternal className="icon-link" />;
      case 'GitHub':
        return <IconGitHub className="icon-link" />;
      case 'GitHubOne':
        return <IconGitHubOne className="icon-link" />;
      case 'LinkedIn':
        return <IconLinkedIn className="icon-link" />;
      case 'Twitter':
        return <IconTwitter className="icon-link" />;
      default:
        return <IconTwitter className="icon-link" />;
    }
  };

  return (
    <a href={url} rel="noreferrer" target="_blank">
      {renderIcon()}
    </a>
  );
}

export default IconLink;
