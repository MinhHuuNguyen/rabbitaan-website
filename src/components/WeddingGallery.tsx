import React, { useState } from "react";
import Modal from "react-modal";
import galleryData from "../utils/gallery.json";
import styles from "../styles/Gallery.module.css";


Modal.setAppElement("#__next"); 

const WeddingGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
    setIsPopupOpen(false);
  };

  return (
    <section className={styles.weddingGallery}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Our Wedding Gallery</h2>
        </div>
      </div>
      <div className={styles.galleryContainer}>
        {galleryData.images.map((image, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => handleImageClick(image)}
          >
            <img src={image} alt={`Wedding Image ${index}`} className={styles.galleryImage} />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isPopupOpen}
        onRequestClose={handleClosePopup}
        className={styles.modalContent} 
        overlayClassName={styles.modalOverlay} 
      >
        <button className={styles.closeButton} onClick={handleClosePopup}>
          &times;
        </button>
        {selectedImage && (
          <img src={selectedImage} alt="Selected Wedding" className={styles.popupImage} />
        )}
      </Modal>
    </section>
  );
};

export default WeddingGallery;
