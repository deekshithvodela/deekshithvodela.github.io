import React, { useState } from 'react';
import linksData from './data/links.json';
import BackgroundGlow from './components/BackgroundGlow';
import ProfileHeader from './components/ProfileHeader';
import LinkButton from './components/LinkButton';
import SocialLinks from './components/SocialLinks';
import ShareButton from './components/ShareButton';
import ShareModal from './components/ShareModal';
import Toast from './components/Toast';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';

export default function App() {
  const { profile, links, socialLinks } = linksData;
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareData, setShareData] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [legalModalType, setLegalModalType] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleProfileShare = async () => {
    const canonicalUrl = "https://deekshithvodela.github.io/";
    const shareUrl = typeof window !== "undefined" && window.location.hostname && !window.location.hostname.includes("localhost")
      ? window.location.href
      : canonicalUrl;

    const data = {
      title: `${profile.name} | ${profile.bio}`,
      text: `Check out ${profile.name}'s creative portfolio and links:`,
      url: shareUrl,
      name: profile.name,
      subtitle: profile.bio,
      avatar: profile.avatar,
      isLink: false
    };

    if (navigator.share) {
      try {
        await navigator.share({
          title: data.title,
          text: data.text,
          url: data.url
        });
        return;
      } catch (err) {
        if (err.name === 'AbortError') {
          // User cancelled native share
          return;
        }
        // If native share threw other error, fallback to modal
      }
    }

    setShareData(data);
    setIsShareOpen(true);
  };

  const handleLinkShare = async (link) => {
    const data = {
      title: `${link.label} | ${profile.name}`,
      text: `Check out "${link.label}":`,
      url: link.url,
      name: link.label,
      subtitle: link.url.replace(/^https?:\/\//, ''),
      avatar: profile.avatar,
      isLink: true
    };

    if (navigator.share) {
      try {
        await navigator.share({
          title: data.title,
          text: data.text,
          url: data.url
        });
        return;
      } catch (err) {
        if (err.name === 'AbortError') {
          return;
        }
      }
    }

    setShareData(data);
    setIsShareOpen(true);
  };

  return (
    <>
      <BackgroundGlow avatarUrl={profile.avatar} />
      <ShareButton onClick={handleProfileShare} />

      <main className="page-wrapper" id="main-content">
        <div className="content-container">
          <ProfileHeader profile={profile} />

          <section className="links-section" aria-label="Portfolio links">
            {links.map((link) => (
              <LinkButton
                key={link.id}
                link={link}
                onShareLink={handleLinkShare}
              />
            ))}
          </section>

          <SocialLinks socialLinks={socialLinks} />
        </div>

        <Footer onOpenLegal={(type) => setLegalModalType(type)} />
      </main>

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        shareData={shareData}
        onToast={showToast}
      />

      <LegalModal
        isOpen={!!legalModalType}
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <Toast message={toastMessage} />
    </>
  );
}
