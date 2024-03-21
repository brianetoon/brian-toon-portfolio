import React from 'react';
import IconLinkGroup from './IconLinkGroup';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/brian-toon-24394444/'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/brianetoon',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/BrianEToon'
  }
];

const SocialLinks = () => {
  return (
    <IconLinkGroup links={socialLinks} />
  );
}

export default SocialLinks;
