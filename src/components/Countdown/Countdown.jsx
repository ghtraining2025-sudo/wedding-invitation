
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import useCountdown from '../../hooks/useCountdown';
import './Countdown.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Countdown() {
  const countdownRef = useRef(null);

  const {
    days,
    hours,
    minutes,
    seconds,
    completed,
  } = useCountdown();

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReducedMotion) return;

      gsap.from('.countdown-content > *', {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.countdown-content',
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: countdownRef },
  );

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <section className="countdown-section" ref={countdownRef}>
      <div className="countdown-frame">
        <div className="countdown-content">
          <p className="countdown-eyebrow">
            UNTIL OUR FOREVER BEGINS
          </p>

          <h2>
            The Big Day
          </h2>

          <div className="countdown-divider">
            <span />
            ✦
            <span />
          </div>

          {completed ? (
            <div className="countdown-completed">
              <h3>Alhamdulillah!</h3>
              <p>The wedding day has arrived.</p>
            </div>
          ) : (
            <div className="countdown-grid">
              {timeUnits.map((unit) => (
                <div className="countdown-item" key={unit.label}>
                  <div className="countdown-number">
                    {String(unit.value).padStart(2, '0')}
                  </div>

                  <span>{unit.label}</span>
                </div>
              ))}
            </div>
          )}

          <p className="countdown-date">
            Sunday · 20 December 2026
          </p>

          <p className="countdown-hijri arabic-text">
            Rajab 1448 Hijri
          </p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
