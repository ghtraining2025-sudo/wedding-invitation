
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { MapPin, Clock, CalendarDays, MoonStar, Utensils } from 'lucide-react';

import weddingData from '../../data/weddingData';
import './Events.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function EventCard({ event, index }) {
  const isNikah = event.id === 'nikah';

  const directionsUrl =
    event.mapsUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${event.venue}, ${event.address}`,
    )}`;

  const EventIcon = isNikah ? MoonStar : Utensils;

  return (
    <article className="event-card">
      <div className="event-card-header">
        <span className="event-number">
          0{index + 1}
        </span>

        <div className="event-icon">
          <EventIcon size={25} strokeWidth={1.5} />
        </div>

        <p className="event-category">
          {isNikah ? 'THE SACRED BEGINNING' : 'THE CELEBRATION'}
        </p>

        <h3>{event.name}</h3>

        <span className="event-divider">
          ✦
        </span>
      </div>

      <div className="event-card-body">
        <div className="event-information">
          <CalendarDays size={17} />

          <div>
            <span>Date</span>
            <p>
              {event.day}, {event.date}
            </p>
          </div>
        </div>

        <div className="event-information">
          <Clock size={17} />

          <div>
            <span>Time</span>
            <p>{event.time}</p>
          </div>
        </div>

        <div className="event-information event-information--venue">
          <MapPin size={17} />

          <div>
            <span>Venue</span>
            <p className="event-venue-name">{event.venue}</p>
            <p className="event-address">{event.address}</p>
          </div>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="event-directions"
          aria-label={`Get directions to ${event.venue}`}
        >
          <MapPin size={16} />
          Get Directions
          <span>↗</span>
        </a>
      </div>
    </article>
  );
}

function Events() {
  const eventsRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReducedMotion) return;

      gsap.from('.events-heading > *', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.events-heading',
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from('.event-card', {
        opacity: 0,
        y: 35,
        duration: 0.9,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.events-grid',
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: eventsRef },
  );

  const events = weddingData.events;

  return (
    <section className="events-section" ref={eventsRef}>
      <div className="events-container">
        <header className="events-heading">
          <p className="events-eyebrow">
            SAVE THE DATE
          </p>

          <h2>Our Celebrations</h2>

          <p className="events-description">
            Two beautiful moments, one blessed day.
            We would be honoured to celebrate with you.
          </p>

          <div className="events-date">
            <span>{weddingData.invitation.day}</span>
            <strong>{weddingData.invitation.weddingDate}</strong>
            <span>{weddingData.invitation.hijriDate}</span>
          </div>
        </header>

        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard
              key={event.id}
              event={event}
              index={index}
            />
          ))}
        </div>

        <div className="events-closing">
          <span>❧</span>
          <p>We look forward to celebrating with you</p>
          <span>❧</span>
        </div>
      </div>
    </section>
  );
}

export default Events;
