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
    setEvents(eventsData.events);
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>OUR WEDDING</h2>
        </div>
        <div className={styles.eventContainer}>
          {events.map((event, index) => (
            <div key={index} className={styles.cardItem}>
              <div className={styles.imgItem}><img src={event.image}/></div>
              <div className={styles.cardContent}>
                <h3>{event.title}</h3>
                <ul>
                  <li><i className="fas fa-map-marker-alt"></i> {event.location}</li>
                  <li><i className="far fa-clock"></i> {event.time}</li>
                </ul>
                <p>{event.description}</p>
                <a href={event.mapLink} target="_blank" rel="noopener noreferrer" className={styles.button}>
                  See Location
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default OurWedding;