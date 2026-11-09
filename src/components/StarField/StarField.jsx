
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './StarField.scss';

const stars = [
  [5, 12, 5], [12, 72, 3], [18, 32, 4], [25, 88, 3],
  [31, 18, 4], [38, 60, 3], [45, 8, 5], [52, 80, 4],
  [59, 36, 3], [66, 14, 4], [73, 68, 5], [80, 28, 3],
  [87, 84, 4], [94, 45, 5], [9, 48, 3], [22, 56, 5],
  [42, 92, 3], [62, 54, 4], [77, 8, 3], [91, 18, 4],
];

function StarField() {
  const fieldRef = useRef(null);

  useGSAP(
    () => {
      const starElements = fieldRef.current?.querySelectorAll('.ambient-star');

      if (!starElements?.length) return;

      starElements.forEach((star, index) => {
        gsap.to(star, {
          opacity: index % 3 === 0 ? 0.95 : 0.65,
          scale: index % 3 === 0 ? 1.5 : 1.2,
          y: index % 2 === 0 ? -9 : 9,
          duration: 2.2 + (index % 5) * 0.45,
          repeat: -1,
          yoyo: true,
          delay: (index % 7) * 0.3,
          ease: 'sine.inOut',
        });
      });
    },
    { scope: fieldRef },
  );

  return (
    <div className="star-field" ref={fieldRef} aria-hidden="true">
      {stars.map(([left, top, size], index) => (
        <span
          className={`ambient-star ${index % 4 === 0 ? 'ambient-star-large' : ''}`}
          key={`${left}-${top}`}
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      ))}
    </div>
  );
}

export default StarField;
