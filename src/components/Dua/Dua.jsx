
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import weddingData from '../../data/weddingData';
import './Dua.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Dua() {
  const duaRef = useRef(null);
  const { dua } = weddingData;

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReducedMotion) return;

      gsap.from('.dua-content > *', {
        opacity: 0,
        y: 25,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.dua-content',
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: duaRef },
  );

  return (
    <section className="dua-section" ref={duaRef}>
      <div className="dua-card">
        <div className="dua-border">
          <div className="dua-content">
            <span className="dua-ornament">❧</span>

            <p className="dua-eyebrow">
              A PRAYER FOR THE COUPLE
            </p>

            <h2>{dua.heading}</h2>

            <div className="dua-divider">
              <span />
              ✦
              <span />
            </div>

            <p className="dua-arabic arabic-text" lang="ar">
              {dua.arabic}
            </p>

            <div className="dua-divider dua-divider--small">
              <span />
              ❧
              <span />
            </div>

            <p className="dua-translation">
              "{dua.translation}"
            </p>

            <p className="dua-reference">
              {dua.reference}
            </p>

            <span className="dua-ornament dua-ornament--bottom">
              ❧
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dua;
