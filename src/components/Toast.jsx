import React from 'react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}
