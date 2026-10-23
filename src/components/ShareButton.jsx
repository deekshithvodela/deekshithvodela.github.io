import React from 'react';
import Icon from './Icon';

export default function ShareButton({ onClick }) {
  return (
    <aside className="top-action-bar" aria-label="Quick actions">
      <button
        type="button"
        className="top-share-btn"
        aria-label="Share profile"
        id="share-profile-btn"
        onClick={onClick}
        title="Share profile"
      >
        <Icon name="share" />
      </button>
    </aside>
  );
}
