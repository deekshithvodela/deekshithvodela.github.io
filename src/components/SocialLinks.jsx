import React from 'react';
import Icon from './Icon';

export default function SocialLinks({ socialLinks }) {
  return (
    <nav className="social-links-row" aria-label="Social media profiles">
      {socialLinks.map((item) => (
        <a
          key={item.platform}
          href={item.url}
          target={item.openInNewTab ? "_blank" : "_self"}
          rel="noopener noreferrer"
          className="social-btn"
          aria-label={`@deekshithvodela on ${item.platform}`}
          id={`social-${item.platform.toLowerCase()}`}
        >
          <Icon name={item.icon} />
        </a>
      ))}
    </nav>
  );
}
