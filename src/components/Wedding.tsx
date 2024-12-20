import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "../styles/Wedding.module.css";
import eventsData from "../utils/our_wedding.json";

type Event = {
  image: string;
  title: string;
  location: string;
  time: string;
  description: string;
  mapLink: string;
};

Modal.setAppElement("#__next"); 

const OurWedding: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMapLink, setCurrentMapLink] = useState("");

  useEffect(() => {
    setEvents(eventsData.events);
  }, []);

  const handleOpenModal = (mapLink: string) => {
    setCurrentMapLink(mapLink);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentMapLink("");
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>OUR WEDDING</h2>
        </div>
        <div className={styles.eventContainer}>
          {events.map((event, index) => (
            <div key={index} className={styles.cardItem}>
              <div className={styles.imgItem}>
                <img src={event.image} alt={event.title} />
              </div>
              <div className={styles.cardContent}>
                <h3>{event.title}</h3>
                <ul>
                  <li>
                    <i className="fas fa-map-marker-alt"></i> {event.location}
                  </li>
                  <li>
                    <i className="far fa-clock"></i> {event.time}
                  </li>
                </ul>
                <p>{event.description}</p>
                <button
                  onClick={() => handleOpenModal(event.mapLink)}
                  className={styles.button}
                >
                  See Location
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button onClick={handleCloseModal} className={styles.closeButton}>
          &times;
        </button>
        {currentMapLink && (
          <iframe
            src={currentMapLink}
            width="900px"
            height="500px"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        )}
      </Modal>
    </div>
  );
};

export default OurWedding;
