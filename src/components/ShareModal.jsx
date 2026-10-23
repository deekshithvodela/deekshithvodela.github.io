import React, { useEffect, useRef } from 'react';
import Icon from './Icon';

export default function ShareModal({ isOpen, onClose, shareData, onToast }) {
  const modalRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Close on Escape key and trap focus
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !shareData) return null;

  const canonicalUrl = "https://deekshithvodela.github.io/";
  const currentUrl = shareData.url || (typeof window !== "undefined" && window.location.hostname && !window.location.hostname.includes("localhost") ? window.location.href : canonicalUrl);
  const shareTitle = shareData.title || "Deekshith Vodela | Graphic Designer";
  const shareText = shareData.text || `Check out ${shareTitle}:`;

  const handleCopyLink = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(currentUrl);
        onToast("Link copied to clipboard!");
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = currentUrl;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        onToast("Link copied to clipboard!");
      }
    } catch (err) {
      console.error("Failed to copy link:", err);
      onToast("Unable to copy automatically. Please copy the URL manually.");
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${currentUrl}`)}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n\n${currentUrl}`)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
  const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="presentation"
      id="share-modal-overlay"
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="share-modal-title"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="share-modal-title" className="modal-title">
            {shareData.isLink ? "Share link" : "Share this profile"}
          </h2>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close share dialog"
            onClick={onClose}
            ref={closeBtnRef}
            id="close-share-modal-btn"
          >
            <Icon name="close" />
          </button>
        </div>

        <div className="modal-body">
          {/* Crimson Preview Card */}
          <div className="share-preview-card">
            <div className="share-preview-avatar">
              <img
                src={shareData.avatar || "./assets/images/avatar.jpeg"}
                alt=""
                aria-hidden="true"
              />
            </div>
            <div className="share-preview-name">{shareData.name || "@deekshithvodela"}</div>
            <div className="share-preview-sub">
              {shareData.subtitle || (shareData.isLink ? shareData.url : "Graphic Designer")}
            </div>
          </div>

          {/* Social / Direct Share Actions */}
          <div className="share-actions-row">
            <button
              type="button"
              className="share-action-item"
              onClick={handleCopyLink}
              id="share-copy-btn"
            >
              <div className="share-circle-btn copy">
                <Icon name="copy" />
              </div>
              <span className="share-action-label">Copy link</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="share-action-item"
              id="share-whatsapp-btn"
            >
              <div className="share-circle-btn whatsapp">
                <Icon name="whatsapp" />
              </div>
              <span className="share-action-label">WhatsApp</span>
            </a>

            <a
              href={emailUrl}
              className="share-action-item"
              id="share-email-btn"
            >
              <div className="share-circle-btn email">
                <Icon name="email" />
              </div>
              <span className="share-action-label">Email</span>
            </a>

            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="share-action-item"
              id="share-twitter-btn"
            >
              <div className="share-circle-btn x">
                <Icon name="x" />
              </div>
              <span className="share-action-label">X</span>
            </a>

            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="share-action-item"
              id="share-linkedin-btn"
            >
              <div className="share-circle-btn linkedin">
                <Icon name="linkedin-share" />
              </div>
              <span className="share-action-label">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
