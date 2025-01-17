import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import styles from "../styles/Wedding.module.css";
import eventsData from "../utils/our_wedding.json";
import Image from "next/image";

type Event = {
  image: string;
  title: string;
  location: string;
  address: string;
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
    <div id="wedding" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>OUR WEDDING</h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.eventSlider}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className={styles.cardItem}>
                <div className={styles.imgItem}>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    layout="responsive"
                  />
                </div>
                <div className={styles.cardContent}>
                  <h3>{event.title}</h3>
                  <ul>
                    <li><i className="fas fa-map-marker-alt"></i> {event.location}</li>
                    <li><i className="fas fa-map-marker-alt"></i> {event.address}</li>
                    <li><i className="far fa-clock"></i> {event.time}</li>
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
            </SwiperSlide>
          ))}
        </Swiper>
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
