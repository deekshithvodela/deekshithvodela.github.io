import React from 'react';
import Icon from './Icon';

export default function LinkButton({ link, onShareLink }) {
  const handleDotsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onShareLink) {
      onShareLink(link);
    }
  };

  return (
    <div className="link-card">
      <a
        href={link.url}
        target={link.openInNewTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="link-card-link"
        aria-label={link.label}
        id={`link-${link.id}`}
      >
        <div className="link-icon-box" aria-hidden="true">
          <Icon name={link.icon} />
        </div>
        <div className="link-label-box">
          <span className="link-label">{link.label}</span>
        </div>
      </a>
      <button
        type="button"
        className="link-action-btn"
        aria-label={`Share ${link.label}`}
        onClick={handleDotsClick}
        title="Share link"
      >
        <Icon name="three-dots" />
      </button>
    </div>
  );
}
