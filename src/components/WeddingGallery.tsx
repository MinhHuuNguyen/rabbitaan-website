import React from "react";
// Import JSON
import galleryData from "../utils/gallery.json";
import styles from "../styles/Gallery.module.css";

const WeddingGallery = () => {
  return (
    <section className={styles.weddingGallery}>
      <div className={styles.container}>
        <div className={styles.sectionTitle}>
          <h2>Our Wedding Gallery</h2>
        </div>
      </div>
      <div className={styles.galleryContainer}>
        {galleryData.images.map((image, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={image} className={styles.galleryImage} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeddingGallery;
