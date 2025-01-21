import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Modal from "react-modal";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import galleryData from "../utils/gallery.json";
import { Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";

const WeddingGallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const images = galleryData.images.map((image) => ({ src: image }));

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section id="gallery" className="my-20 w-full">
      {/* Gallery */}
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2>Album ảnh cưới</h2>
        </div>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 gap-4 max-w-screen-xl mx-auto">
        {galleryData.images.map((image, index) => (
          <div
            key={index}
            className="mb-4 break-inside-avoid cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image}
              alt={`Wedding Image ${index}`}
              width={400}
              height={400}
              className="w-full object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Video */}
      <div className="relative flex items-center justify-center h-screen bg-[url('https://lirp.cdn-website.com/28cd0bb4/dms3rep/multi/opt/traditional+american+wedding-1920w.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center z-10 flex flex-col items-center">
          <h2 className="text-4xl text-white font-bold mb-4">Xem video cưới của chúng tôi</h2>
          <p className="text-lg text-white mb-8">
            Tình yêu không làm thế giới quay tròn. Tình yêu là những gì làm cho chuyến đi đáng giá.
          </p>
          <button
            onClick={openModal}
            className="flex items-center justify-center w-16 h-16 border-2 border-white rounded-full shadow-lg hover:scale-110 transform transition-all duration-300 bg-transparent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.75 16.5v-9l6 4.5-6 4.5z" />
            </svg>
          </button>

        </div>
      </div>

      {/* Modal Video */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
         className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-4 bg-white rounded mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center"
      >
        {/* Nút đóng modal */}
        <button
          onClick={closeModal}
          className="absolute top-[-1rem] right-[-1rem] w-6 h-6 flex items-center justify-center bg-black border-2 border-white-300 rounded-full shadow "
        >
          <XMarkIcon className="w-4 h-4 text-white" />
        </button>

        {/* Video YouTube */}
        <iframe
          className="w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
          src="https://www.youtube.com/embed/a7fzkqLozwA?si=ep12eBz6Z8wFRhCl"
          title="Wedding Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal>

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
