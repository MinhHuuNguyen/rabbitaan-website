import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryData from "../utils/gallery.json";
import { Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";

const WeddingGallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = galleryData.images.map((image) => ({ src: image }));

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="gallery" className="my-20 mx-5 w-full">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-12 text-center uppercase">
          <h2 className="font-serif text-4xl text-[#6d4c41] mb-5">Our Wedding Gallery</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-screen-xl mx-auto">
        {galleryData.images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden w-full pt-[100%] cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt={`Wedding Image ${index}`}
              width={400}
              height={400}
              className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform grayscale-[50%] hover:scale-110 hover:grayscale-0"
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
