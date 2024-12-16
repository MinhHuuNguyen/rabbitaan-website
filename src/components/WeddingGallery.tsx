import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryData from "../utils/gallery.json";
import styles from "../styles/Gallery.module.css";
import {
  Captions,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

const WeddingGallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = galleryData.images.map((image) => ({ src: image }));

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
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
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Wedding Image ${index}`}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          plugins={[Download, Fullscreen, Zoom, Thumbnails]}
          slides={images} 
          open={isLightboxOpen} 
          close={() => setIsLightboxOpen(false)} 
          index={currentIndex} 
        />
      )}
    </section>
  );
};

export default WeddingGallery;
