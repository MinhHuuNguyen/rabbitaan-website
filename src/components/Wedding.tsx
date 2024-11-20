import React, { useEffect, useState } from 'react';
import styles from '../styles/Wedding.module.css';
import eventsData from '../utils/our_wedding.json';

type Event = {
  image: string;
  title: string;
  location: string;
  time: string;
  description: string;
  mapLink: string;
};

const OurWedding: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Sử dụng dữ liệu từ file JSON đã import
    setEvents(eventsData.events);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Wedding Events</h2>
      <div className={styles.grid}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <img src={event.image} alt={event.title} />
            <div className={styles.cardContent}>
              <h3>{event.title}</h3>
              <div className={styles.details}>
                <p>📍 {event.location}</p>
                <p>⏰ {event.time}</p>
              </div>
              <p>{event.description}</p>
              <a href={event.mapLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
                See Location
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWedding;