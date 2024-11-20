import React from "react";
// Import JSON
import galleryData from "../utils/gallery.json";
import styles from "../styles/Gallery.module.css";

const WeddingGallery = () => {
  return (
    <section className={styles.weddingGallery}>
      {/* Tiêu đề */}
      <h2 className={styles.galleryTitle}>Our Wedding Gallery</h2>

      {/* Lưới ảnh */}
      <div className={styles.galleryGrid}>
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
