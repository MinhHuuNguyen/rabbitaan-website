import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import weddingData from "../utils/wedding_box.json";
import Image from "next/image";

const WeddingBox: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [currentImage, setCurrentImage] = useState<string>(""); 

  const openLightbox = (image: string) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  return (
    <div id="gifts" className="bg-floralwhite py-8 flex justify-center">
      <div className="max-w-4xl w-full">
        <div className="mb-12 text-center uppercase">
          <h2 className="font-serif text-4xl text-[#6d4c41] mb-5">HÒM MỪNG CƯỚI</h2>
        </div>
        <div className="flex flex-wrap gap-6 justify-center">
          {weddingData.map((item) => (
            <div
              key={item.accountNumber}
              className="bg-white p-12 w-[410px] h-[436px] border-2 border-pink-200 rounded-md relative"
            >
              <h2 className="text-lg text-center font-bold text-gray-900 mb-4">{item.title}</h2>
              <Image
                src={item.qrCode}
                alt="QR Code"
                width={160}
                height={160}
                className="w-40 h-30 mx-auto mb-4 cursor-pointer"
                onClick={() => openLightbox(item.qrCode)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={[{ src: currentImage }]} 
        />
      )}
    </div>
  );
};

export default WeddingBox;
