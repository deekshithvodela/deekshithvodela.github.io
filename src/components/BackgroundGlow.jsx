import React from 'react';

export default function BackgroundGlow({ avatarUrl = './assets/images/avatar.jpeg' }) {
  return (
    <>
      <div
        className="bg-ambient-layer"
        style={{ backgroundImage: `url(${avatarUrl})` }}
        aria-hidden="true"
      />
      <div className="bg-noise-layer" aria-hidden="true" />
    </>
  );
}
