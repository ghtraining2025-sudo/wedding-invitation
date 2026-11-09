
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import weddingData from '../../data/weddingData';
import './ClosingSection.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ClosingSection() {
  const closingRef = useRef(null);
  const { closing } = weddingData;

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReducedMotion) return;

      gsap.from('.closing-content > *', {
        opacity: 0,
        y: 20,
        duration: 0.9,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.closing-content',
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: closingRef },
  );

  return (
    <footer className="closing-section" ref={closingRef}>
      <div className="closing-frame">
        <div className="closing-content">
          <span className="closing-ornament">❧</span>

          <p className="closing-eyebrow">
            THE BEGINNING OF FOREVER
          </p>

          <h2>{closing.heading}</h2>

          <div className="closing-divider">
            <span />
            ✦
            <span />
          </div>

          <p className="closing-message">
            {closing.message}
          </p>

          <h3 className="closing-couple">
            {closing.coupleNames}
          </h3>

          <p className="closing-footer-message">
            {closing.footerMessage}
          </p>

          <div className="closing-signature">
            {closing.signature}
          </div>

          <span className="closing-ornament closing-ornament--bottom">
            ❧
          </span>
        </div>
      </div>

      <div className="closing-copyright">
        <p>MADE WITH LOVE & BLESSINGS</p>
      </div>
    </footer>
  );
}

export default ClosingSection;
