import React from 'react';

export default function ProfileHeader({ profile }) {
  return (
    <header className="profile-header">
      <div className="avatar-wrapper">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="avatar-img"
          width="96"
          height="96"
          loading="eager"
        />
      </div>
      <h1 className="profile-title">{profile.name}</h1>
      <p className="profile-bio">{profile.bio}</p>
    </header>
  );
}
