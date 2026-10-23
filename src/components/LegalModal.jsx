import React, { useEffect, useRef } from 'react';
import Icon from './Icon';

export default function LegalModal({ isOpen, type, onClose }) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (closeBtnRef.current) closeBtnRef.current.focus();

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let title = '';
  let content = null;

  if (type === 'license') {
    title = 'MIT License';
    content = (
      <div className="legal-content">
        <p className="legal-subtitle"><strong>Copyright &copy; 2026 Deekshith Vodela</strong></p>
        <p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
        <p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>
        <p className="legal-disclaimer">THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
      </div>
    );
  } else if (type === 'privacy') {
    title = 'Privacy Policy';
    content = (
      <div className="legal-content">
        <p>This standalone portfolio website (<strong>https://deekshithvodela.github.io/</strong>) is built and maintained by Deekshith Vodela.</p>
        <h4 className="legal-section-title">Data Collection &amp; Cookies</h4>
        <p>This website is entirely static. We do not use tracking cookies, analytics trackers, or personal data collection scripts. Browsing this site is completely anonymous.</p>
        <h4 className="legal-section-title">External Links</h4>
        <p>This site contains direct links to external platforms including Behance, Substack, Instagram, LinkedIn, YouTube, and GitHub. When navigating to these external sites, please review their respective privacy policies and terms of service.</p>
        <p><em>Last updated: October 2026</em></p>
      </div>
    );
  } else if (type === 'disclosure') {
    title = 'Disclosure';
    content = (
      <div className="legal-content">
        <h4 className="legal-section-title">Independent Portfolio</h4>
        <p>This website is an independent portfolio owned and operated by Deekshith Vodela. It is independently designed, hosted, and maintained.</p>
        <h4 className="legal-section-title">Creative Work &amp; Intellectual Property</h4>
        <p>All design assets, brand logos, case studies, graphics, and code showcased on this site represent personal creative portfolio work, original design projects, or designated open-source repositories.</p>
        <p><em>Last updated: October 2026</em></p>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div
        className="modal-dialog legal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2 id="legal-modal-title" className="modal-title">{title}</h2>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close dialog"
            onClick={onClose}
            ref={closeBtnRef}
          >
            <Icon name="close" />
          </button>
        </div>
        <div className="modal-body legal-modal-body">
          {content}
        </div>
      </div>
    </div>
  );
}
