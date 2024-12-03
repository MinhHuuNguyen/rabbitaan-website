import React, { useState } from "react";
import galleryData from "../utils/gallery.json";
import styles from "../styles/Gallery.module.css";

const WeddingGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); 
  const [isPopupOpen, setIsPopupOpen] = useState(false); 

  const handleImageClick = (image: any) => {
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

      {/* Popup */}
      {isPopupOpen && (
        <div className={styles.popupOverlay} onClick={handleClosePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={handleClosePopup}>
              &times;
            </button>
            <img src={selectedImage || ''} alt="Selected Wedding" className={styles.popupImage} />
          </div>
        </div>
      )}
    </section>
  );
};

export default WeddingGallery;
