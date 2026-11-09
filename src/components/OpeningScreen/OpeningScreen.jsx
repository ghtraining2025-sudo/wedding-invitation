
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './OpeningScreen.scss';

gsap.registerPlugin(useGSAP);

function OpeningScreen({ onOpenComplete, onStartOpening }) {
  const containerRef = useRef(null);
  const sealRef = useRef(null);
  const sealGlowRef = useRef(null);
  const buttonRef = useRef(null);

  const [isOpening, setIsOpening] = useState(false);

  useGSAP(
    () => {
      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      timeline
        .from('.opening-frame', {
          opacity: 0,
          duration: 1,
        })
        .from(
          '.opening-bismillah',
          { opacity: 0, y: -20, duration: 0.8 },
          '-=0.5',
        )
        .from(
          '.opening-heading',
          { opacity: 0, y: 25, duration: 0.9 },
          '-=0.4',
        )
        .from(
          '.opening-description',
          { opacity: 0, y: 15, duration: 0.7 },
          '-=0.5',
        )
        .from(
          '.opening-couple-names',
          { opacity: 0, y: 20, duration: 0.8 },
          '-=0.4',
        )
        .from(
          sealRef.current,
          { opacity: 0, scale: 0.5, rotation: -25, duration: 1 },
          '-=0.3',
        )
        .from(
          buttonRef.current,
          { opacity: 0, y: 20, duration: 0.7 },
          '-=0.4',
        );

      // Gentle idle glow around the seal
      gsap.to(sealGlowRef.current, {
        scale: 1.18,
        opacity: 0.65,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    },
    { scope: containerRef },
  );

  const handleOpenInvitation = () => {
    if (isOpening) return;

    setIsOpening(true);

    // Start music directly from the user's click.
    onStartOpening?.();

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      onOpenComplete?.();
      return;
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        onOpenComplete?.();
      },
    });

    timeline
      // Seal glows and grows
      .to(sealGlowRef.current, {
        scale: 2.2,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
      })
      .to(
        sealRef.current,
        {
          scale: 1.45,
          rotation: 35,
          opacity: 0,
          filter: 'blur(8px)',
          duration: 0.85,
          ease: 'power3.in',
        },
        '-=0.45',
      )
      // Decorative gold particles dissolve
      .to(
        '.seal-particle',
        {
          opacity: 0,
          scale: 1.8,
          y: (index) => (index % 2 === 0 ? -45 : 45),
          x: (index) => (index % 2 === 0 ? 35 : -35),
          duration: 0.7,
          stagger: 0.04,
        },
        '-=0.65',
      )
      // Transition the complete opening screen
      .to(
        '.opening-content',
        {
          opacity: 0,
          scale: 1.025,
          filter: 'blur(5px)',
          duration: 0.7,
          ease: 'power2.inOut',
        },
        '-=0.35',
      );
  };

  return (
    <main className="opening-screen" ref={containerRef}>
      <div className="opening-background-glow" />
      <div className="opening-background-pattern" />

      <div className="opening-frame">
        <span className="frame-corner corner-top-left">❧</span>
        <span className="frame-corner corner-top-right">❧</span>
        <span className="frame-corner corner-bottom-left">❧</span>
        <span className="frame-corner corner-bottom-right">❧</span>

        <div className="opening-content">
          <p className="opening-bismillah" lang="ar" dir="rtl">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          <div className="opening-divider">
            <span />
            <i>✦</i>
            <span />
          </div>

          <p className="opening-eyebrow">
            TOGETHER WITH OUR FAMILIES
          </p>

          <h1 className="opening-heading">You're Invited</h1>

          <p className="opening-description">
            With the blessings of Allah and the love of our
            families, we invite you to share in a beautiful
            celebration.
          </p>

          <div className="opening-couple-names">
            <span>Hafez Akmal Ahmed</span>
            <i>&</i>
            <span>Aliza Aleem</span>
          </div>

          <div className="seal-stage">
            <span className="seal-particle particle-one">✦</span>
            <span className="seal-particle particle-two">✧</span>
            <span className="seal-particle particle-three">✦</span>
            <span className="seal-particle particle-four">✧</span>
            <span className="seal-particle particle-five">✦</span>
            <span className="seal-particle particle-six">✧</span>

            <div className="seal-glow" ref={sealGlowRef} />

            <div className="wax-seal" ref={sealRef}>
              <span className="wax-monogram">A&A</span>
              <span className="wax-seal-star">✦</span>
            </div>
          </div>

          <button
            ref={buttonRef}
            className="open-invitation-button"
            type="button"
            onClick={handleOpenInvitation}
            disabled={isOpening}
          >
            <span className="button-shimmer" />
            <span className="button-label">
              {isOpening ? 'OPENING INVITATION' : 'OPEN INVITATION'}
            </span>
            <span className="button-arrow">⟶</span>
          </button>

          <p className="opening-caption">
            A little invitation, a lifetime of memories
          </p>

          <p className="opening-footer">
            MADE WITH LOVE & BLESSINGS
          </p>
        </div>
      </div>
    </main>
  );
}

export default OpeningScreen;
