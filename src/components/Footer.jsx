import React from 'react';
import Icon from './Icon';

export default function Footer({ onOpenLegal }) {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site legal and newsletter information">
      <div className="footer-container">
        {/* Left Side: Copyright, License & Policies */}
        <div className="footer-left">
          <a
            href="https://www.linkedin.com/in/deekshithvodela/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-copyright-link"
            title="Deekshith Vodela LinkedIn Profile"
          >
            &copy; 2026 Deekshith Vodela
          </a>
          <span className="footer-bullet" aria-hidden="true">&bull;</span>
          <button
            type="button"
            className="footer-text-btn"
            onClick={() => onOpenLegal('license')}
          >
            MIT License
          </button>
          <span className="footer-bullet" aria-hidden="true">&bull;</span>
          <button
            type="button"
            className="footer-text-btn"
            onClick={() => onOpenLegal('privacy')}
          >
            Privacy Policy
          </button>
          <span className="footer-bullet" aria-hidden="true">&bull;</span>
          <button
            type="button"
            className="footer-text-btn"
            onClick={() => onOpenLegal('disclosure')}
          >
            Disclosure
          </button>
          <span className="footer-bullet" aria-hidden="true">&bull;</span>
          <span className="footer-date-text">Data updated: October 2026</span>
        </div>

        {/* Right Side: Subscribe to Newsletter Pill Button */}
        <div className="footer-right">
          <a
            href="https://deekshithvodela.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="newsletter-pill-btn"
            aria-label="Subscribe to Newsletter on Substack"
          >
            <span className="newsletter-icon" aria-hidden="true">
              <Icon name="email" />
            </span>
            <span className="newsletter-text">Subscribe to Newsletter</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
